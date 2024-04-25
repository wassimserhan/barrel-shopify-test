let __cache = {}

const errors = {
  duplicate ([id, ...args]) {
    return [
      `a duplicate key ${id} was found in the cache. This instance will be overwritten.`,
      ...args
    ]
  },
  undefined ([id, ...args]) {
    return [
      `can't find ${id} in the cache`,
      ...args
    ]
  },
  error ([id, ...args]) {
    return [
      `${id} threw an error\n\n`,
      ...args
    ]
  }
}

function log (level, type, ...args) {
  console[level]('⚙️ micromanager -', ...errors[type](args))
}

function getModuleName (node) {
  return node.getAttribute('data-module') || ''
}

function requireModule (moduleName = '', node) {
  if (moduleName) {
    return import(`../../../modules/${moduleName}/${moduleName}.js`)
      .then(({ default: fn }) => Promise.resolve({
        fn: fn.bind(null, node),
        name: moduleName
      }))
  }
}

function getNodes (ctx, selector) {
  return [].slice.call(ctx.querySelectorAll(selector))
}

function init (types, ctx = document) {
  return {
    cache: {
      set (id, instance) {
        if (__cache[id]) log('warn', 'duplicate', id)
        __cache[id] = instance
      },
      get (id) {
        try {
          return __cache[id]
        } catch (e) {
          log('warn', 'undefined', id)
          return null
        }
      },
      dump () {
        return __cache
      }
    },
    async mount () {
      const modules = []
      const appModules = []

      const callModule = m => {
        const instance = m.fn()

        if (instance) {
          this.cache.set(m.name, instance)
        }

        return instance
      }

      const loadModules = selector => {
        getNodes(ctx, selector)
          .filter(getModuleName)
          .map(async node => {
            const instance = await requireModule(getModuleName(node), node)
            node.removeAttribute('data-module')
            callModule(instance)
          })
      }

      loadModules('[data-module]')

      return this
    },
    unmount () {
      for (let key in __cache) {
        const instance = __cache[key]
        if (instance.unmount) {
          instance.unmount()
          delete __cache[key]
        }
      }

      return this
    }
  }
}

export default init

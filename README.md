# Getting Started

## Prerequisites

* [Node.js (latest LTS version)](https://nodejs.org/en/)
* [pnpm](https://pnpm.io/)
* [Shopify CLI](https://shopify.dev/themes/tools/cli)

## Directory Structure

```bash
└── project
    ├── assets
    ├── config
    ├── frontend
    │   └── entrypoints
    │       └── # only Vite entry files here
    ├── layout
    ├── locales
    ├── sections
    ├── snippets
    └── templates
        └── customers
```

Look at [vite-plugin-shopify](https://github.com/barrel/barrel-shopify/tree/main/packages/vite-plugin-shopify) to learn more.

## Setup

```bash
# Make sure to install the dependencies
pnpm install
```

## Development Server

```bash
# Start the vite server on http://localhost:5173
pnpm dev
```
> **Note**: This server is not your theme server. It is the server that vite uses to process your assets, such as scripts or stylesheets. You still need to serve your theme using the Shopify CLI.

```bash
# Serve your theme
pnpm serve
```

## Production

```bash
# Build your CSS and JavaScript assets for production
pnpm build
```

```bash
# Upload your local theme files to Shopify
pnpm deploy
```

Checkout the [Theme commands](https://shopify.dev/themes/tools/cli/theme-command) for more information.

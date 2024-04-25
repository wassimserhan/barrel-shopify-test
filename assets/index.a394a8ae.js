const i=(o={})=>{const t={};return{...o,emit:(e,n=null)=>{let u=t[e]?t[e].queue:!1;u&&u.forEach(s=>s(n))},on:(e,n=null)=>{n&&(t[e]=t[e]||{queue:[]},t[e].queue.push(n))}}};export{i as l};

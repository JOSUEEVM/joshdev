
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/miportafolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/miportafolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 784, hash: 'fa4be6899c22c7884cc27035e559e171f5e60864577fcb67b381fb755173a21c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1124, hash: '8f407bb64cededc45cb0ee424aef7ac6f5d4722bfea7adfa8a8db10af4729007', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 17540, hash: '6d1867f16ba463e69362d46cb448a428844ec715ecbde09c3a4c106ab5196835', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-NAMC7B5U.css': {size: 84813, hash: '7pLZ3a0S8kI', text: () => import('./assets-chunks/styles-NAMC7B5U_css.mjs').then(m => m.default)}
  },
};

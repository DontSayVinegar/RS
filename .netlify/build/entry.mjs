import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_PA79eq4J.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/blog.astro.mjs');
const _page4 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page5 = () => import('./pages/contact.astro.mjs');
const _page6 = () => import('./pages/projects.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.7.5_@netlify+blobs@10.3.1_@types+node@24.9.2_jiti@2.4.2_lightningcss@1.29.2_rol_e4d890aa50dd75cb2558c8b80b8d359e/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/.pnpm/astro@5.7.5_@netlify+blobs@10.3.1_@types+node@24.9.2_jiti@2.4.2_lightningcss@1.29.2_rol_e4d890aa50dd75cb2558c8b80b8d359e/node_modules/astro/dist/actions/runtime/route.js", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/blog/index.astro", _page3],
    ["src/pages/blog/[...slug].astro", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/projects.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_astro-internal_actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "8a0cc44c-57c9-47b9-9b3b-29e75d843063"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

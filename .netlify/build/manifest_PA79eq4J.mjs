import { N as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server__tdSHPvr.mjs';
import 'clsx';
import './chunks/index_CxflxEqw.mjs';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/senorricardo/01_Projects/nikola-tesla/","cacheDir":"file:///Users/senorricardo/01_Projects/nikola-tesla/node_modules/.astro/","outDir":"file:///Users/senorricardo/01_Projects/nikola-tesla/dist/","srcDir":"file:///Users/senorricardo/01_Projects/nikola-tesla/src/","publicDir":"file:///Users/senorricardo/01_Projects/nikola-tesla/public/","buildClientDir":"file:///Users/senorricardo/01_Projects/nikola-tesla/dist/","buildServerDir":"file:///Users/senorricardo/01_Projects/nikola-tesla/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.7.5_@netlify+blobs@10.3.1_@types+node@24.9.2_jiti@2.4.2_lightningcss@1.29.2_rol_e4d890aa50dd75cb2558c8b80b8d359e/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_actions/[...path]","pattern":"^\\/_actions(?:\\/(.*?))?\\/?$","segments":[[{"content":"_actions","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"node_modules/.pnpm/astro@5.7.5_@netlify+blobs@10.3.1_@types+node@24.9.2_jiti@2.4.2_lightningcss@1.29.2_rol_e4d890aa50dd75cb2558c8b80b8d359e/node_modules/astro/dist/actions/runtime/route.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.yKi2R0KS.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.yKi2R0KS.css"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.yKi2R0KS.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.yKi2R0KS.css"}],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.yKi2R0KS.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/senorricardo/01_Projects/nikola-tesla/src/actions/categories.ts",{"propagation":"in-tree","containsHead":false}],["/Users/senorricardo/01_Projects/nikola-tesla/src/actions/index.ts",{"propagation":"in-tree","containsHead":false}],["\u0000astro-internal:actions",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/senorricardo/01_Projects/nikola-tesla/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/senorricardo/01_Projects/nikola-tesla/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/senorricardo/01_Projects/nikola-tesla/src/pages/blog/index.astro",{"propagation":"none","containsHead":true}],["/Users/senorricardo/01_Projects/nikola-tesla/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/senorricardo/01_Projects/nikola-tesla/src/pages/projects.astro",{"propagation":"none","containsHead":true}],["/Users/senorricardo/01_Projects/nikola-tesla/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000astro-internal:actions":"_astro-internal_actions.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.7.5_@netlify+blobs@10.3.1_@types+node@24.9.2_jiti@2.4.2_lightningcss@1.29.2_rol_e4d890aa50dd75cb2558c8b80b8d359e/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.7.5_@netlify+blobs@10.3.1_@types+node@24.9.2_jiti@2.4.2_lightningcss@1.29.2_rol_e4d890aa50dd75cb2558c8b80b8d359e/node_modules/astro/dist/actions/runtime/route@_@js":"pages/_actions/_---path_.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_PA79eq4J.mjs","/Users/senorricardo/01_Projects/nikola-tesla/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/senorricardo/01_Projects/nikola-tesla/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_krvoUZFs.mjs","\u0000virtual:astro:assets/fonts/internal":"chunks/internal_DPpi4MjN.mjs","/Users/senorricardo/01_Projects/nikola-tesla/node_modules/.pnpm/node-fetch-native@1.6.6/node_modules/node-fetch-native/dist/chunks/multipart-parser.mjs":"chunks/multipart-parser_D46iL1HQ.mjs","/Users/senorricardo/01_Projects/nikola-tesla/src/components/warp-background":"_astro/warp-background.6ArEvsKx.js","/Users/senorricardo/01_Projects/nikola-tesla/src/components/navigation":"_astro/navigation.O2dLOJQG.js","@astrojs/react/client.js":"_astro/client.BPIbHqJh.js","/Users/senorricardo/01_Projects/nikola-tesla/node_modules/.pnpm/astro@5.7.5_@netlify+blobs@10.3.1_@types+node@24.9.2_jiti@2.4.2_lightningcss@1.29.2_rol_e4d890aa50dd75cb2558c8b80b8d359e/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.BZs-2RF_.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/pmsImage.CkoRX1gW.png","/_astro/soyuz.DyijBZNA.webp","/_astro/aperture.Cb6Lp6xT.png","/_astro/about.yKi2R0KS.css","/favicon.svg","/social-image.jpg","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.BZs-2RF_.js","/_astro/client.BPIbHqJh.js","/_astro/index.BVOCwoKb.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/navigation.O2dLOJQG.js","/_astro/warp-background.6ArEvsKx.js","/_astro/fonts/1a406f8e18932dcf.woff2","/_astro/fonts/5044aa0dff85ad8b.woff2","/_astro/fonts/90b0f702c953406a.woff2"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"nx9ZEi244L3qnMnOUADP4rJje4chUVoNfONo7q3gACo=","sessionConfig":{"driver":"netlify-blobs","options":{"name":"astro-sessions","consistency":"strong"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/netlify-blobs_CCwnE0JS.mjs').then(n => n.n);

export { manifest };

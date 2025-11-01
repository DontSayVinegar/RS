import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server__tdSHPvr.mjs';
import { $ as $$H1 } from '../chunks/h1_D6hhYi45.mjs';
import { $ as $$InfoLayout, a as $$ExternalLink } from '../chunks/InfoLayout_RXI87v9J.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "InfoLayout", $$InfoLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-4 sm:pt-8 sm:px-12 pb-20 min-h-dvh flex flex-col justify-between"> <div> ${renderComponent($$result2, "H1", $$H1, {}, { "default": ($$result3) => renderTemplate`Co podnikneme?` })} <p class="mt-4 md:mt-8 lg:mt-12 text-xl xl:text-2xl text-zinc-400 text-balance">
Máté zájem o spolupráci? <br>
Ozvěte se ohledně nových projektů.
</p> <div class="mt-6 sm:mt-12 flex flex-col gap-1"> <a href="mailto:richardsiser@gmail.com" class="mb-8 w-fit group flex items-center gap-1 text-base lg:text-xl text-zinc-400 hover:text-zinc-50">
richardsiser@gmail.com
<svg xmlns="http://www.w3.org/2000/svg" class="-rotate-45 group-hover:rotate-0 transition-all duration-300 ease-in-out" width="24" height="24" viewBox="0 0 24 24"> <title>Arrow Icon</title> <path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></path> <path fill="currentColor" d="M13.53 8.47a.75.75 0 1 0-1.06 1.06l1.72 1.72H8a.75.75 0 0 0 0 1.5h6.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06z"></path> </svg> </a> ${renderComponent($$result2, "ExternalLink", $$ExternalLink, { "href": "https://github.com/DontSayVinegar" }, { "default": ($$result3) => renderTemplate`GitHub` })} </div> </div> <div> <p class="text-base text-zinc-500">Technická 4</p> <p class="text-base text-zinc-500">160 00  Praha 6</p> <p class="text-base text-zinc-500">Česká Republika</p> </div> </div> ` })}`;
}, "/Users/senorricardo/01_Projects/nikola-tesla/src/pages/contact.astro", void 0);

const $$file = "/Users/senorricardo/01_Projects/nikola-tesla/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
     __proto__: null,
     default: $$Contact,
     file: $$file,
     url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

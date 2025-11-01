import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server__tdSHPvr.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BlXldOcX.mjs';
import { $ as $$H1 } from '../chunks/h1_D6hhYi45.mjs';
import { $ as $$InfoLayout } from '../chunks/InfoLayout_RXI87v9J.mjs';
export { renderers } from '../renderers.mjs';

const ACGenerator = new Proxy({"src":"/_astro/pmsImage.CkoRX1gW.png","width":726,"height":952,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/senorricardo/01_Projects/nikola-tesla/src/assets/pmsImage.png";
							}
							
							return target[name];
						}
					});

const FluidPropulsion = new Proxy({"src":"/_astro/soyuz.DyijBZNA.webp","width":616,"height":900,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/senorricardo/01_Projects/nikola-tesla/src/assets/soyuz.webp";
							}
							
							return target[name];
						}
					});

const ElectricMotor = new Proxy({"src":"/_astro/aperture.Cb6Lp6xT.png","width":726,"height":952,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/senorricardo/01_Projects/nikola-tesla/src/assets/aperture.png";
							}
							
							return target[name];
						}
					});

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      title: "Str\xE1nky porgmedicalsociety",
      description: "Str\xE1nky jednoho z nejz\xE1vratn\u011Bj\u0161\xEDch spolk\u016F 21. stolet\xED. Dr. Erik Liu si vybral moji firmu R&D Web Engineering LLC pro n\xE1vrh jejich str\xE1nek.",
      image: ACGenerator
    },
    {
      title: "Andromeda",
      description: "Nejv\u011Bt\u0161\xED raketa v \u010Cesku. Hydribn\xED motor.",
      image: FluidPropulsion
    },
    {
      title: "Clonov\xFD ko\u0161",
      description: "Vision\xE1\u0159sk\xFD projekt odpadn\xEDho ko\u0161e s hrozn\u011B cool otvorem s irisovou clonou.",
      image: ElectricMotor
    }
  ];
  return renderTemplate`${renderComponent($$result, "InfoLayout", $$InfoLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-4 sm:pt-8 sm:px-12 pb-20 min-h-dvh"> ${renderComponent($$result2, "H1", $$H1, {}, { "default": ($$result3) => renderTemplate` Projekty ` })} <ul class="mt-4 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 sm:gap-8"> ${projects.map((project) => renderTemplate`<li> ${renderComponent($$result2, "Image", $$Image, { "src": project.image, "alt": project.title, "class": "aspect-[1/1.33] object-center object-cover rounded-lg shadow-lg mb-4 sm:mb-0 sm:mr-4" })} <div class="p-1 sm:p-2"> <h2 class="text-base text-zinc-100">${project.title}</h2> <p class="text-sm text-zinc-400 text-balance">${project.description}</p> </div> </li>`)} </ul> </div> ` })}`;
}, "/Users/senorricardo/01_Projects/nikola-tesla/src/pages/projects.astro", void 0);

const $$file = "/Users/senorricardo/01_Projects/nikola-tesla/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Projects,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

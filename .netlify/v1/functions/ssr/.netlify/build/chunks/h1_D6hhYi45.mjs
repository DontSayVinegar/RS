import { c as createComponent, d as createAstro, m as maybeRenderHead, e as addAttribute, f as renderSlot, b as renderTemplate } from './astro/server__tdSHPvr.mjs';
import 'clsx';
import clsx from 'clsx/lite';

const $$Astro = createAstro();
const $$H1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$H1;
  const { size = "default", className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1${addAttribute(clsx(
    "text-white font-bold text-balance",
    size === "default" && "text-4xl md:text-6xl xl:text-8xl tracking-tight",
    size === "large" && "text-8xl md:text-[120px] lg:text-[160px] tracking-tighter",
    className
  ), "class")}> ${renderSlot($$result, $$slots["default"])} </h1>`;
}, "/Users/senorricardo/01_Projects/nikola-tesla/src/components/h1.astro", void 0);

export { $$H1 as $ };

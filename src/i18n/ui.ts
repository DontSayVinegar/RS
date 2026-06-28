export const defaultLocale = "cs" as const;
export const locales = ["cs", "en"] as const;
export type Locale = (typeof locales)[number];

export const ui = {
    cs: {
        "nav.projects": "Projekty",
        "nav.services": "Služby",
        "nav.contact": "Kontakt",
        "nav.contactCta": "Kontaktovat",
        "nav.close": "Zavřít",
        "available": "K dispozici pro nové projekty",
        "projects.title": "Projekty",
        "projects.back": "← Zpět na projekty",
        "project.role": "Role",
        "project.category": "Kategorie",
        "project.date": "Dokončeno",
        "project.tools": "Nástroje",
        "project.tags": "Témata",
        "project.links": "Odkazy",
        "project.gallery": "Galerie",
        "gallery.close": "Zavřít",
        "lang.switch": "EN",
        "lang.switchFull": "English",
    },
    en: {
        "nav.projects": "Projects",
        "nav.services": "Services",
        "nav.contact": "Contact",
        "nav.contactCta": "Get in touch",
        "nav.close": "Close",
        "available": "Available for new projects",
        "projects.title": "Projects",
        "projects.back": "← Back to projects",
        "project.role": "Role",
        "project.category": "Category",
        "project.date": "Completed",
        "project.tools": "Tools",
        "project.tags": "Topics",
        "project.links": "Links",
        "project.gallery": "Gallery",
        "gallery.close": "Close",
        "lang.switch": "CZ",
        "lang.switchFull": "Čeština",
    },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLocale];

/** Detects the locale from a URL pathname (default locale is unprefixed). */
export function getLocaleFromUrl(url: URL): Locale {
    const [, maybeLocale] = url.pathname.split("/");
    if ((locales as readonly string[]).includes(maybeLocale)) {
        return maybeLocale as Locale;
    }
    return defaultLocale;
}

/** Returns a translation function bound to a locale, falling back to default. */
export function useTranslations(locale: Locale) {
    return function t(key: UIKey): string {
        return ui[locale][key] ?? ui[defaultLocale][key];
    };
}

/** Prefixes a path with the locale (no prefix for the default locale). */
export function localizePath(path: string, locale: Locale): string {
    const clean = path.startsWith("/") ? path : `/${path}`;
    return locale === defaultLocale ? clean : `/${locale}${clean}`;
}

/** Removes a non-default locale prefix from a pathname. */
export function stripLocale(pathname: string): string {
    for (const locale of locales) {
        if (locale === defaultLocale) continue;
        if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
            return pathname.slice(locale.length + 1) || "/";
        }
    }
    return pathname;
}

/** Returns the equivalent path in the target locale for a language switcher. */
export function switchLocalePath(pathname: string, target: Locale): string {
    return localizePath(stripLocale(pathname), target);
}

import type { Locale } from "./ui";

type SkillGroup = { title: string; items: string[] };

type AboutContent = {
    title: string;
    intro: string[];
    skillsHeading: string;
    groups: SkillGroup[];
    funHeading: string;
    fun: string[];
};

export const about: Record<Locale, AboutContent> = {
    cs: {
        title: "Inženýrské služby všeho druhu",
        intro: [
            "Jsem strojní inženýr z Prahy.",
            "Řeším problémy od návrhu a prototypování přes materiály a výrobu až po elektroniku a software. Pokud potřebujete pomoct s čímkoliv z níže uvedeného, ozvěte se.",
        ],
        skillsHeading: "Odbornosti",
        groups: [
            {
                title: "Strojní konstrukce",
                items: [
                    "CAD modelování a 3D prototypování",
                    "Konstrukce tlakových nádob",
                    "Turbíny a lopatkové stroje",
                    "Návrh chladicích systémů",
                    "Výrobní přípravky a upínače",
                    "Ergonomický design produktů",
                ],
            },
            {
                title: "Materiály a zkoušení",
                items: [
                    "Metalurgie a tepelné zpracování kovů",
                    "Analýza mechanických vlastností",
                    "Fraktografie a analýza porušení",
                    "Koroze a povrchové úpravy (PVD, CVD, anodizace)",
                    "Kompozity a biokompatibilní materiály",
                    "Destruktivní i nedestruktivní zkoušení (NDT)",
                ],
            },
            {
                title: "Elektronika a embedded",
                items: [
                    "Návrh PCB (KiCad, Altium Designer)",
                    "Mikrokontroléry (Arduino, ESP32, STM32)",
                    "Senzory a aktuátory",
                    "PLC programování (Siemens, Allen-Bradley)",
                    "Robotika a průmyslová automatizace",
                ],
            },
            {
                title: "Projektový management a kvalita",
                items: [
                    "Projektový management (PMI, PRINCE2)",
                    "Lean, Agile a Scrum",
                    "FMEA, PPAP, SPC, MSA",
                    "ISO 9001 a CE certifikace",
                ],
            },
            {
                title: "Software a data",
                items: [
                    "Full-stack web development",
                    "Linux systémy",
                    "Analýza dat (i velkých)",
                    "MATLAB",
                ],
            },
        ],
        funHeading: "Různé",
        fun: [
            "Broušení nožů japonskými vodními kameny",
            "Bowling",
            "Osobní ochranka",
            "Lesnictví",
            "Údržba ambasád",
        ],
    },
    en: {
        title: "Engineering services of all kinds",
        intro: [
            "I'm a mechanical engineer based in Prague.",
            "I solve problems end to end — from design and prototyping through materials and manufacturing to electronics and software. If you need help with anything below, get in touch.",
        ],
        skillsHeading: "Expertise",
        groups: [
            {
                title: "Mechanical design",
                items: [
                    "CAD modelling and 3D prototyping",
                    "Pressure vessel design",
                    "Turbines and turbomachinery",
                    "Cooling system design",
                    "Manufacturing jigs and fixtures",
                    "Ergonomic product design",
                ],
            },
            {
                title: "Materials & testing",
                items: [
                    "Metallurgy and heat treatment",
                    "Mechanical property analysis",
                    "Fractography and failure analysis",
                    "Corrosion and surface finishing (PVD, CVD, anodising)",
                    "Composites and biocompatible materials",
                    "Destructive and non-destructive testing (NDT)",
                ],
            },
            {
                title: "Electronics & embedded",
                items: [
                    "PCB design (KiCad, Altium Designer)",
                    "Microcontrollers (Arduino, ESP32, STM32)",
                    "Sensors and actuators",
                    "PLC programming (Siemens, Allen-Bradley)",
                    "Robotics and industrial automation",
                ],
            },
            {
                title: "Project management & quality",
                items: [
                    "Project management (PMI, PRINCE2)",
                    "Lean, Agile and Scrum",
                    "FMEA, PPAP, SPC, MSA",
                    "ISO 9001 and CE certification",
                ],
            },
            {
                title: "Software & data",
                items: [
                    "Full-stack web development",
                    "Linux systems",
                    "Data analysis (large datasets too)",
                    "MATLAB",
                ],
            },
        ],
        funHeading: "Misc",
        fun: [
            "Japanese waterstone knife sharpening",
            "Bowling",
            "Close protection",
            "Forestry",
            "Embassy maintenance",
        ],
    },
};

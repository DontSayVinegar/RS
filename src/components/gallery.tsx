import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export type GalleryImage = {
    /** Small image shown in the grid. */
    thumb: string;
    /** Full-size image shown in the lightbox. */
    src: string;
    alt: string;
};

export default function Gallery({
    images,
    closeLabel = "Zavřít",
}: {
    images: GalleryImage[];
    closeLabel?: string;
}) {
    const [active, setActive] = useState<number | null>(null);
    const isOpen = active !== null;

    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setActive(null);
            if (e.key === "ArrowRight") setActive((i) => (i === null ? i : (i + 1) % images.length));
            if (e.key === "ArrowLeft") setActive((i) => (i === null ? i : (i - 1 + images.length) % images.length));
        };
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [isOpen, images.length]);

    return (
        <>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {images.map((image, index) => (
                    <li key={image.src}>
                        <button
                            type="button"
                            onClick={() => setActive(index)}
                            className="group block w-full cursor-zoom-in focus-visible:outline-2 outline-offset-2 outline-zinc-100/40 rounded-lg"
                            aria-label={`Zvětšit: ${image.alt}`}
                        >
                            <img
                                src={image.thumb}
                                alt={image.alt}
                                loading="lazy"
                                decoding="async"
                                className="w-full aspect-[4/3] object-center object-cover rounded-lg shadow-lg transition-opacity duration-300 group-hover:opacity-90"
                            />
                        </button>
                    </li>
                ))}
            </ul>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        onClick={() => setActive(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-zinc-950/80 backdrop-blur-md cursor-zoom-out"
                        role="dialog"
                        aria-modal="true"
                    >
                        <motion.img
                            key={images[active].src}
                            initial={{ scale: 0.96, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.96, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            src={images[active].src}
                            alt={images[active].alt}
                            onClick={(e) => e.stopPropagation()}
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                        />

                        <button
                            type="button"
                            onClick={() => setActive(null)}
                            className="fixed top-4 right-4 sm:top-8 sm:right-8 text-sm text-zinc-200 hover:text-white underline underline-offset-4 cursor-pointer"
                        >
                            {closeLabel}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

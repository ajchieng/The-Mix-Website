"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type GalleryImage = {
  alt: string;
  key: string;
  src: string;
};

type GallerySection = {
  eventFolder: string;
  eventLabel: string;
  images: GalleryImage[];
};

type EventsGalleryClientProps = {
  sections: GallerySection[];
};

export function EventsGalleryClient({ sections }: EventsGalleryClientProps) {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    if (!activeImage) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeImage]);

  return (
    <>
      <div className="mix-gallery-sections">
        {sections.map((section) => (
          <section key={section.eventFolder} className="mix-gallery-section reveal">
            <h2 className="mix-section-title">{section.eventLabel}</h2>
            <div className="mix-gallery-grid">
              {section.images.map((image) => (
                <figure key={image.key} className="mix-gallery-tile reveal">
                  <button
                    type="button"
                    className="mix-gallery-button"
                    onClick={() => setActiveImage(image)}
                    aria-label={`View ${image.alt}`}
                  >
                    <div className="mix-gallery-frame">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1024px) 42vw, (min-width: 640px) 44vw, 100vw"
                        className="mix-gallery-image"
                      />
                    </div>
                  </button>
                </figure>
              ))}
            </div>
          </section>
        ))}
      </div>

      {activeImage ? (
        <div
          className="mix-gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt}
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            className="mix-gallery-lightbox-close"
            onClick={() => setActiveImage(null)}
            aria-label="Close image"
          >
            Close
          </button>
          <div className="mix-gallery-lightbox-shell" onClick={(event) => event.stopPropagation()}>
            <div className="mix-gallery-lightbox-media">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="92vw"
                className="mix-gallery-lightbox-image"
                priority
              />
            </div>
            <p className="mix-gallery-lightbox-caption">{activeImage.alt}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}

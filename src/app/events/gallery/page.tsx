import { readdir } from "node:fs/promises";
import path from "node:path";

import Image from "next/image";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"]);
const GALLERY_ROOT = path.join(process.cwd(), "public", "galleryimages");

function hasSupportedImageExtension(fileName: string) {
  const extension = path.extname(fileName).toLowerCase();
  return IMAGE_EXTENSIONS.has(extension);
}

function normalizeFolderName(folderName: string) {
  return folderName.toLowerCase().replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();
}

function getEventSortRank(folderName: string) {
  const normalized = normalizeFolderName(folderName);

  if (normalized === "1 fan to millions" || normalized === "one fan to millions") {
    return 0;
  }

  if (normalized === "off the record") {
    return 1;
  }

  return 2;
}

function getEventLabel(folderName: string) {
  const normalized = normalizeFolderName(folderName);

  if (normalized === "1 fan to millions" || normalized === "one fan to millions") {
    return "1 FAN TO MILLIONS";
  }

  if (normalized === "off the record") {
    return "OFF THE RECORD";
  }

  return normalized.replace(/\b\w/g, (character) => character.toUpperCase());
}

function getPublicImagePath(eventFolder: string, fileName: string) {
  return `/galleryimages/${encodeURIComponent(eventFolder)}/${encodeURIComponent(fileName)}`;
}

export default async function EventsGalleryPage() {
  const directoryEntries = await readdir(GALLERY_ROOT, { withFileTypes: true });
  const eventFolders = directoryEntries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => {
      const rankDifference = getEventSortRank(a) - getEventSortRank(b);
      if (rankDifference !== 0) {
        return rankDifference;
      }

      return normalizeFolderName(a).localeCompare(normalizeFolderName(b), undefined, {
        numeric: true,
        sensitivity: "base",
      });
    });

  const eventSections = (await Promise.all(
    eventFolders.map(async (eventFolder) => {
      const imageFiles = (await readdir(path.join(GALLERY_ROOT, eventFolder)))
        .filter(hasSupportedImageExtension)
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

      return {
        eventFolder,
        eventLabel: getEventLabel(eventFolder),
        imageFiles,
      };
    }),
  )).filter((section) => section.imageFiles.length > 0);

  return (
    <section className="px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-14">
      <div className="mx-auto w-full max-w-6xl">
        <p className="mix-kicker mb-3">Events</p>
        <h1 className="mix-page-title">Gallery</h1>
        <p className="mix-copy mt-4 mb-0 text-base sm:text-lg">
          Photos from our events.
        </p>

        {eventSections.length === 0 ? (
          <div className="mix-surface reveal mt-7 p-5 sm:p-6">
            <p className="mix-copy m-0">
              No images found yet in `public/galleryimages` event folders.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid gap-9">
            {eventSections.map((section) => (
              <section key={section.eventFolder} className="reveal">
                <h2 className="mix-section-title">{section.eventLabel}</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {section.imageFiles.map((fileName, index) => (
                    <figure key={`${section.eventFolder}/${fileName}`} className="mix-gallery-tile reveal">
                      <div className="relative h-[16rem] w-full overflow-hidden sm:h-[18rem]">
                        <Image
                          src={getPublicImagePath(section.eventFolder, fileName)}
                          alt={`${section.eventLabel} event photo ${index + 1}`}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                    </figure>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

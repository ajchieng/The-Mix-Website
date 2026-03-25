import { readdir } from "node:fs/promises";
import path from "node:path";

import { HomeIntroTyping } from "@/components/HomeIntroTyping";
import { EventsGalleryClient } from "@/components/EventsGalleryClient";

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
        images: imageFiles.map((fileName, index) => ({
          alt: `${getEventLabel(eventFolder)} event photo ${index + 1}`,
          key: `${eventFolder}/${fileName}`,
          src: getPublicImagePath(eventFolder, fileName),
        })),
      };
    }),
  )).filter((section) => section.images.length > 0);

  return (
    <>
      <HomeIntroTyping copy="events gallery" ariaLabel="Events gallery introduction" />

      <section className="mix-gallery-page px-4 pb-12 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pb-16 lg:pt-12">
        <div className="mx-auto w-full max-w-6xl">
          <h1 className="mix-sr-only">Events Gallery</h1>

          {eventSections.length === 0 ? (
            <div className="mix-surface reveal p-5 sm:p-6">
              <p className="mix-copy m-0">
                No images found yet in `public/galleryimages` event folders.
              </p>
            </div>
          ) : (
            <EventsGalleryClient sections={eventSections} />
          )}
        </div>
      </section>
    </>
  );
}

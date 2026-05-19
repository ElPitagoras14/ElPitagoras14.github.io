import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Props {
  images: string[];
  title: string;
}

export default function ProjectGallery({ images, title }: Props) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const prev = useCallback(() => {
    setActive((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setActive((i) => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, prev, next]);

  if (!images?.length) return null;

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-medium">{title}</h2>
      <div className="grid grid-cols-3 gap-2">
        {images.map((src, i) => (
          <button
            type="button"
            key={src}
            onClick={() => {
              setActive(i);
              setOpen(true);
            }}
            className={`overflow-hidden rounded-md cursor-pointer ${
              i === 0 ? "col-span-2" : ""
            }`}
          >
            <img
              src={src}
              alt=""
              className="w-full aspect-video object-cover"
            />
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl">
          <div className="relative">
            <img
              src={images[active]}
              alt=""
              className="w-full h-auto rounded-md"
            />
            {images.length > 1 && (
              <>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={prev}
                  aria-label="Previous"
                  className="absolute left-2 top-1/2 -translate-y-1/2"
                >
                  <ChevronLeftIcon className="w-5 h-5" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={next}
                  aria-label="Next"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  <ChevronRightIcon className="w-5 h-5" />
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

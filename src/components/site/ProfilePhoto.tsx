import { useEffect, useRef, useState } from "react";
import { Camera, Trash2, UserRound } from "lucide-react";
import { toast } from "sonner";

const STORAGE_KEY = "portfolio:profile-photo";
const MAX_BYTES = 4 * 1024 * 1024;

export function ProfilePhoto() {
  const [photo, setPhoto] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      setPhoto(window.localStorage.getItem(STORAGE_KEY));
    } catch {
      /* storage unavailable */
    }
  }, []);

  function handleFile(file: File | undefined) {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("Please choose an image file.");
      return;
    }
    if (file.size > MAX_BYTES) {
      toast.error("Image is too large. Please pick one under 4 MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = String(reader.result);
      setPhoto(dataUrl);
      try {
        window.localStorage.setItem(STORAGE_KEY, dataUrl);
        toast.success("Photo saved on this device.");
      } catch {
        toast.error("Couldn't save the photo locally, but it's shown for now.");
      }
    };
    reader.readAsDataURL(file);
  }

  function remove() {
    setPhoto(null);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    if (inputRef.current) inputRef.current.value = "";
    toast.success("Photo removed.");
  }

  return (
    <div className="group glass relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl p-3 transition-transform duration-500 hover:-translate-y-1">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{ background: "var(--gradient-surface)" }}
        aria-hidden="true"
      />
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-muted">
        {photo ? (
          <img
            src={photo}
            alt="Mohd Anas"
            className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <span className="flex size-full flex-col items-center justify-center gap-3 text-muted-foreground">
            <UserRound className="size-10" aria-hidden="true" />
            <span className="font-mono text-[0.65rem] tracking-[0.25em] uppercase">Add a photo</span>
          </span>
        )}

        <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 bg-gradient-to-t from-background/90 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-within:opacity-100">
          <label className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground focus-within:ring-2 focus-within:ring-ring">
            <Camera className="size-3.5" aria-hidden="true" />
            {photo ? "Change photo" : "Upload photo"}
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={(e) => handleFile(e.target.files?.[0])}
            />
          </label>
          {photo && (
            <button
              type="button"
              onClick={remove}
              aria-label="Remove photo"
              className="inline-flex items-center rounded-full border border-border bg-background/70 p-2 text-muted-foreground transition-colors hover:border-destructive hover:text-destructive"
            >
              <Trash2 className="size-3.5" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

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
    <div className="glass rounded-3xl p-7">
      <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">Profile photo</p>
      <div className="mt-6 flex flex-col items-center gap-5 sm:flex-row sm:items-center">
        <div className="relative size-32 shrink-0 overflow-hidden rounded-2xl border border-border bg-muted">
          {photo ? (
            <img src={photo} alt="Mohd Anas" className="size-full object-cover" />
          ) : (
            <span className="flex size-full items-center justify-center text-muted-foreground">
              <UserRound className="size-10" aria-hidden="true" />
            </span>
          )}
        </div>

        <div className="text-center sm:text-left">
          <p className="text-sm text-muted-foreground">
            Upload your own photo — it's stored privately in this browser, so nothing is sent
            anywhere.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3 sm:justify-start">
            <label className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 focus-within:ring-2 focus-within:ring-ring">
              <Camera className="size-4" aria-hidden="true" />
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
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-destructive hover:text-destructive"
              >
                <Trash2 className="size-4" aria-hidden="true" /> Remove
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

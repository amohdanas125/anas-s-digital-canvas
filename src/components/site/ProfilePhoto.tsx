import { UserRound } from "lucide-react";

export function ProfilePhoto() {
  return (
    <div className="profile-orbit relative mx-auto size-64 sm:size-72 lg:size-80" aria-label="Mohd Anas profile portrait">
      <div className="absolute inset-0 rounded-full border border-primary/20" aria-hidden="true" />
      <div className="absolute inset-3 rounded-full border border-primary/40" aria-hidden="true" />
      <div className="profile-frame absolute inset-6 rounded-full p-1">
        <div className="flex size-full items-center justify-center overflow-hidden rounded-full border-4 border-background bg-secondary text-primary">
          <div className="flex flex-col items-center gap-3" aria-hidden="true">
            <UserRound className="size-20 stroke-[1.25]" />
            <span className="font-mono text-sm font-semibold uppercase">Mohd Anas</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import mainPhoto from "@/assets/main.jpg";

export function ProfilePhoto() {
  return (
    <div
      className="profile-orbit relative mx-auto size-64 sm:size-72 lg:size-80"
      aria-label="Mohd Anas profile portrait"
    >
      <div className="absolute inset-0 rounded-full border border-primary/20" aria-hidden="true" />
      <div className="absolute inset-3 rounded-full border border-primary/40" aria-hidden="true" />
      <div className="profile-frame absolute inset-6 rounded-full p-1">
        <div className="size-full overflow-hidden rounded-full border-4 border-background bg-secondary">
          <img
            src={mainPhoto}
            alt="Mohd Anas profile portrait"
            width={600}
            height={600}
            loading="eager"
            className="size-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}

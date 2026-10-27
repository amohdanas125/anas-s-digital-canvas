import mainPhoto from "@/assets/main.jpg";

export function ProfilePhoto() {
  return (
    <div
      className="profile-orbit relative mx-auto size-64 sm:size-72 lg:size-80 flex items-center justify-center"
      aria-label="Mohd Anas profile portrait"
    >
      {/* Outer Neomorphic Bezel Ring */}
      <div className="absolute inset-0 rounded-full neu-flat transition-shadow duration-500" aria-hidden="true" />
      <div className="absolute inset-3 rounded-full neu-pressed-sm opacity-60 pointer-events-none" aria-hidden="true" />

      {/* Orbit Rings */}
      <div className="absolute inset-0 rounded-full border border-primary/20 pointer-events-none" aria-hidden="true" />

      {/* Photo Frame */}
      <div className="profile-frame absolute inset-6 rounded-full p-1 shadow-2xl">
        <div className="size-full overflow-hidden rounded-full border-4 border-background neu-convex">
          <img
            src={mainPhoto}
            alt="Mohd Anas profile portrait"
            width={600}
            height={600}
            loading="eager"
            className="size-full object-cover object-top transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}

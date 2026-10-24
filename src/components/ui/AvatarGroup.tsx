import Image from "next/image";

const avatars = [1, 2, 3, 4, 5].map((n) => `/images/avatar-${n}.png`);

export function AvatarGroup({ className = "" }: { className?: string }) {
  return (
    <div className={`flex ${className}`} aria-hidden="true">
      {avatars.map((src) => (
        <span
          key={src}
          className="-mr-1 size-8 shrink-0 overflow-hidden rounded-full border-2 border-avatar-ring"
        >
          <Image
            src={src}
            alt=""
            width={32}
            height={32}
            sizes="32px"
            className="size-full object-cover"
          />
        </span>
      ))}
    </div>
  );
}

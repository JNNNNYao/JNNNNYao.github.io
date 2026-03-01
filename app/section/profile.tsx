import Image from "next/image";
import Section from "../ui/section";

export default function Profile() {
  return (
    <Section className="mt-1" id="profile">
      <div className="relative overflow-hidden w-32 h-32 rounded-full mx-auto md:mx-0 md:w-full md:h-auto md:aspect-[4/5] md:rounded-none">
        <div
          aria-hidden
          className="absolute inset-0 bg-zinc-200 animate-pulse rounded-full md:rounded-none"
        />
        <Image
          src="/me.jpg"
          alt="Profile picture of Jie-En (Matthew) Yao"
          fill
          className="object-cover"
          placeholder="empty"
          sizes="(max-width: 640px) 100vw, 480px"
          priority
          fetchPriority="high"
        />
      </div>
      <div className="hidden md:block text-sm text-gray-500 px-1 pt-1 leading-4">
        Lake Tahoe, 2025
      </div>
    </Section>
  );
}

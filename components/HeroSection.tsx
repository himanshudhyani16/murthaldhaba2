import Image from "next/image";
import Reveal from "./Reveal";

type HeroSectionProps = {
  heroImages: string[];
  currentBgIndex: number;
};

export default function HeroSection({
  heroImages,
  currentBgIndex,
}: HeroSectionProps) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 z-0  bg-[var(--color-bg-darker)]">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentBgIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt={`Hero background ${index + 1}`}
              fill
              sizes="100vw"
              className={`${
                index === 0 || index === 5
                  ? "object-cover object-top"
                  : "object-cover"
              } opacity-[0.7]`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      <div className="relative z-10 flex flex-col flex-grow text-white">
        <div className="grow flex flex-col justify-center items-center text-center px-4 pt-30">
          <Reveal delay={200}>
            <h1
              className="uppercase font-semibold text-5xl md:text-7xl lg:text-8xl leading-tight mb-8"
              style={{ textShadow: "2px 2px 0 #660109, 4px 4px 0 #000" }}
            >
              FOOD FROM <br />
              <span
                className="text-[#ff686d]"
                style={{ textShadow: "2px 2px 0 #A3141B, 4px 4px 0 #fff" }}
              >
                दिल.
              </span>
               MADE <br />
              WITH LOVE.
              {/* Two Decades of <br />  */}
              {/* Flavor, Culture
              <br /> & Good Times */}
            </h1>
          </Reveal>
          <Reveal delay={400}>
            <div className="flex items-center gap-6 justify-center">
              <div className="h-px w-8 md:w-16 bg-white/60"></div>
              <span className="font-sans-body text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-white/90">
                Authentic Indian Flavors
              </span>
              <div className="h-px w-8 md:w-16 bg-white/60"></div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

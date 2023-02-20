export interface WordCarouselProps {
  phrases: string[];
}
export default function WordCarousel({ phrases }: WordCarouselProps) {
  return (
    <div className="relative h-20 w-full">
      <div className="absolute top-0 h-20 overflow-hidden leading-[20]">
        <div className={`relative animate-[rotate_10s_ease-in-out_infinite]`}>
          {phrases.map((phrase, index) => (
            <div className="block h-20" key={index}>
              <h1 className="text-2xl text-slate-50 md:text-4xl xl:text-6xl">
                {phrase}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

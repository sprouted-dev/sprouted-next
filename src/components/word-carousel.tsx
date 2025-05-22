export interface WordCarouselProps {
  phrases: string[];
}
export default function WordCarousel({ phrases }: WordCarouselProps) {
  return (
    <div className="relative h-8 w-full max-w-2xl mx-auto">
      <div className="absolute top-0 h-8 overflow-hidden">
        <div className={`relative animate-[rotate_16s_ease-in-out_infinite]`}>
          {phrases.map((phrase, index) => (
            <div className="block h-8 flex items-center justify-center" key={index}>
              <span className="text-2xl font-medium text-nature-mist dark:text-nature-fog">
                {phrase}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

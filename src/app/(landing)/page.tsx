import WordCarousel from "../../components/word-carousel";

export default function Home() {
  const phrases = [
    "Free Range Developers.",
    "No Cubicles.",
    "Fresh Farm To Office.",
    "Ethically Raised.",
    "Free Range Developers.",
  ];
  return (
    <div className="flex h-screen items-center pl-16">
      <WordCarousel phrases={phrases} />
    </div>
  );
}

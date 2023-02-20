import WordCarousel from "../../components/word-carousel";

export const config = {
  runtime: "experimental-edge",
};

export default function Landing() {
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

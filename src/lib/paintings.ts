export type Painting = {
  slug: string;
  title: string;
  medium: string;
  dimensions: string;
  year?: string;
  collection?: string;
  image: string;
  width: number;
  height: number;
  alt: string;
  accent: string; // approximate dominant colour, used for card theming
};

const accents = [
  "#7c8c46",
  "#1c2540",
  "#b56b7c",
  "#1f7a7a",
  "#8f86ad",
  "#4a4fa0",
  "#c98a3e",
  "#1f8a7a",
  "#6b3f52",
  "#2f8fa6",
  "#1f6b45",
  "#5c7a3a",
  "#7c2530",
  "#d9a8ac",
  "#6e4f52",
  "#2b2f57",
  "#c96b5c",
  "#9c2a5e",
  "#3f8fbf",
];

export const paintings: Painting[] = Array.from({ length: 19 }, (_, i) => {
  const n = i + 1;
  const padded = String(n).padStart(2, "0");
  return {
    slug: `gallery-${padded}`,
    title: "Untitled",
    medium: "Oil on canvas",
    dimensions: "",
    image: `/images/gallery/gallery-${padded}.jpg`,
    width: 2117,
    height: 2117,
    alt: `Untitled oil painting by Komal Hira, piece ${n}`,
    accent: accents[i % accents.length],
  };
});

export function getPaintingBySlug(slug: string): Painting | undefined {
  return paintings.find((p) => p.slug === slug);
}

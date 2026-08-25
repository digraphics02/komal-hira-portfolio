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

export const paintings: Painting[] = [];

export function getPaintingBySlug(slug: string): Painting | undefined {
  return paintings.find((p) => p.slug === slug);
}

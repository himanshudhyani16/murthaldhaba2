export type MenuCategory = {
  name: string;
  img: string;
  href?: string;
};

export type OfferCategory = {
  name: string;
  img: string;
};

export type ExperienceCategory = {
  name: string;
  img: string;
};

export type OfferItem = {
  dayLabel: string[];
  details: string[];
  img: string;
  href?: string;
};

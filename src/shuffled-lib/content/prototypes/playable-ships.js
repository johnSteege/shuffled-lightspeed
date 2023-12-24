import { card } from "./cards.js";

export const playable_ships = {
  kestrel_a: {
    name: "Kestrel A",
    description: "A small and simple ship.",
    max_hp: 30,
    cards: [
      card.basic_laser,
      card.basic_laser,
      card.basic_laser,
      card.basic_laser,
      card.boost_engines,
      card.boost_shields,
      card.boost_shields,
    ],
  },
  kestrel_b: {
    name: "Kestrel B",
    description: "A small and simple ship.",
    max_hp: 30,
    cards: [
      card.basic_laser,
      card.basic_laser,
      card.basic_missile,
      card.basic_missile,
      card.boost_engines,
      card.boost_engines,
      card.boost_shields,
    ],
  },
  kestrel_c: {
    name: "Kestrel C",
    description: "A small and simple ship.",
    max_hp: 30,
    cards: [
      card.basic_missile,
      card.basic_missile,
      card.basic_missile,
      card.basic_missile,
      card.boost_engines,
      card.boost_engines,
      card.boost_shields,
    ],
  }
};

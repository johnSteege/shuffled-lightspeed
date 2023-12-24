import { card } from "./cards";

export const enemies = {
  rock_a: {
    name: "Rock A",
    description: "A tough ship.",
    max_hp: 12,
    cards: [
      card.basic_laser,
      card.basic_missile,
      card.boost_engines,
      card.boost_engines,
      card.boost_engines,
      card.boost_shields,
      card.boost_shields,
      card.boost_shields,
    ],
  },
  rock_b: {
    name: "Rock B",
    description: "A tough ship.",
    max_hp: 12,
    cards: [
      card.basic_laser,
      card.basic_missile,
      card.boost_engines,
      card.boost_engines,
      card.boost_engines,
      card.boost_shields,
      card.boost_shields,
      card.boost_shields,
    ],
  },
};

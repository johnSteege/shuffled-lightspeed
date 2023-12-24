export const card = {
  basic_laser: {
    name: "Basic Laser",
    description: "A weak but reliable laser.",
    action: (self, opponent) => {
      self.decreaseEnergy(2);
      opponent.doDamage("laser", 1);
    },
    skip: (self) => {
      self.increaseEnergy(4);
    },
  },
  basic_missile: {
    name: "Basic Missile",
    description: "A simple and reliable missile.",
    canUse: (self) => {
      return self.missiles > 0;
    },
    action: (self, opponent) => {
      self.decreaseEnergy(2);
      self.decreaseMissiles(1);
      opponent.doDamage("missile", 2);
    },
    skip: (self) => {
      self.increaseEnergy(4);
    },
  },
  boost_shields: {
    name: "Boost Shields",
    description: "Boost your shields.",
    canUse: (self) => {
      return self.shields < self.maxShields;
    },
    action: (self, opponent) => {
      self.decreaseEnergy(2);
      self.increaseShields(2);
    },
    skip(self) {
      self.increaseEnergy(4);
    },
  },
  boost_engines: {
    name: "Boost Engines",
    description: "Boost your engines.",
    action: (self, opponent) => {
      self.decreaseEnergy(2);
      self.increaseDodge(10);
    },
    skip(self) {
      self.increaseEnergy(4);
    },
  },
};

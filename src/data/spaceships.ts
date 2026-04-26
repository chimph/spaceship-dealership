export interface Spaceship {
  id: string;
  name: string;
  model: string;
  manufacturer: string;
  year: number;
  class: string;
  price: number;
  description: string;
  specs: {
    hull: string;
    engine: string;
    speed: string;
    cargo: string;
    crew: string;
    range: string;
    armament: string;
    shields: string;
  };
  condition: string;
  conditionScore: number;
  image: string;
  tags: string[];
}

export const spaceships: Spaceship[] = [
  {
    id: "peregrine-fighter",
    name: "Peregrine",
    model: "MK-IV Interceptor",
    manufacturer: "Aurora Dynamics",
    year: 2184,
    class: "Fighter",
    price: 425000,
    description:
      "A legendary light interceptor known for its blistering speed and nimble handling. The Peregrine MK-IV was the backbone of the Colonial Defense Fleet during the Outer Rim Conflicts. This particular example has been meticulously maintained and features a recently overhauled ion drive system. Perfect for solo pilots who value agility over brute force.",
    specs: {
      hull: "Titanium-Carbon Composite",
      engine: "Dual Ion Drive X7",
      speed: "Mach 12 (Atmospheric)",
      cargo: "200 kg",
      crew: "1",
      range: "15,000 AU",
      armament: "2x Laser Cannon, 4x Missile Pods",
      shields: "Type-III Deflector",
    },
    condition: "Excellent",
    conditionScore: 8,
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80",
    tags: ["fast", "light", "solo"],
  },
  {
    id: "horizon-cruiser",
    name: "Horizon",
    model: "HC-7 Deep Space Cruiser",
    manufacturer: "Stellar Industries",
    year: 2179,
    class: "Cruiser",
    price: 1850000,
    description:
      "The Horizon-class cruiser is the gold standard for long-range deep space travel. With luxurious quarters, a full medical bay, and enough cargo capacity for extended expeditions, this vessel has served explorers, merchants, and adventurers alike. This unit features upgraded living quarters and a newly installed quantum navigation computer.",
    specs: {
      hull: "Reinforced Durasteel",
      engine: "Quantum Slipstream Drive",
      speed: "Mach 8 (Atmospheric)",
      cargo: "12,000 kg",
      crew: "4-8",
      range: "500,000 AU",
      armament: "4x Laser Turrets, 1x Missile Battery",
      shields: "Type-VI Shield Generator",
    },
    condition: "Very Good",
    conditionScore: 7,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    tags: ["luxury", "long-range", "exploration"],
  },
  {
    id: "ironclad-hauler",
    name: "Ironclad",
    model: "IH-200 Freighter",
    manufacturer: "Vulcan Heavy Industries",
    year: 2175,
    class: "Freighter",
    price: 980000,
    description:
      "Built like a tank and twice as useful. The Ironclad freighter is the workhorse of interstellar commerce. With a cavernous cargo hold, redundant life support systems, and a reputation for reliability, no ship is better suited for hauling cargo through dangerous space lanes. This example has clean logs and a well-documented service history.",
    specs: {
      hull: "Layered Titanium Alloy",
      engine: "Twin Fusion Core",
      speed: "Mach 4 (Atmospheric)",
      cargo: "85,000 kg",
      crew: "2-6",
      range: "200,000 AU",
      armament: "2x Defensive Turrets",
      shields: "Type-IV Cargo Grade",
    },
    condition: "Good",
    conditionScore: 6,
    image: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=800&q=80",
    tags: ["cargo", "reliable", "heavy"],
  },
  {
    id: "phantom-stealth",
    name: "Phantom",
    model: "ST-X Reconnaissance Craft",
    manufacturer: "Shadow Systems Corp",
    year: 2186,
    class: "Stealth",
    price: 2750000,
    description:
      "The Phantom is the stuff of legends in intelligence circles. Featuring advanced stealth plating and a cloaking device that's still operational, this reconnaissance craft can slip past even the most vigilant blockades. Only 47 were ever manufactured. This one comes with full sensor suite and encrypted comms array.",
    specs: {
      hull: "Stealth-Coated Graphene",
      engine: "Silent Running Drive",
      speed: "Mach 15 (Atmospheric)",
      cargo: "500 kg",
      crew: "2",
      range: "80,000 AU",
      armament: "2x Railgun, Stealth Missile System",
      shields: "Adaptive Camo Shroud",
    },
    condition: "Excellent",
    conditionScore: 9,
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80",
    tags: ["stealth", "recon", "rare"],
  },
  {
    id: "nova-collector",
    name: "Nova",
    model: "NC-1 Luxury Yacht",
    manufacturer: "Celestial Motors",
    year: 2188,
    class: "Yacht",
    price: 5200000,
    description:
      "For those who demand nothing but the finest in spacefaring luxury. The Nova-class yacht features a gravity-defying observation deck, holographic entertainment systems, a full bar with zero-g capability, and a crew of 12 to cater to your every need. This yacht has been used for diplomatic events and celebrity charters across the Core Worlds.",
    specs: {
      hull: "Gold-Titanium Weave",
      engine: "Dual Quantum Drive",
      speed: "Mach 10 (Atmospheric)",
      cargo: "5,000 kg",
      crew: "12",
      range: "300,000 AU",
      armament: "None (Full Security Detail Available)",
      shields: "Type-VIII Diplomatic Grade",
    },
    condition: "Pristine",
    conditionScore: 10,
    image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=800&q=80",
    tags: ["luxury", "yacht", "expensive"],
  },
  {
    id: "warhound-battleship",
    name: "Warhound",
    model: "BS-9 Dreadnought",
    manufacturer: "Mars Defense Works",
    year: 2172,
    class: "Battleship",
    price: 12500000,
    description:
      "The Warhound is a statement of intent. With enough firepower to solo a small fleet, this dreadnought was designed for planetary defense and fleet engagements. Despite its age, the Warhound's systems have been upgraded with modern targeting computers and reinforced weapon mounts. A true floating fortress that commands respect in any sector.",
    specs: {
      hull: "Plated Adamantium-Titanium",
      engine: "Quad Fusion Reactor Array",
      speed: "Mach 3 (Atmospheric)",
      cargo: "250,000 kg",
      crew: "85-200",
      range: "1,000,000 AU",
      armament: "12x Heavy Cannons, 24x Missile Silos, 8x Laser Batteries",
      shields: "Type-X Fleet Command",
    },
    condition: "Fair",
    conditionScore: 5,
    image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=800&q=80",
    tags: ["military", "heavy", "powerful"],
  },
  {
    id: "wasp-scout",
    name: "Wasp",
    model: "SC-3 Scout Ship",
    manufacturer: "Swift Aerospace",
    year: 2185,
    class: "Scout",
    price: 320000,
    description:
      "Small, fast, and equipped with the best sensor suite in its class. The Wasp scout ship is the first choice for survey teams, anomaly researchers, and independent prospectors. Its compact frame means it can land on virtually any surface, and its modular design allows for quick reconfiguration between survey, rescue, and transport missions.",
    specs: {
      hull: "Lightweight Carbon Fiber",
      engine: "Variable Thrust Ion",
      speed: "Mach 14 (Atmospheric)",
      cargo: "800 kg",
      crew: "1-3",
      range: "100,000 AU",
      armament: "1x Defensive Laser, Flare Dispensers",
      shields: "Type-II Scout Grade",
    },
    condition: "Excellent",
    conditionScore: 8,
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&q=80",
    tags: ["scout", "versatile", "survey"],
  },
  {
    id: "titan-goliath",
    name: "Goliath",
    model: "TG-500 Mining Barge",
    manufacturer: "Asteroid Mining Corp",
    year: 2170,
    class: "Industrial",
    price: 3400000,
    description:
      "The Goliath is a massive mining barge designed for extracting resources from asteroids and small planets. Equipped with laser drills, refining equipment, and a cargo hold that can swallow a small yacht, this vessel is the ultimate tool for resource extraction. This unit includes a full complement of mining equipment and has extracted over 40,000 tons of ore in its career.",
    specs: {
      hull: "Reinforced Mining Steel",
      engine: "Heavy-Duty Fusion",
      speed: "Mach 2 (Atmospheric)",
      cargo: "500,000 kg",
      crew: "15-30",
      range: "150,000 AU",
      armament: "4x Point Defense Turrets",
      shields: "Type-V Industrial",
    },
    condition: "Good",
    conditionScore: 6,
    image: "https://images.unsplash.com/photo-1457364887197-9150188c107b?w=800&q=80",
    tags: ["mining", "industrial", "massive"],
  },
];

export const manufacturers = [
  "Aurora Dynamics",
  "Stellar Industries",
  "Vulcan Heavy Industries",
  "Shadow Systems Corp",
  "Celestial Motors",
  "Mars Defense Works",
  "Swift Aerospace",
  "Asteroid Mining Corp",
];

export const shipClasses = [
  "Fighter",
  "Cruiser",
  "Freighter",
  "Stealth",
  "Yacht",
  "Battleship",
  "Scout",
  "Industrial",
];

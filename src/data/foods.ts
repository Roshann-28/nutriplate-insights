export interface Food {
  id: string;
  name: string;
  nameHindi?: string;
  category: string;
  emoji: string;
  nutrients: {
    protein: number;
    fiber: number;
    iron: number;
    calcium: number;
    vitaminA: number;
    vitaminC: number;
    vitaminD: number;
    vitaminB12: number;
    omega3: number;
    zinc: number;
  };
}

export const foodCategories = [
  { id: "grains", name: "Grains & Cereals", emoji: "🌾" },
  { id: "legumes", name: "Legumes & Pulses", emoji: "🫘" },
  { id: "vegetables", name: "Vegetables", emoji: "🥬" },
  { id: "fruits", name: "Fruits", emoji: "🍎" },
  { id: "dairy", name: "Dairy & Alternatives", emoji: "🥛" },
  { id: "proteins", name: "Proteins", emoji: "🍳" },
  { id: "nuts", name: "Nuts & Seeds", emoji: "🥜" },
  { id: "oils", name: "Oils & Fats", emoji: "🫒" },
];

export const foods: Food[] = [
  // Grains & Cereals
  { id: "roti", name: "Roti / Chapati", nameHindi: "रोटी", category: "grains", emoji: "🫓", nutrients: { protein: 3, fiber: 4, iron: 3, calcium: 2, vitaminA: 0, vitaminC: 0, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 2 } },
  { id: "rice", name: "White Rice", nameHindi: "चावल", category: "grains", emoji: "🍚", nutrients: { protein: 2, fiber: 1, iron: 1, calcium: 1, vitaminA: 0, vitaminC: 0, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 1 } },
  { id: "brown-rice", name: "Brown Rice", category: "grains", emoji: "🍚", nutrients: { protein: 3, fiber: 4, iron: 2, calcium: 1, vitaminA: 0, vitaminC: 0, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 2 } },
  { id: "paratha", name: "Paratha", nameHindi: "पराठा", category: "grains", emoji: "🫓", nutrients: { protein: 3, fiber: 3, iron: 2, calcium: 2, vitaminA: 1, vitaminC: 0, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 2 } },
  { id: "poha", name: "Poha", nameHindi: "पोहा", category: "grains", emoji: "🍛", nutrients: { protein: 2, fiber: 2, iron: 8, calcium: 1, vitaminA: 0, vitaminC: 0, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 1 } },
  { id: "upma", name: "Upma", nameHindi: "उपमा", category: "grains", emoji: "🍛", nutrients: { protein: 3, fiber: 3, iron: 2, calcium: 1, vitaminA: 1, vitaminC: 1, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 1 } },
  { id: "dosa", name: "Dosa", nameHindi: "डोसा", category: "grains", emoji: "🥞", nutrients: { protein: 4, fiber: 2, iron: 3, calcium: 2, vitaminA: 0, vitaminC: 0, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 2 } },
  { id: "idli", name: "Idli", nameHindi: "इडली", category: "grains", emoji: "⚪", nutrients: { protein: 4, fiber: 2, iron: 2, calcium: 2, vitaminA: 0, vitaminC: 0, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 2 } },
  { id: "oats", name: "Oats", category: "grains", emoji: "🥣", nutrients: { protein: 5, fiber: 8, iron: 4, calcium: 2, vitaminA: 0, vitaminC: 0, vitaminD: 0, vitaminB12: 0, omega3: 1, zinc: 3 } },
  { id: "bread", name: "Bread", category: "grains", emoji: "🍞", nutrients: { protein: 3, fiber: 2, iron: 2, calcium: 2, vitaminA: 0, vitaminC: 0, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 1 } },
  { id: "millet", name: "Millet / Bajra", nameHindi: "बाजरा", category: "grains", emoji: "🌾", nutrients: { protein: 4, fiber: 5, iron: 6, calcium: 3, vitaminA: 0, vitaminC: 0, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 3 } },
  { id: "jowar", name: "Jowar / Sorghum", nameHindi: "ज्वार", category: "grains", emoji: "🌾", nutrients: { protein: 4, fiber: 6, iron: 4, calcium: 2, vitaminA: 0, vitaminC: 0, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 2 } },

  // Legumes & Pulses
  { id: "dal-toor", name: "Toor Dal", nameHindi: "तूर दाल", category: "legumes", emoji: "🥣", nutrients: { protein: 8, fiber: 5, iron: 5, calcium: 3, vitaminA: 1, vitaminC: 0, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 4 } },
  { id: "dal-moong", name: "Moong Dal", nameHindi: "मूंग दाल", category: "legumes", emoji: "🥣", nutrients: { protein: 8, fiber: 6, iron: 4, calcium: 3, vitaminA: 1, vitaminC: 1, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 3 } },
  { id: "dal-chana", name: "Chana Dal", nameHindi: "चना दाल", category: "legumes", emoji: "🥣", nutrients: { protein: 8, fiber: 7, iron: 5, calcium: 3, vitaminA: 1, vitaminC: 0, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 4 } },
  { id: "dal-masoor", name: "Masoor Dal", nameHindi: "मसूर दाल", category: "legumes", emoji: "🥣", nutrients: { protein: 9, fiber: 5, iron: 6, calcium: 2, vitaminA: 0, vitaminC: 1, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 4 } },
  { id: "dal-urad", name: "Urad Dal", nameHindi: "उड़द दाल", category: "legumes", emoji: "🥣", nutrients: { protein: 8, fiber: 6, iron: 7, calcium: 4, vitaminA: 0, vitaminC: 0, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 4 } },
  { id: "rajma", name: "Rajma / Kidney Beans", nameHindi: "राजमा", category: "legumes", emoji: "🫘", nutrients: { protein: 8, fiber: 7, iron: 5, calcium: 4, vitaminA: 0, vitaminC: 1, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 3 } },
  { id: "chole", name: "Chole / Chickpeas", nameHindi: "छोले", category: "legumes", emoji: "🫘", nutrients: { protein: 7, fiber: 8, iron: 5, calcium: 4, vitaminA: 1, vitaminC: 1, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 3 } },
  { id: "lobia", name: "Lobia / Black-eyed Peas", nameHindi: "लोबिया", category: "legumes", emoji: "🫘", nutrients: { protein: 7, fiber: 6, iron: 5, calcium: 3, vitaminA: 1, vitaminC: 1, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 3 } },
  { id: "sprouts", name: "Sprouts", nameHindi: "अंकुरित", category: "legumes", emoji: "🌱", nutrients: { protein: 6, fiber: 4, iron: 4, calcium: 2, vitaminA: 2, vitaminC: 5, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 2 } },
  { id: "soybean", name: "Soybean", category: "legumes", emoji: "🫛", nutrients: { protein: 10, fiber: 6, iron: 8, calcium: 5, vitaminA: 0, vitaminC: 2, vitaminD: 0, vitaminB12: 0, omega3: 3, zinc: 5 } },

  // Vegetables
  { id: "palak", name: "Palak / Spinach", nameHindi: "पालक", category: "vegetables", emoji: "🥬", nutrients: { protein: 3, fiber: 4, iron: 8, calcium: 6, vitaminA: 9, vitaminC: 5, vitaminD: 0, vitaminB12: 0, omega3: 1, zinc: 2 } },
  { id: "methi", name: "Methi / Fenugreek", nameHindi: "मेथी", category: "vegetables", emoji: "🌿", nutrients: { protein: 4, fiber: 5, iron: 7, calcium: 5, vitaminA: 7, vitaminC: 4, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 2 } },
  { id: "bhindi", name: "Bhindi / Okra", nameHindi: "भिंडी", category: "vegetables", emoji: "🥒", nutrients: { protein: 2, fiber: 5, iron: 3, calcium: 4, vitaminA: 3, vitaminC: 4, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 2 } },
  { id: "gobhi", name: "Gobhi / Cauliflower", nameHindi: "गोभी", category: "vegetables", emoji: "🥦", nutrients: { protein: 2, fiber: 3, iron: 2, calcium: 2, vitaminA: 0, vitaminC: 8, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 1 } },
  { id: "baingan", name: "Baingan / Eggplant", nameHindi: "बैंगन", category: "vegetables", emoji: "🍆", nutrients: { protein: 1, fiber: 4, iron: 2, calcium: 1, vitaminA: 1, vitaminC: 2, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 1 } },
  { id: "aloo", name: "Aloo / Potato", nameHindi: "आलू", category: "vegetables", emoji: "🥔", nutrients: { protein: 2, fiber: 3, iron: 2, calcium: 1, vitaminA: 0, vitaminC: 4, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 1 } },
  { id: "tamatar", name: "Tamatar / Tomato", nameHindi: "टमाटर", category: "vegetables", emoji: "🍅", nutrients: { protein: 1, fiber: 2, iron: 2, calcium: 1, vitaminA: 5, vitaminC: 5, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 1 } },
  { id: "pyaz", name: "Pyaz / Onion", nameHindi: "प्याज", category: "vegetables", emoji: "🧅", nutrients: { protein: 1, fiber: 2, iron: 1, calcium: 1, vitaminA: 0, vitaminC: 2, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 1 } },
  { id: "gajar", name: "Gajar / Carrot", nameHindi: "गाजर", category: "vegetables", emoji: "🥕", nutrients: { protein: 1, fiber: 4, iron: 2, calcium: 2, vitaminA: 10, vitaminC: 3, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 1 } },
  { id: "shimla-mirch", name: "Shimla Mirch / Capsicum", nameHindi: "शिमला मिर्च", category: "vegetables", emoji: "🫑", nutrients: { protein: 1, fiber: 3, iron: 2, calcium: 1, vitaminA: 6, vitaminC: 10, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 1 } },
  { id: "lauki", name: "Lauki / Bottle Gourd", nameHindi: "लौकी", category: "vegetables", emoji: "🥒", nutrients: { protein: 1, fiber: 3, iron: 1, calcium: 2, vitaminA: 1, vitaminC: 3, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 1 } },
  { id: "tori", name: "Tori / Ridge Gourd", nameHindi: "तोरी", category: "vegetables", emoji: "🥒", nutrients: { protein: 1, fiber: 3, iron: 2, calcium: 2, vitaminA: 2, vitaminC: 4, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 1 } },
  { id: "karela", name: "Karela / Bitter Gourd", nameHindi: "करेला", category: "vegetables", emoji: "🥒", nutrients: { protein: 2, fiber: 4, iron: 3, calcium: 2, vitaminA: 4, vitaminC: 7, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 2 } },
  { id: "cabbage", name: "Cabbage", nameHindi: "पत्ता गोभी", category: "vegetables", emoji: "🥬", nutrients: { protein: 1, fiber: 3, iron: 2, calcium: 2, vitaminA: 1, vitaminC: 6, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 1 } },
  { id: "broccoli", name: "Broccoli", category: "vegetables", emoji: "🥦", nutrients: { protein: 3, fiber: 4, iron: 3, calcium: 4, vitaminA: 4, vitaminC: 9, vitaminD: 0, vitaminB12: 0, omega3: 1, zinc: 2 } },
  { id: "beans", name: "Green Beans", category: "vegetables", emoji: "🫛", nutrients: { protein: 2, fiber: 4, iron: 3, calcium: 2, vitaminA: 3, vitaminC: 4, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 1 } },
  { id: "peas", name: "Matar / Green Peas", nameHindi: "मटर", category: "vegetables", emoji: "🟢", nutrients: { protein: 5, fiber: 5, iron: 3, calcium: 2, vitaminA: 3, vitaminC: 4, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 2 } },

  // Fruits
  { id: "apple", name: "Apple", nameHindi: "सेब", category: "fruits", emoji: "🍎", nutrients: { protein: 0, fiber: 4, iron: 1, calcium: 1, vitaminA: 1, vitaminC: 3, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 0 } },
  { id: "banana", name: "Banana", nameHindi: "केला", category: "fruits", emoji: "🍌", nutrients: { protein: 1, fiber: 3, iron: 1, calcium: 1, vitaminA: 1, vitaminC: 3, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 1 } },
  { id: "mango", name: "Mango", nameHindi: "आम", category: "fruits", emoji: "🥭", nutrients: { protein: 1, fiber: 3, iron: 1, calcium: 1, vitaminA: 8, vitaminC: 6, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 0 } },
  { id: "papaya", name: "Papaya", nameHindi: "पपीता", category: "fruits", emoji: "🍈", nutrients: { protein: 1, fiber: 3, iron: 1, calcium: 2, vitaminA: 6, vitaminC: 9, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 0 } },
  { id: "orange", name: "Orange", nameHindi: "संतरा", category: "fruits", emoji: "🍊", nutrients: { protein: 1, fiber: 3, iron: 1, calcium: 2, vitaminA: 2, vitaminC: 9, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 0 } },
  { id: "guava", name: "Guava", nameHindi: "अमरूद", category: "fruits", emoji: "🍏", nutrients: { protein: 2, fiber: 5, iron: 2, calcium: 2, vitaminA: 4, vitaminC: 10, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 1 } },
  { id: "pomegranate", name: "Pomegranate", nameHindi: "अनार", category: "fruits", emoji: "🍎", nutrients: { protein: 1, fiber: 4, iron: 3, calcium: 1, vitaminA: 0, vitaminC: 4, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 1 } },
  { id: "grapes", name: "Grapes", nameHindi: "अंगूर", category: "fruits", emoji: "🍇", nutrients: { protein: 1, fiber: 1, iron: 1, calcium: 1, vitaminA: 1, vitaminC: 2, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 0 } },
  { id: "watermelon", name: "Watermelon", nameHindi: "तरबूज", category: "fruits", emoji: "🍉", nutrients: { protein: 1, fiber: 1, iron: 1, calcium: 1, vitaminA: 4, vitaminC: 3, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 0 } },
  { id: "chikoo", name: "Chikoo / Sapota", nameHindi: "चीकू", category: "fruits", emoji: "🥝", nutrients: { protein: 1, fiber: 5, iron: 2, calcium: 2, vitaminA: 2, vitaminC: 3, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 1 } },

  // Dairy & Alternatives
  { id: "milk", name: "Milk", nameHindi: "दूध", category: "dairy", emoji: "🥛", nutrients: { protein: 6, fiber: 0, iron: 0, calcium: 8, vitaminA: 3, vitaminC: 0, vitaminD: 4, vitaminB12: 5, omega3: 0, zinc: 3 } },
  { id: "curd", name: "Curd / Dahi", nameHindi: "दही", category: "dairy", emoji: "🥛", nutrients: { protein: 5, fiber: 0, iron: 0, calcium: 7, vitaminA: 2, vitaminC: 0, vitaminD: 2, vitaminB12: 5, omega3: 0, zinc: 3 } },
  { id: "paneer", name: "Paneer", nameHindi: "पनीर", category: "dairy", emoji: "🧀", nutrients: { protein: 8, fiber: 0, iron: 1, calcium: 8, vitaminA: 3, vitaminC: 0, vitaminD: 2, vitaminB12: 3, omega3: 0, zinc: 3 } },
  { id: "chaas", name: "Chaas / Buttermilk", nameHindi: "छाछ", category: "dairy", emoji: "🥛", nutrients: { protein: 3, fiber: 0, iron: 0, calcium: 5, vitaminA: 1, vitaminC: 0, vitaminD: 1, vitaminB12: 2, omega3: 0, zinc: 2 } },
  { id: "cheese", name: "Cheese", category: "dairy", emoji: "🧀", nutrients: { protein: 7, fiber: 0, iron: 1, calcium: 7, vitaminA: 4, vitaminC: 0, vitaminD: 2, vitaminB12: 4, omega3: 0, zinc: 4 } },
  { id: "ghee", name: "Ghee", nameHindi: "घी", category: "dairy", emoji: "🧈", nutrients: { protein: 0, fiber: 0, iron: 0, calcium: 0, vitaminA: 5, vitaminC: 0, vitaminD: 2, vitaminB12: 0, omega3: 0, zinc: 0 } },
  { id: "tofu", name: "Tofu", category: "dairy", emoji: "🧊", nutrients: { protein: 8, fiber: 1, iron: 5, calcium: 7, vitaminA: 0, vitaminC: 0, vitaminD: 0, vitaminB12: 0, omega3: 1, zinc: 3 } },

  // Proteins
  { id: "egg", name: "Egg", nameHindi: "अंडा", category: "proteins", emoji: "🥚", nutrients: { protein: 8, fiber: 0, iron: 3, calcium: 2, vitaminA: 4, vitaminC: 0, vitaminD: 6, vitaminB12: 8, omega3: 2, zinc: 4 } },
  { id: "chicken", name: "Chicken", nameHindi: "मुर्गा", category: "proteins", emoji: "🍗", nutrients: { protein: 10, fiber: 0, iron: 3, calcium: 1, vitaminA: 1, vitaminC: 0, vitaminD: 1, vitaminB12: 4, omega3: 1, zinc: 5 } },
  { id: "fish", name: "Fish", nameHindi: "मछली", category: "proteins", emoji: "🐟", nutrients: { protein: 9, fiber: 0, iron: 3, calcium: 3, vitaminA: 2, vitaminC: 0, vitaminD: 8, vitaminB12: 9, omega3: 10, zinc: 4 } },
  { id: "mutton", name: "Mutton", nameHindi: "मटन", category: "proteins", emoji: "🍖", nutrients: { protein: 9, fiber: 0, iron: 6, calcium: 1, vitaminA: 1, vitaminC: 0, vitaminD: 1, vitaminB12: 6, omega3: 2, zinc: 7 } },
  { id: "prawns", name: "Prawns / Shrimp", nameHindi: "झींगा", category: "proteins", emoji: "🦐", nutrients: { protein: 8, fiber: 0, iron: 4, calcium: 3, vitaminA: 2, vitaminC: 0, vitaminD: 3, vitaminB12: 7, omega3: 5, zinc: 4 } },

  // Nuts & Seeds
  { id: "almonds", name: "Almonds", nameHindi: "बादाम", category: "nuts", emoji: "🌰", nutrients: { protein: 6, fiber: 4, iron: 4, calcium: 5, vitaminA: 0, vitaminC: 0, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 4 } },
  { id: "walnuts", name: "Walnuts", nameHindi: "अखरोट", category: "nuts", emoji: "🌰", nutrients: { protein: 5, fiber: 3, iron: 3, calcium: 2, vitaminA: 0, vitaminC: 0, vitaminD: 0, vitaminB12: 0, omega3: 9, zinc: 3 } },
  { id: "cashews", name: "Cashews", nameHindi: "काजू", category: "nuts", emoji: "🥜", nutrients: { protein: 5, fiber: 1, iron: 6, calcium: 1, vitaminA: 0, vitaminC: 0, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 5 } },
  { id: "peanuts", name: "Peanuts", nameHindi: "मूंगफली", category: "nuts", emoji: "🥜", nutrients: { protein: 7, fiber: 3, iron: 4, calcium: 2, vitaminA: 0, vitaminC: 0, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 4 } },
  { id: "flaxseeds", name: "Flaxseeds", nameHindi: "अलसी", category: "nuts", emoji: "🌾", nutrients: { protein: 5, fiber: 8, iron: 5, calcium: 4, vitaminA: 0, vitaminC: 0, vitaminD: 0, vitaminB12: 0, omega3: 10, zinc: 4 } },
  { id: "chia", name: "Chia Seeds", category: "nuts", emoji: "⚫", nutrients: { protein: 5, fiber: 10, iron: 6, calcium: 7, vitaminA: 0, vitaminC: 0, vitaminD: 0, vitaminB12: 0, omega3: 8, zinc: 4 } },
  { id: "sesame", name: "Sesame / Til", nameHindi: "तिल", category: "nuts", emoji: "⚪", nutrients: { protein: 5, fiber: 4, iron: 8, calcium: 9, vitaminA: 0, vitaminC: 0, vitaminD: 0, vitaminB12: 0, omega3: 1, zinc: 6 } },
  { id: "sunflower", name: "Sunflower Seeds", category: "nuts", emoji: "🌻", nutrients: { protein: 6, fiber: 3, iron: 5, calcium: 2, vitaminA: 0, vitaminC: 0, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 5 } },

  // Oils & Fats
  { id: "mustard-oil", name: "Mustard Oil", nameHindi: "सरसों का तेल", category: "oils", emoji: "🫒", nutrients: { protein: 0, fiber: 0, iron: 0, calcium: 0, vitaminA: 0, vitaminC: 0, vitaminD: 0, vitaminB12: 0, omega3: 6, zinc: 0 } },
  { id: "coconut-oil", name: "Coconut Oil", category: "oils", emoji: "🥥", nutrients: { protein: 0, fiber: 0, iron: 0, calcium: 0, vitaminA: 0, vitaminC: 0, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 0 } },
  { id: "olive-oil", name: "Olive Oil", category: "oils", emoji: "🫒", nutrients: { protein: 0, fiber: 0, iron: 0, calcium: 0, vitaminA: 0, vitaminC: 0, vitaminD: 0, vitaminB12: 0, omega3: 1, zinc: 0 } },
  { id: "groundnut-oil", name: "Groundnut Oil", category: "oils", emoji: "🥜", nutrients: { protein: 0, fiber: 0, iron: 0, calcium: 0, vitaminA: 0, vitaminC: 0, vitaminD: 0, vitaminB12: 0, omega3: 0, zinc: 0 } },
];

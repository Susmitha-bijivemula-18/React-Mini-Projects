import type { Recipe, Category } from '../types/recipe';

export const CATEGORIES: Category[] = [
  {
    name: "Indian",
    slug: "indian",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=400",
    description: "Spicy, aromatic, and rich traditional dishes from various regions of India."
  },
  {
    name: "Italian",
    slug: "italian",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400",
    description: "Classic Neapolitan pizzas, creamy pastas, and fresh Mediterranean flavors."
  },
  {
    name: "Chinese",
    slug: "chinese",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=400",
    description: "Wok-tossed noodles, fried rice, and spicy Szechuan specialty dishes."
  },
  {
    name: "Mexican",
    slug: "mexican",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=400",
    description: "Bold street tacos, fresh guacamole, pico de gallo, and standard tortillas."
  },
  {
    name: "Breakfast",
    slug: "breakfast",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=400",
    description: "Start your day with fluffy pancakes, crispy dosa, or soft idlis."
  },
  {
    name: "Desserts",
    slug: "desserts",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400",
    description: "Indulge in sweet chocolate cakes, warm gulab jamuns, and sweet finishes."
  },
  {
    name: "Healthy",
    slug: "healthy",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=400",
    description: "Nutritious, low-calorie, and protein-rich fuel for your body."
  }
];

export const RECIPES: Recipe[] = [
  {
    id: "paneer-butter-masala",
    name: "Paneer Butter Masala",
    description: "Creamy Indian cottage cheese (paneer) cooked in a rich, velvety tomato and butter-based gravy with aromatic spices.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=800",
    cuisine: "Indian",
    category: "Indian",
    region: "North India",
    rating: 4.9,
    reviews: 1420,
    prepTime: 15,
    cookTime: 30,
    difficulty: "Medium",
    servings: 4,
    vegetarian: true,
    ingredients: [
      { name: "Paneer (cubed)", quantity: "250g" },
      { name: "Tomatoes (chopped)", quantity: "4 medium" },
      { name: "Onion (sliced)", quantity: "1 large" },
      { name: "Butter", quantity: "2 tbsp" },
      { name: "Heavy Cream", quantity: "3 tbsp" },
      { name: "Ginger-Garlic Paste", quantity: "1 tbsp" },
      { name: "Kashmiri Red Chili Powder", quantity: "1.5 tsp" },
      { name: "Garam Masala", quantity: "1 tsp" },
      { name: "Kasuri Methi (Dried Fenugreek Leaves)", quantity: "1 tbsp" },
      { name: "Cashews", quantity: "10-12" }
    ],
    instructions: [
      { step: 1, title: "Prepare Gravy Base", description: "Sauté the onions, ginger, garlic, cashews, and chopped tomatoes in a pan with 1 tsp butter until soft and mushy." },
      { step: 2, title: "Blend Sauce Base", description: "Allow the sautéed ingredients to cool down completely, then blend them in a mixer into a very smooth, lump-free puree." },
      { step: 3, title: "Simmer Gravy", description: "Melt the remaining butter in a heavy pot. Add the blended puree and Kashmiri red chili powder. Simmer on medium-low heat until butter separates." },
      { step: 4, title: "Soak Paneer", description: "Meanwhile, soak the paneer cubes in warm water for 10 minutes, which makes the cheese incredibly soft and spongy." },
      { step: 5, title: "Add Spices & Paneer", description: "Pour in half a cup of water, add garam masala and salt, and bring to a simmer. Stir in the soaked paneer cubes gently." },
      { step: 6, title: "Finishing Touch", description: "Stir in the heavy cream and crushed Kasuri Methi. Let it simmer for another minute, garnish with coriander leaves, and serve warm." }
    ],
    tips: [
      "Soak paneer in warm water for 10 minutes before adding it to the gravy to keep it exceptionally soft.",
      "Grate a tiny bit of paneer over the finished dish for a premium restaurant-style presentation.",
      "Do not boil the gravy after adding the cream, as the cream may split."
    ],
    nutrition: {
      calories: 360,
      protein: "14g",
      carbohydrates: "12g",
      fat: "29g"
    }
  },
  {
    id: "hyderabadi-biryani",
    name: "Hyderabadi Veg Biryani",
    description: "An aromatic and delicious classic dish made with basmati rice, mixed vegetables, yogurt, and a blend of rich spices cooked on dum.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
    cuisine: "Indian",
    category: "Indian",
    region: "South India",
    rating: 4.8,
    reviews: 1850,
    prepTime: 20,
    cookTime: 40,
    difficulty: "Hard",
    servings: 6,
    vegetarian: true,
    ingredients: [
      { name: "Basmati Rice", quantity: "2 cups" },
      { name: "Mixed Vegetables (Carrot, Beans, Peas, Potato)", quantity: "2 cups" },
      { name: "Yogurt (Curd)", quantity: "1 cup" },
      { name: "Fried Onions (Birista)", quantity: "1 cup" },
      { name: "Saffron strands (soaked in milk)", quantity: "10-12" },
      { name: "Mint & Coriander leaves", quantity: "1/2 cup" },
      { name: "Ghee", quantity: "3 tbsp" },
      { name: "Shahi Jeera (Caraway Seeds)", quantity: "1 tsp" },
      { name: "Biryani Masala Powder", quantity: "2 tbsp" },
      { name: "Whole Spices (Cardamom, Cinnamon, Cloves)", quantity: "Assorted" }
    ],
    instructions: [
      { step: 1, title: "Parboil Rice", description: "Wash and soak basmati rice for 30 minutes. Cook in boiling water seasoned with whole spices and salt until 70% cooked. Drain." },
      { step: 2, title: "Marinate Vegetables", description: "In a bowl, mix yogurt, mixed vegetables, biryani masala, half of the fried onions, mint, coriander, and ghee. Let it marinate for 20 minutes." },
      { step: 3, title: "Build Layering Pot", description: "Grease a heavy-bottomed pot. Layer the marinated vegetable base at the bottom of the pot." },
      { step: 4, title: "Layer the Rice", description: "Spread the parboiled rice evenly over the marinated vegetable base. Top with saffron milk, ghee, remaining fried onions, and chopped mint/coriander." },
      { step: 5, title: "Dum Cook", description: "Seal the pot using dough or aluminum foil with a tight lid. Cook on high heat for 5 minutes, then place a tawa underneath and cook on low heat for 25 minutes." },
      { step: 6, title: "Rest and Serve", description: "Let the biryani rest for 10 minutes after turning off the heat, then carefully fluff the rice and serve hot." }
    ],
    tips: [
      "Ensure you use high-quality, aged long-grain basmati rice for the perfect grain separation.",
      "Do not skip the fried onions (birista) as they provide the signature sweet-savory flavor.",
      "Let the biryani rest for 10 minutes after turning off the heat before opening the seal."
    ],
    nutrition: {
      calories: 420,
      protein: "9g",
      carbohydrates: "65g",
      fat: "14g"
    }
  },
  {
    id: "margherita-pizza",
    name: "Classic Margherita Pizza",
    description: "A simple Italian masterpiece featuring a thin crispy crust, sweet San Marzano tomato sauce, fresh mozzarella cheese, and fragrant basil leaves.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800",
    cuisine: "Italian",
    category: "Italian",
    region: "Naples",
    rating: 4.7,
    reviews: 980,
    prepTime: 15,
    cookTime: 12,
    difficulty: "Medium",
    servings: 2,
    vegetarian: true,
    ingredients: [
      { name: "Pizza Dough", quantity: "1 ball (approx. 250g)" },
      { name: "San Marzano Canned Tomatoes (crushed)", quantity: "1/2 cup" },
      { name: "Fresh Mozzarella Cheese (sliced)", quantity: "120g" },
      { name: "Fresh Basil Leaves", quantity: "A handful" },
      { name: "Extra Virgin Olive Oil", quantity: "1 tbsp" },
      { name: "Sea Salt", quantity: "1/2 tsp" }
    ],
    instructions: [
      { step: 1, title: "Preheat Oven & Stone", description: "Preheat your oven to its maximum temperature (around 250°C/500°F) with a pizza stone inside for at least 45 minutes." },
      { step: 2, title: "Shape the Dough", description: "Stretch the pizza dough gently using your hands on a floured surface to form a 12-inch circle, keeping the border slightly thicker." },
      { step: 3, title: "Spread Tomato Sauce", description: "Spread the crushed tomatoes evenly over the base, leaving a 1/2 inch border around the edge of the pizza." },
      { step: 4, title: "Add Toppings", description: "Arrange slices of fresh mozzarella, sprinkle sea salt, and drizzle with extra virgin olive oil." },
      { step: 5, title: "Bake Pizza", description: "Transfer the pizza to the preheated stone. Bake for 8-10 minutes until the crust is charred and golden, and cheese is bubbly." },
      { step: 6, title: "Finish and Basil", description: "Remove the pizza from the oven and top with fresh basil immediately after baking, allowing the residual heat to release the aroma." }
    ],
    tips: [
      "Use fresh mozzarella rather than pre-shredded cheese to get the authentic melt and texture.",
      "Avoid rolling pins; stretching the dough by hand keeps the air pockets intact for a light, airy crust."
    ],
    nutrition: {
      calories: 580,
      protein: "24g",
      carbohydrates: "70g",
      fat: "22g"
    }
  },
  {
    id: "fettuccine-alfredo",
    name: "Classic Fettuccine Alfredo",
    description: "Rich, creamy, and velvety fettuccine pasta tossed in a luxurious butter, garlic, and fresh Parmesan cheese sauce.",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&q=80&w=800",
    cuisine: "Italian",
    category: "Italian",
    region: "Rome",
    rating: 4.8,
    reviews: 620,
    prepTime: 10,
    cookTime: 15,
    difficulty: "Easy",
    servings: 3,
    vegetarian: true,
    ingredients: [
      { name: "Fettuccine Pasta", quantity: "250g" },
      { name: "Butter", quantity: "4 tbsp" },
      { name: "Heavy Cream", quantity: "3/4 cup" },
      { name: "Garlic (minced)", quantity: "2 cloves" },
      { name: "Parmesan Cheese (grated)", quantity: "1/2 cup" },
      { name: "Black Pepper", quantity: "1/2 tsp" }
    ],
    instructions: [
      { step: 1, title: "Boil Pasta", description: "Cook fettuccine in boiling salted water until al dente. Drain, reserving 1/2 cup of pasta water." },
      { step: 2, title: "Sauté Garlic in Butter", description: "Melt butter in a pan over medium heat. Sauté minced garlic for 1 minute until fragrant." },
      { step: 3, title: "Simmer Cream & Cheese", description: "Add heavy cream and simmer for 2 minutes. Whisk in grated Parmesan cheese until melted and smooth." },
      { step: 4, title: "Toss with Pasta", description: "Add the cooked fettuccine to the cream sauce, tossing gently. Add reserved pasta water a splash at a time if the sauce is too thick." }
    ],
    tips: [
      "Use fresh Parmigiano-Reggiano rather than pre-grated cheese to prevent the sauce from becoming grainy.",
      "Toss the pasta directly in the pan with sauce to coat every strand evenly."
    ],
    nutrition: {
      calories: 520,
      protein: "14g",
      carbohydrates: "58g",
      fat: "28g"
    }
  },
  {
    id: "basil-pesto-spaghetti",
    name: "Garlic Basil Pesto Spaghetti",
    description: "Tender spaghetti strands coated in a vibrant, fragrant homemade basil pesto sauce with pine nuts, garlic, and Parmesan cheese.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800",
    cuisine: "Italian",
    category: "Italian",
    region: "Genoa",
    rating: 4.7,
    reviews: 580,
    prepTime: 10,
    cookTime: 10,
    difficulty: "Easy",
    servings: 3,
    vegetarian: true,
    ingredients: [
      { name: "Spaghetti Pasta", quantity: "250g" },
      { name: "Fresh Basil Leaves", quantity: "2 cups" },
      { name: "Garlic (peeled)", quantity: "3 cloves" },
      { name: "Pine Nuts (toasted)", quantity: "3 tbsp" },
      { name: "Extra Virgin Olive Oil", quantity: "1/2 cup" },
      { name: "Parmesan Cheese (grated)", quantity: "1/3 cup" }
    ],
    instructions: [
      { step: 1, title: "Cook Spaghetti", description: "Boil spaghetti in salted water until al dente. Drain and set aside." },
      { step: 2, title: "Blend Pesto Sauce", description: "In a food processor, pulse basil leaves, garlic cloves, toasted pine nuts, grated Parmesan cheese, and salt until finely chopped." },
      { step: 3, title: "Add Olive Oil", description: "With the motor running, slowly drizzle extra virgin olive oil into the food processor until the pesto sauce is emulsified and smooth." },
      { step: 4, title: "Toss and Serve", description: "Toss the freshly boiled spaghetti with pesto sauce at room temperature. Garnish with a few fresh basil leaves and serve." }
    ],
    tips: [
      "Do not cook the pesto sauce on direct heat, as the basil will lose its bright green color and fresh flavor.",
      "Store extra pesto in a jar topped with a layer of olive oil to prevent oxidation."
    ],
    nutrition: {
      calories: 480,
      protein: "11g",
      carbohydrates: "52g",
      fat: "24g"
    }
  },
  {
    id: "classic-pancakes",
    name: "Classic Fluffy Pancakes",
    description: "Thick, ultra-fluffy, golden-brown pancakes that are perfect for a classic weekend breakfast, topped with butter and maple syrup.",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=800",
    cuisine: "American",
    category: "Breakfast",
    region: "North America",
    rating: 4.7,
    reviews: 1120,
    prepTime: 10,
    cookTime: 15,
    difficulty: "Easy",
    servings: 3,
    vegetarian: true,
    ingredients: [
      { name: "All-Purpose Flour", quantity: "1.5 cups" },
      { name: "Baking Powder", quantity: "3.5 tsp" },
      { name: "Sugar", quantity: "1 tbsp" },
      { name: "Milk", quantity: "1.25 cups" },
      { name: "Melted Butter", quantity: "3 tbsp" },
      { name: "Egg", quantity: "1 large" },
      { name: "Salt", quantity: "1/2 tsp" }
    ],
    instructions: [
      { step: 1, title: "Whisk Dry Ingredients", description: "In a large bowl, sift together the flour, baking powder, sugar, and salt." },
      { step: 2, title: "Mix Wet Ingredients", description: "In another bowl, whisk together the milk, egg, and melted butter until combined." },
      { step: 3, title: "Create Batter", description: "Pour the wet mixture into the dry mixture. Stir gently with a spatula just until combined (batter should be slightly lumpy)." },
      { step: 4, title: "Cook First Side", description: "Heat a non-stick griddle over medium heat. Pour 1/4 cup of batter per pancake. Cook until bubbles appear on the top surface." },
      { step: 5, title: "Flip and Finish", description: "Flip the pancake and cook until golden brown on the other side. Serve hot with butter and maple syrup." }
    ],
    tips: [
      "Let the batter rest for 5-10 minutes before cooking to activate the baking powder, which makes the pancakes fluffier.",
      "Use butter or vegetable oil on the griddle, but wipe away excess with a paper towel for even coloring."
    ],
    nutrition: {
      calories: 290,
      protein: "8g",
      carbohydrates: "42g",
      fat: "10g"
    }
  },
  {
    id: "decadent-chocolate-cake",
    name: "Decadent Chocolate Cake",
    description: "Rich, moist, and deeply chocolatey cake layered with smooth chocolate fudge frosting—a dessert lover's ultimate dream.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800",
    cuisine: "Global",
    category: "Desserts",
    region: "Global",
    rating: 4.9,
    reviews: 1650,
    prepTime: 20,
    cookTime: 35,
    difficulty: "Medium",
    servings: 8,
    vegetarian: true,
    ingredients: [
      { name: "All-Purpose Flour", quantity: "2 cups" },
      { name: "Cocoa Powder", quantity: "3/4 cup" },
      { name: "Granulated Sugar", quantity: "2 cups" },
      { name: "Baking Powder", quantity: "2 tsp" },
      { name: "Baking Soda", quantity: "1.5 tsp" },
      { name: "Buttermilk", quantity: "1 cup" },
      { name: "Warm Coffee or Water", quantity: "1 cup" },
      { name: "Vegetable Oil", quantity: "1/2 cup" },
      { name: "Vanilla Extract", quantity: "2 tsp" },
      { name: "Salt", quantity: "1 tsp" }
    ],
    instructions: [
      { step: 1, title: "Prepare Oven & Pans", description: "Preheat oven to 175°C (350°F). Grease two 9-inch round cake pans and dust with cocoa powder." },
      { step: 2, title: "Mix Dry Ingredients", description: "Whisk flour, sugar, cocoa, baking powder, baking soda, and salt in a large bowl." },
      { step: 3, title: "Combine Wet Ingredients", description: "Add buttermilk, oil, vanilla extract, and warm coffee/water. Beat on medium speed for 2 minutes." },
      { step: 4, title: "Bake Cake Layers", description: "Pour batter evenly into the prepared pans. Bake for 30-35 minutes until a toothpick inserted in the center comes out clean." },
      { step: 5, title: "Cool Completely", description: "Remove cake layers from oven and let them cool inside the pans for 10 minutes, then invert onto wire racks to cool fully." },
      { step: 6, title: "Frost and Slice", description: "Frost with chocolate fudge frosting between the layers and all over the outside. Slice and serve." }
    ],
    tips: [
      "Adding hot coffee doesn't make the cake taste like coffee; it intensifies the chocolate flavor.",
      "Make sure the cake is completely cool before frosting, otherwise the icing will melt off."
    ],
    nutrition: {
      calories: 480,
      protein: "6g",
      carbohydrates: "64g",
      fat: "24g"
    }
  },
  {
    id: "vegetable-quesadillas-tacos",
    name: "Mexican Veg Tacos",
    description: "Crispy corn tortillas packed with seasoned black beans, sweet corn, salsa, guacamole, and a sprinkle of cotija cheese.",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=800",
    cuisine: "Mexican",
    category: "Mexican",
    region: "Oaxaca",
    rating: 4.5,
    reviews: 620,
    prepTime: 15,
    cookTime: 10,
    difficulty: "Easy",
    servings: 4,
    vegetarian: true,
    ingredients: [
      { name: "Corn Tortillas", quantity: "8 small" },
      { name: "Black Beans (cooked and seasoned)", quantity: "1.5 cups" },
      { name: "Sweet Corn Kernels", quantity: "1 cup" },
      { name: "Guacamole", quantity: "1/2 cup" },
      { name: "Pico de Gallo (Tomato Salsa)", quantity: "1/2 cup" },
      { name: "Cilantro & Lime", quantity: "For serving" },
      { name: "Cotija or Feta Cheese", quantity: "1/2 cup" }
    ],
    instructions: [
      { step: 1, title: "Prepare Taco Filling", description: "Mix warm black beans and roasted sweet corn kernels with cumin, chili powder, and lime juice." },
      { step: 2, title: "Char the Corn", description: "Heat a skillet and sauté the sweet corn kernels until slightly charred and smoky." },
      { step: 3, title: "Warm Tortillas", description: "Heat each corn tortilla on a hot pan for 30 seconds on each side until pliable." },
      { step: 4, title: "Assemble Tacos", description: "Spoon the bean and corn mixture into the center of each tortilla, then add guacamole and pico de gallo." },
      { step: 5, title: "Garnish and Serve", description: "Crumble cotija cheese on top, garnish with fresh chopped cilantro, and serve with fresh lime wedges." }
    ],
    tips: [
      "To keep tortillas warm, stack them and wrap them in a clean kitchen towel while assembling.",
      "Char the sweet corn on a pan for a smoky, street-style flavor."
    ],
    nutrition: {
      calories: 260,
      protein: "8g",
      carbohydrates: "38g",
      fat: "9g"
    }
  },
  {
    id: "butter-chicken",
    name: "Mughlai Butter Chicken",
    description: "Tender, grilled chicken pieces simmered in a rich, buttery, spiced tomato gravy with heavy cream and aromatic spices.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800",
    cuisine: "Indian",
    category: "Indian",
    region: "Delhi",
    rating: 4.9,
    reviews: 2110,
    prepTime: 20,
    cookTime: 25,
    difficulty: "Medium",
    servings: 4,
    vegetarian: false,
    ingredients: [
      { name: "Chicken Thighs (boneless, cubed)", quantity: "500g" },
      { name: "Yogurt (for marinade)", quantity: "1/2 cup" },
      { name: "Butter", quantity: "3 tbsp" },
      { name: "Tomato Puree", quantity: "1.5 cups" },
      { name: "Heavy Cream", quantity: "1/2 cup" },
      { name: "Ginger-Garlic Paste", quantity: "2 tbsp" },
      { name: "Kashmiri Chili Powder", quantity: "2 tsp" },
      { name: "Kasuri Methi", quantity: "1 tbsp" }
    ],
    instructions: [
      { step: 1, title: "Marinate Chicken", description: "Marinate chicken thighs with yogurt, ginger-garlic paste, chili powder, and salt. Keep in fridge for 20 minutes." },
      { step: 2, title: "Grill Chicken", description: "Sauté the marinated chicken pieces in a pan until cooked through and slightly charred on the edges." },
      { step: 3, title: "Prepare Gravy Base", description: "Melt butter in another pan. Add tomato puree, ginger-garlic paste, and remaining spices. Simmer for 10 minutes." },
      { step: 4, title: "Combine Gravy and Chicken", description: "Add the grilled chicken pieces to the simmering tomato gravy and simmer on medium-low for 8 minutes." },
      { step: 5, title: "Add Cream & Herb", description: "Stir in heavy cream and crushed Kasuri Methi. Let it simmer gently for 2 more minutes." },
      { step: 6, title: "Serve Hot", description: "Garnish with a swirl of cream and fresh cilantro leaves. Serve hot with garlic naan or basmati rice." }
    ],
    tips: [
      "Using chicken thighs ensures the meat remains juicy and tender after grilling.",
      "Garnish with a drizzle of honey if your tomatoes are slightly too sour."
    ],
    nutrition: {
      calories: 460,
      protein: "32g",
      carbohydrates: "8g",
      fat: "34g"
    }
  },
  {
    id: "szechuan-noodles",
    name: "Spicy Szechuan Noodles",
    description: "Fiery wok-tossed Hakka noodles tossed with crisp vegetables in a bold, savory, homemade Szechuan chili sauce.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800",
    cuisine: "Chinese",
    category: "Chinese",
    region: "Szechuan",
    rating: 4.6,
    reviews: 840,
    prepTime: 10,
    cookTime: 12,
    difficulty: "Easy",
    servings: 2,
    vegetarian: true,
    ingredients: [
      { name: "Hakka Noodles", quantity: "200g" },
      { name: "Szechuan Sauce", quantity: "3 tbsp" },
      { name: "Bell Peppers (sliced)", quantity: "1 cup" },
      { name: "Cabbage & Carrots (julienned)", quantity: "1 cup" },
      { name: "Soy Sauce", quantity: "1 tbsp" },
      { name: "Spring Onion Greens", quantity: "1/4 cup" },
      { name: "Sesame Oil", quantity: "1.5 tbsp" }
    ],
    instructions: [
      { step: 1, title: "Boil Noodles", description: "Boil noodles according to package instructions until barely tender. Drain, rinse with cold water, and toss with a few drops of oil." },
      { step: 2, title: "Stir-fry Veggies", description: "Heat sesame oil in a hot wok. Sauté sliced bell peppers, cabbage, and carrots on high heat for 2 minutes." },
      { step: 3, title: "Add Sauces", description: "Add the Szechuan sauce, soy sauce, and a pinch of sugar. Toss veggies to combine." },
      { step: 4, title: "Toss Noodles", description: "Add the cooked noodles to the wok. Toss vigorously on high heat for 2 minutes." },
      { step: 5, title: "Finish & Garnish", description: "Garnish with chopped spring onion greens and serve piping hot." }
    ],
    tips: [
      "Stir-frying must be done on high heat so the vegetables stay crisp and don't become soggy.",
      "Rinsing cooked noodles under cold water prevents them from overcooking due to residual heat."
    ],
    nutrition: {
      calories: 340,
      protein: "8g",
      carbohydrates: "58g",
      fat: "9g"
    }
  },
  {
    id: "vegetable-fried-rice",
    name: "Classic Veg Fried Rice",
    description: "Quick, flavor-packed, wok-tossed Jasmine rice with scrambled eggs (optional), spring onions, carrots, and peas.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800",
    cuisine: "Chinese",
    category: "Chinese",
    region: "Guangdong",
    rating: 4.5,
    reviews: 690,
    prepTime: 10,
    cookTime: 10,
    difficulty: "Easy",
    servings: 2,
    vegetarian: true,
    ingredients: [
      { name: "Cooked Jasmine Rice (Chilled)", quantity: "3 cups" },
      { name: "Mixed Veggies (Carrot, Peas, Corn)", quantity: "1 cup" },
      { name: "Garlic (minced)", quantity: "1 tbsp" },
      { name: "Light Soy Sauce", quantity: "1.5 tbsp" },
      { name: "Sesame Oil", quantity: "1 tbsp" },
      { name: "Green Onion", quantity: "3 stalks" }
    ],
    instructions: [
      { step: 1, title: "Prep the Wok", description: "Heat sesame oil in a large wok over medium-high heat. Add garlic and stir-fry for 30 seconds." },
      { step: 2, title: "Cook Veggies", description: "Add mixed vegetables and cook for 2 minutes until tender but still crisp." },
      { step: 3, title: "Add Cold Rice", description: "Break up clumped cold rice and add to the wok. Drizzle soy sauce and white pepper on top." },
      { step: 4, title: "Toss and Cook", description: "Toss constantly on high heat for 3 minutes to fry the rice grains evenly." },
      { step: 5, title: "Garnish", description: "Mix in the chopped green onions, give it a final toss, and serve hot." }
    ],
    tips: [
      "Always use chilled, day-old leftover rice. Freshly cooked rice is too wet and will stick together.",
      "A splash of Chinese cooking wine (Shaoxing) elevates the flavor to professional restaurant quality."
    ],
    nutrition: {
      calories: 310,
      protein: "7g",
      carbohydrates: "52g",
      fat: "8g"
    }
  },
  {
    id: "crispy-masala-dosa",
    name: "Crispy Masala Dosa",
    description: "A popular South Indian crepe made from fermented rice-lentil batter, filled with a flavorful, spiced potato mash.",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=800",
    cuisine: "Indian",
    category: "Breakfast",
    region: "South India",
    rating: 4.9,
    reviews: 1390,
    prepTime: 15,
    cookTime: 20,
    difficulty: "Medium",
    servings: 3,
    vegetarian: true,
    ingredients: [
      { name: "Fermented Dosa Batter", quantity: "3 cups" },
      { name: "Potatoes (boiled and mashed)", quantity: "3 medium" },
      { name: "Onion (sliced)", quantity: "1 medium" },
      { name: "Mustard Seeds", quantity: "1 tsp" },
      { name: "Curry Leaves", quantity: "10-12 leaves" },
      { name: "Turmeric Powder", quantity: "1/2 tsp" },
      { name: "Ghee / Oil", quantity: "For frying" }
    ],
    instructions: [
      { step: 1, title: "Prepare Potato Masala", description: "Heat oil in a pan. Sauté mustard seeds, curry leaves, onions, and green chilies. Add turmeric, salt, and mashed potatoes. Mix well." },
      { step: 2, title: "Prep the Tawa", description: "Heat a flat cast-iron or non-stick tawa. Sprinkle a few drops of water to cool it down, then wipe with a paper towel." },
      { step: 3, title: "Spread Dosa Batter", description: "Pour a ladleful of fermented batter in the center. Spread in a circular motion outwards to make a thin crepe." },
      { step: 4, title: "Fry with Ghee", description: "Drizzle ghee around the edges of the dosa crepe. Cook on medium-low heat until the bottom is golden-brown." },
      { step: 5, title: "Assemble Potato Masala", description: "Place potato masala in the center of the crepe, fold it into a roll, and serve hot." },
      { step: 6, title: "Serve Chutney", description: "Serve immediately with fresh coconut chutney and hot sambhar." }
    ],
    tips: [
      "Wiping the tawa with an onion halved and dipped in oil before pouring batter ensures the dosa doesn't stick.",
      "Cook on medium-low heat to ensure the dosa turns beautifully crispy rather than soft."
    ],
    nutrition: {
      calories: 280,
      protein: "6g",
      carbohydrates: "48g",
      fat: "8g"
    }
  },
  {
    id: "classic-chole-bhature",
    name: "Amritsari Chole Bhature",
    description: "Spicy, dark, tangy chickpea curry served alongside puffed, deep-fried leavened bread—a Punjabi delicacy.",
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=800",
    cuisine: "Indian",
    category: "Indian",
    region: "Punjab",
    rating: 4.8,
    reviews: 1540,
    prepTime: 25,
    cookTime: 35,
    difficulty: "Hard",
    servings: 4,
    vegetarian: true,
    ingredients: [
      { name: "Kabuli Chana (Chickpeas, soaked)", quantity: "1.5 cups" },
      { name: "Baking Soda", quantity: "1/2 tsp" },
      { name: "Tea Bags (for dark color)", quantity: "2" },
      { name: "Onions (pureed)", quantity: "2 medium" },
      { name: "Tomato Puree", quantity: "1 cup" },
      { name: "Chole Masala Powder", quantity: "2 tbsp" },
      { name: "All-Purpose Flour (Maida, for Bhature)", quantity: "2 cups" },
      { name: "Yogurt (for Bhature)", quantity: "1/4 cup" }
    ],
    instructions: [
      { step: 1, title: "Boil Chickpeas", description: "Pressure cook soaked chickpeas with tea bags, baking soda, salt, and water until soft." },
      { step: 2, title: "Make Bhature Dough", description: "Mix flour, yogurt, baking soda, salt, and warm water. Knead into a soft dough and let it rest for 2 hours." },
      { step: 3, title: "Prepare Gravy Base", description: "Sauté onions, ginger, garlic, and tomato puree. Add chole masala, cumin, coriander powder." },
      { step: 4, title: "Simmer Chickpeas", description: "Toss in boiled chickpeas (discard tea bags) and simmer in the gravy for 20 minutes." },
      { step: 5, title: "Roll Bhature", description: "Roll dough balls into oval crepes of medium thickness." },
      { step: 6, title: "Fry Bhature", description: "Deep fry in extremely hot oil until they puff up fully and turn golden. Serve immediately with chole." }
    ],
    tips: [
      "Resting the bhatura dough for at least 2 hours is critical for gluten development and perfect puffing.",
      "A pinch of amchur (dry mango powder) adds the authentic sour tang to the chole."
    ],
    nutrition: {
      calories: 620,
      protein: "16g",
      carbohydrates: "80g",
      fat: "26g"
    }
  },
  {
    id: "soft-gulab-jamun",
    name: "Melt-in-Mouth Gulab Jamun",
    description: "Classic Indian dessert made of fried milk solids (khoya) dumplings, soaked in cardamom and rose water infused sugar syrup.",
    image: "https://images.unsplash.com/photo-1605662058473-b3c95e1eb282?auto=format&fit=crop&q=80&w=800",
    cuisine: "Indian",
    category: "Desserts",
    region: "North India",
    rating: 4.9,
    reviews: 1210,
    prepTime: 20,
    cookTime: 20,
    difficulty: "Medium",
    servings: 6,
    vegetarian: true,
    ingredients: [
      { name: "Khoya / Mawa (grated)", quantity: "1 cup" },
      { name: "All-Purpose Flour (Maida)", quantity: "3 tbsp" },
      { name: "Baking Powder", quantity: "A pinch" },
      { name: "Sugar", quantity: "2 cups" },
      { name: "Water", quantity: "2 cups" },
      { name: "Cardamom Pods", quantity: "4" },
      { name: "Ghee / Oil", quantity: "For deep frying" }
    ],
    instructions: [
      { step: 1, title: "Prepare Sugar Syrup", description: "Boil sugar, water, and cardamom pods for 5 minutes. Stir in rose water. Keep warm." },
      { step: 2, title: "Make Jamun Dough", description: "Gently mix grated khoya, flour, and baking powder. Form a soft dough without kneading hard." },
      { step: 3, title: "Roll Dumplings", description: "Roll into small crack-free balls using your palms." },
      { step: 4, title: "Fry Dumplings", description: "Fry in ghee over very low heat, turning constantly, until deep golden brown." },
      { step: 5, title: "Soak in Syrup", description: "Transfer warm fried balls directly into the warm sugar syrup." },
      { step: 6, title: "Let it Expand", description: "Let them soak for at least 2 hours to expand and soften before serving." }
    ],
    tips: [
      "Fry the jamuns on low heat; high heat will cook the outside too fast leaving the inside raw and doughy.",
      "The balls must be completely crack-free when rolling, or they will break during frying."
    ],
    nutrition: {
      calories: 320,
      protein: "5g",
      carbohydrates: "58g",
      fat: "9g"
    }
  },
  {
    id: "steamed-idli-sambhar",
    name: "Soft Steamed Idli & Sambhar",
    description: "Fluffy, pillow-soft steamed savory cakes made of fermented rice-lentil batter, served with spicy lentil-vegetable stew (sambhar).",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=800",
    cuisine: "Indian",
    category: "Breakfast",
    region: "South India",
    rating: 4.7,
    reviews: 930,
    prepTime: 15,
    cookTime: 25,
    difficulty: "Medium",
    servings: 4,
    vegetarian: true,
    ingredients: [
      { name: "Fermented Idli Batter", quantity: "4 cups" },
      { name: "Toor Dal (Pigeon Peas)", quantity: "1 cup" },
      { name: "Mixed Veggies (Drumstick, Pumpkin, Okra)", quantity: "2 cups" },
      { name: "Sambhar Powder", quantity: "2 tbsp" },
      { name: "Tamarind Paste", quantity: "1 tbsp" },
      { name: "Mustard Seeds & Curry Leaves", quantity: "For tempering" }
    ],
    instructions: [
      { step: 1, title: "Steam Idlis", description: "Grease idli molds, pour batter. Steam on medium-high heat for 10-12 minutes." },
      { step: 2, title: "Cook Dal", description: "Pressure cook dal until fully mashed and creamy." },
      { step: 3, title: "Cook Vegetables", description: "Cook mixed vegetables in water with turmeric, salt, and tamarind paste until soft." },
      { step: 4, title: "Simmer Sambhar", description: "Combine dal, vegetables, and sambhar powder. Simmer for 10 minutes." },
      { step: 5, title: "Tempering", description: "Heat oil, crackle mustard seeds, red chilies, and curry leaves. Pour over sambhar." },
      { step: 6, title: "Serve Steaming", description: "De-mold idlis carefully and serve warm alongside hot sambhar." }
    ],
    tips: [
      "Do not open the steamer immediately; let the idlis sit for 2 minutes before scooping them out so they release cleanly.",
      "Use aged parboiled rice (Idli rice) for the softest results."
    ],
    nutrition: {
      calories: 220,
      protein: "8g",
      carbohydrates: "44g",
      fat: "2g"
    }
  },
  {
    id: "vegetable-pulao",
    name: "Fragrant Vegetable Pulao",
    description: "A light, mild, aromatic one-pot rice dish loaded with fresh garden vegetables, spices, and whole cardamoms.",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=800",
    cuisine: "Indian",
    category: "Healthy",
    region: "Global",
    rating: 4.6,
    reviews: 820,
    prepTime: 15,
    cookTime: 20,
    difficulty: "Easy",
    servings: 3,
    vegetarian: true,
    ingredients: [
      { name: "Basmati Rice", quantity: "1.5 cups" },
      { name: "Mixed Vegetables (Carrot, Peas, Beans)", quantity: "1.5 cups" },
      { name: "Onion (sliced)", quantity: "1 medium" },
      { name: "Whole Spices (Bay leaf, Cinnamon, Cloves)", quantity: "Assorted" },
      { name: "Ghee / Oil", quantity: "1.5 tbsp" },
      { name: "Green Chili", quantity: "2 split" }
    ],
    instructions: [
      { step: 1, title: "Sauté Spices", description: "Heat ghee in a pot, add whole spices and onion. Sauté until transparent." },
      { step: 2, title: "Toss Vegetables", description: "Add vegetables and green chilies. Sauté for 2 minutes." },
      { step: 3, title: "Add Rice", description: "Add washed and soaked basmati rice. Sauté gently with vegetables for 1 minute." },
      { step: 4, title: "Simmer Pulao", description: "Pour 3 cups of water and add salt. Bring to a boil, then cover with a tight lid." },
      { step: 5, title: "Cook & Serve", description: "Cook on low heat for 12-15 minutes. Fluff with a fork and serve hot." }
    ],
    tips: [
      "Let the cooked pulao rest covered for 5 minutes before fluffing so the grains don't break.",
      "Adding a squeeze of lemon juice while cooking keeps the rice grains white and separate."
    ],
    nutrition: {
      calories: 270,
      protein: "5g",
      carbohydrates: "50g",
      fat: "5g"
    }
  },
  {
    id: "homestyle-vegetable-curry",
    name: "Homestyle Vegetable Curry",
    description: "A nourishing, classic mixed vegetable curry cooked in a lightly spiced onion-tomato gravy, loaded with fiber and nutrients.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800",
    cuisine: "Indian",
    category: "Healthy",
    region: "Global",
    rating: 4.5,
    reviews: 580,
    prepTime: 15,
    cookTime: 20,
    difficulty: "Easy",
    servings: 4,
    vegetarian: true,
    ingredients: [
      { name: "Mixed Vegetables (Cauliflower, Potato, Carrot, Peas)", quantity: "3 cups" },
      { name: "Onion (chopped)", quantity: "1 large" },
      { name: "Tomato (chopped)", quantity: "2 medium" },
      { name: "Cumin Seeds", quantity: "1 tsp" },
      { name: "Turmeric & Coriander Powder", quantity: "1 tsp" },
      { name: "Garlic & Ginger (minced)", quantity: "1 tbsp" }
    ],
    instructions: [
      { step: 1, title: "Sauté Aromatics", description: "Heat oil, crackle cumin seeds. Sauté onions, ginger, and garlic until translucent." },
      { step: 2, title: "Build Gravy", description: "Add tomatoes, turmeric, coriander, chili powder, and cook until tomatoes are soft." },
      { step: 3, title: "Simmer Veggies", description: "Add vegetables and 1 cup of water. Cover and cook on medium-low for 15 minutes." },
      { step: 4, title: "Check Tenderness", description: "Check vegetable tenderness with a fork. Ensure cauliflower stays intact." },
      { step: 5, title: "Garnish", description: "Garnish with fresh coriander leaves, garam masala, and serve warm with rotis." }
    ],
    tips: [
      "Do not cut the vegetables too small or they will turn mushy while boiling.",
      "Add a teaspoon of garam masala at the very end to lock in the aroma."
    ],
    nutrition: {
      calories: 180,
      protein: "4g",
      carbohydrates: "22g",
      fat: "6g"
    }
  },
  {
    id: "mushroom-risotto",
    name: "Creamy Wild Mushroom Risotto",
    description: "An elegant Italian classic featuring Arborio rice slowly simmered in rich vegetable broth, flavored with sautéed wild mushrooms, white wine, garlic, and fresh Parmesan cheese.",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800",
    cuisine: "Italian",
    category: "Italian",
    region: "Piedmont",
    rating: 4.8,
    reviews: 310,
    prepTime: 10,
    cookTime: 30,
    difficulty: "Medium",
    servings: 4,
    vegetarian: true,
    ingredients: [
      { name: "Arborio Rice", quantity: "1.5 cups" },
      { name: "Mixed Wild Mushrooms (sliced)", quantity: "300g" },
      { name: "Vegetable Broth (warm)", quantity: "4 cups" },
      { name: "Dry White Wine", quantity: "1/2 cup" },
      { name: "Parmesan Cheese (grated)", quantity: "1/2 cup" },
      { name: "Shallot (finely chopped)", quantity: "1 large" },
      { name: "Butter", quantity: "2 tbsp" },
      { name: "Olive Oil", quantity: "1 tbsp" },
      { name: "Garlic (minced)", quantity: "2 cloves" },
      { name: "Fresh Parsley (chopped)", quantity: "2 tbsp" }
    ],
    instructions: [
      { step: 1, title: "Sauté Mushrooms", description: "Heat olive oil and 1 tbsp butter in a large pan. Add mushrooms and garlic, sautéing until golden brown. Set half aside for garnish." },
      { step: 2, title: "Toast Rice", description: "In the same pan, add remaining butter and shallots. Cook until soft. Add Arborio rice, stirring for 2 minutes to coat and toast the grains." },
      { step: 3, title: "Deglaze with Wine", description: "Pour in the white wine, stirring constantly until it is fully absorbed by the rice." },
      { step: 4, title: "Add Broth Gradually", description: "Add warm vegetable broth one ladleful at a time. Stir constantly, allowing the rice to absorb the broth before adding more, until rice is creamy and al dente (about 20 minutes)." },
      { step: 5, title: "Finish Risotto", description: "Remove from heat. Stir in the sautéed mushrooms, grated Parmesan, and chopped parsley. Season with salt and pepper to taste." }
    ],
    tips: [
      "Ensure the vegetable broth is kept warm on a low simmer. Adding cold broth will shock the rice and ruin the creamy consistency.",
      "Stir constantly to release the starches from the Arborio rice, which naturally thickens the sauce."
    ],
    nutrition: {
      calories: 380,
      protein: "9g",
      carbohydrates: "58g",
      fat: "11g"
    }
  },
  {
    id: "mapo-tofu",
    name: "Spicy Sichuan Mapo Tofu",
    description: "A legendary Sichuan dish consisting of tender silken tofu set in a spicy, numbing, and deeply savory chili-and-broad-bean paste sauce.",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&q=80&w=800",
    cuisine: "Chinese",
    category: "Chinese",
    region: "Sichuan",
    rating: 4.8,
    reviews: 520,
    prepTime: 15,
    cookTime: 15,
    difficulty: "Medium",
    servings: 3,
    vegetarian: true,
    ingredients: [
      { name: "Silken Tofu (cubed)", quantity: "400g" },
      { name: "Sichuan Doubanjiang (Spicy Broad Bean Paste)", quantity: "2 tbsp" },
      { name: "Sichuan Peppercorn Powder", quantity: "1 tsp" },
      { name: "Garlic (minced)", quantity: "3 cloves" },
      { name: "Ginger (minced)", quantity: "1 tbsp" }
    ],
    instructions: [
      { step: 1, title: "Prep the Tofu", description: "Gently cut tofu into 1-inch cubes. Soak in warm, lightly salted water for 5 minutes, then drain carefully to prevent breaking." },
      { step: 2, title: "Fry Aromatics", description: "Heat oil in a wok on medium heat. Sauté minced garlic, ginger, and Doubanjiang until the oil turns a bright red color." },
      { step: 3, title: "Simmer Sauce", description: "Pour in 1 cup of vegetable broth, add a splash of soy sauce and a pinch of sugar. Bring to a gentle boil." },
      { step: 4, title: "Add Tofu", description: "Slide in the silken tofu cubes gently. Simmer for 5 minutes, gently swirling the wok instead of stirring to keep the tofu intact." },
      { step: 5, title: "Thicken and Garnish", description: "Drizzle in a cornstarch slurry to thicken the sauce. Sprinkle Sichuan peppercorn powder and fresh chopped spring onions before serving." }
    ],
    tips: [
      "Soaking the silken tofu in warm salted water beforehand helps tighten the protein structure so it does not crumble in the wok.",
      "Swirl the wok or use the back of a ladle very gently when mixing to avoid breaking the delicate tofu."
    ],
    nutrition: {
      calories: 190,
      protein: "12g",
      carbohydrates: "10g",
      fat: "12g"
    }
  },
  {
    id: "classic-tiramisu",
    name: "Classic Italian Tiramisu",
    description: "An elegant, no-bake Italian dessert made of espresso-dipped ladyfingers layered with a whipped mixture of egg yolks, sugar, and creamy mascarpone cheese, dusted with cocoa powder.",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800",
    cuisine: "Italian",
    category: "Desserts",
    region: "Veneto",
    rating: 4.9,
    reviews: 890,
    prepTime: 25,
    cookTime: 0,
    difficulty: "Medium",
    servings: 6,
    vegetarian: true,
    ingredients: [
      { name: "Ladyfinger Biscuits (Savoiardi)", quantity: "24 pieces" },
      { name: "Mascarpone Cheese", quantity: "250g" },
      { name: "Strong Espresso (cooled)", quantity: "1 cup" },
      { name: "Egg Yolks", quantity: "3 large" },
      { name: "Sugar", quantity: "1/2 cup" },
      { name: "Heavy Cream", quantity: "3/4 cup" },
      { name: "Unsweetened Cocoa Powder", quantity: "2 tbsp" }
    ],
    instructions: [
      { step: 1, title: "Whip Egg Mixture", description: "Beat egg yolks and sugar in a bowl over a double boiler for 5 minutes until pale and creamy. Remove from heat and let cool." },
      { step: 2, title: "Fold Mascarpone", description: "Gently fold the mascarpone cheese into the cooled egg yolk mixture until smooth and free of lumps." },
      { step: 3, title: "Whip Heavy Cream", description: "In a separate bowl, whip heavy cream to stiff peaks. Fold it gently into the mascarpone cream mixture." },
      { step: 4, title: "Dip Ladyfingers", description: "Quickly dip ladyfingers into the cooled espresso (do not soak or they will get soggy) and line the bottom of an 8x8 inch dish." },
      { step: 5, title: "Layer Cream", description: "Spread half of the mascarpone cream evenly over the ladyfingers. Repeat with another layer of dipped ladyfingers and cream." },
      { step: 6, title: "Chill & Dust", description: "Cover and refrigerate for at least 4 hours (ideally overnight). Dust generously with cocoa powder just before slicing and serving." }
    ],
    tips: [
      "Dip the ladyfingers very quickly (1-2 seconds per side). If you let them sit in the espresso, they will absorb too much liquid and turn mushy.",
      "For best results, let the tiramisu set overnight in the fridge to allow the flavors to meld and the cream to firm up."
    ],
    nutrition: {
      calories: 420,
      protein: "7g",
      carbohydrates: "38g",
      fat: "26g"
    }
  },
  {
    id: "quinoa-salad-bowl",
    name: "Mediterranean Quinoa Salad Bowl",
    description: "A colorful, crisp, and refreshing salad packed with fluffy quinoa, juicy cherry tomatoes, cucumbers, Kalamata olives, and crumbly feta cheese, tossed in a zesty lemon-herb dressing.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800",
    cuisine: "Mediterranean",
    category: "Healthy",
    region: "Greece",
    rating: 4.7,
    reviews: 420,
    prepTime: 15,
    cookTime: 15,
    difficulty: "Easy",
    servings: 2,
    vegetarian: true,
    ingredients: [
      { name: "Quinoa (uncooked)", quantity: "1/2 cup" },
      { name: "Cherry Tomatoes (halved)", quantity: "1 cup" },
      { name: "English Cucumber (diced)", quantity: "1 medium" },
      { name: "Kalamata Olives (pitted)", quantity: "1/2 cup" },
      { name: "Feta Cheese (crumbled)", quantity: "1/2 cup" },
      { name: "Red Onion (finely diced)", quantity: "1/4 cup" },
      { name: "Lemon Juice & Olive Oil", quantity: "2 tbsp each" },
      { name: "Dried Oregano & Parsley", quantity: "1 tsp" }
    ],
    instructions: [
      { step: 1, title: "Cook Quinoa", description: "Rinse quinoa. Boil with 1 cup of water and a pinch of salt. Cover and simmer on low for 15 minutes, then fluff and let cool." },
      { step: 2, title: "Prep Vegetables", description: "Chop the cherry tomatoes, cucumber, Kalamata olives, and red onion. Place them in a large mixing bowl." },
      { step: 3, title: "Whisk Dressing", description: "In a small jar, whisk together olive oil, fresh lemon juice, dried oregano, salt, and black pepper until well emulsified." },
      { step: 4, title: "Combine Salad", description: "Add the cooled quinoa and dressing to the bowl of chopped vegetables. Toss thoroughly to combine." },
      { step: 5, title: "Add Feta & Serve", description: "Gently fold in crumbled feta cheese and chopped fresh parsley. Serve chilled or at room temperature." }
    ],
    tips: [
      "Rinse the quinoa thoroughly under cold running water before cooking to remove its natural bitter coating (saponin).",
      "Let the quinoa cool completely before adding it to the fresh vegetables to keep them crisp and crunchy."
    ],
    nutrition: {
      calories: 310,
      protein: "8g",
      carbohydrates: "34g",
      fat: "16g"
    }
  },
  {
    id: "loaded-nachos",
    name: "Loaded Vegetarian Nachos",
    description: "Crispy tortilla chips piled high with warm seasoned black beans, melted cheddar cheese, fresh pico de gallo, pickled jalapeños, and a cool dollop of sour cream.",
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&q=80&w=800",
    cuisine: "Mexican",
    category: "Mexican",
    region: "Piedras Negras",
    rating: 4.7,
    reviews: 480,
    prepTime: 10,
    cookTime: 15,
    difficulty: "Easy",
    servings: 4,
    vegetarian: true,
    ingredients: [
      { name: "Tortilla Chips", quantity: "1 large bag" },
      { name: "Black Beans (rinsed and drained)", quantity: "1 can" },
      { name: "Shredded Cheddar Cheese", quantity: "2 cups" },
      { name: "Pico de Gallo (salsa)", quantity: "1/2 cup" },
      { name: "Pickled Jalapeño slices", quantity: "1/4 cup" },
      { name: "Guacamole", quantity: "1/2 cup" },
      { name: "Sour Cream", quantity: "1/4 cup" }
    ],
    instructions: [
      { step: 1, title: "Preheat Oven", description: "Preheat your oven to 200°C (400°F) and line a large baking sheet with parchment paper." },
      { step: 2, title: "Layer Chips and Cheese", description: "Spread half of the tortilla chips in an even layer. Sprinkle with half of the black beans and half of the shredded cheese. Repeat with remaining chips, beans, and cheese." },
      { step: 3, title: "Bake Nachos", description: "Bake in the preheated oven for 8-10 minutes until the cheese is completely melted and bubbly." },
      { step: 4, title: "Add Fresh Toppings", description: "Remove from oven. Top immediately with pico de gallo, pickled jalapeño slices, scoops of guacamole, and sour cream. Serve hot." }
    ],
    tips: [
      "Layering the cheese and toppings in two steps ensures every single chip gets covered and doesn't end up dry.",
      "Serve immediately to keep the tortilla chips crisp."
    ],
    nutrition: {
      calories: 340,
      protein: "10g",
      carbohydrates: "42g",
      fat: "16g"
    }
  },
  {
    id: "sizzling-fajitas",
    name: "Sizzling Vegetarian Fajitas",
    description: "Colorful bell peppers, sweet onions, and seasoned portobello mushrooms sautéed in a savory spice blend, served sizzling hot with warm flour tortillas.",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800",
    cuisine: "Mexican",
    category: "Mexican",
    region: "Northern Mexico",
    rating: 4.8,
    reviews: 390,
    prepTime: 15,
    cookTime: 15,
    difficulty: "Medium",
    servings: 3,
    vegetarian: true,
    ingredients: [
      { name: "Bell Peppers (mixed colors, sliced)", quantity: "3 medium" },
      { name: "Portobello Mushrooms (sliced)", quantity: "2 large" },
      { name: "Onion (sliced)", quantity: "1 large" },
      { name: "Flour Tortillas", quantity: "6 warm" },
      { name: "Fajita Seasoning (Chili, Cumin, Garlic)", quantity: "2 tbsp" },
      { name: "Olive Oil", quantity: "2 tbsp" },
      { name: "Lime Juice", quantity: "1 tbsp" }
    ],
    instructions: [
      { step: 1, title: "Sauté Veggies", description: "Heat olive oil in a large cast-iron skillet over high heat. Add the sliced onions and bell peppers, cooking until they start to char slightly." },
      { step: 2, title: "Add Mushrooms", description: "Add the sliced portobello mushrooms and fajita seasoning. Stir well to coat all veggies in the spice mix." },
      { step: 3, title: "Finish Sizzle", description: "Cook for another 5-6 minutes until the mushrooms are tender. Squeeze fresh lime juice over the skillet right before serving." },
      { step: 4, title: "Assemble Fajitas", description: "Serve sizzling veggies directly in the skillet alongside warm flour tortillas, salsa, and guacamole." }
    ],
    tips: [
      "Using a hot cast-iron skillet is the secret to getting that signature restaurant-style char and sizzle.",
      "Wrap flour tortillas in foil and warm them in the oven for 5 minutes before serving."
    ],
    nutrition: {
      calories: 280,
      protein: "6g",
      carbohydrates: "38g",
      fat: "12g"
    }
  },
  {
    id: "kadai-paneer",
    name: "Spicy Kadai Paneer",
    description: "Paneer cubes tossed with colorful bell peppers and onions in a freshly ground spicy kadai masala and rich tomato-onion gravy.",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=800",
    cuisine: "Indian",
    category: "Indian",
    region: "North India",
    rating: 4.8,
    reviews: 720,
    prepTime: 15,
    cookTime: 20,
    difficulty: "Medium",
    servings: 3,
    vegetarian: true,
    ingredients: [
      { name: "Paneer (cubed)", quantity: "250g" },
      { name: "Bell Peppers (diced)", quantity: "1 cup" },
      { name: "Onion (diced)", quantity: "1 cup" },
      { name: "Tomato Puree", quantity: "1.5 cups" },
      { name: "Ginger-Garlic Paste", quantity: "1 tbsp" },
      { name: "Kadai Masala Spices", quantity: "1.5 tbsp" },
      { name: "Kashmiri Red Chili Powder", quantity: "1 tsp" },
      { name: "Kasoori Methi", quantity: "1 tsp" }
    ],
    instructions: [
      { step: 1, title: "Sauté Veggies & Paneer", description: "Heat 1 tsp oil in a pan. Sauté cubed onions and bell peppers for 2 minutes. Add paneer cubes and sauté for 1 minute. Set aside." },
      { step: 2, title: "Cook Gravy Base", description: "In the same pan, heat remaining oil. Add ginger-garlic paste and sauté. Pour in tomato puree and cook until oil separates." },
      { step: 3, title: "Simmer Spices", description: "Add kadai masala, chili powder, and salt. Cook for 2 minutes. Pour in 1/2 cup of water and bring to a simmer." },
      { step: 4, title: "Combine and Finish", description: "Toss in the sautéed paneer, peppers, and onions. Stir in crushed kasoori methi. Simmer for 3 minutes and serve hot." }
    ],
    tips: [
      "Roast coriander seeds, cumin, and dry red chilies and grind them fresh to make the perfect Kadai Masala.",
      "Do not overcook the peppers and onions; they should remain crunchy."
    ],
    nutrition: {
      calories: 320,
      protein: "13g",
      carbohydrates: "14g",
      fat: "25g"
    }
  },
  {
    id: "paneer-tikka-masala",
    name: "Smoky Paneer Tikka Masala",
    description: "Marinated grilled paneer cubes simmered in a creamy, smoky tomato-onion gravy with aromatic Indian spices.",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800",
    cuisine: "Indian",
    category: "Indian",
    region: "Punjab",
    rating: 4.9,
    reviews: 890,
    prepTime: 20,
    cookTime: 25,
    difficulty: "Medium",
    servings: 3,
    vegetarian: true,
    ingredients: [
      { name: "Paneer (cubed)", quantity: "250g" },
      { name: "Thick Yogurt (for marinade)", quantity: "1/4 cup" },
      { name: "Ginger-Garlic Paste", quantity: "1 tbsp" },
      { name: "Kashmiri Chili Powder", quantity: "2 tsp" },
      { name: "Garam Masala", quantity: "1 tsp" },
      { name: "Butter", quantity: "2 tbsp" },
      { name: "Heavy Cream", quantity: "2 tbsp" },
      { name: "Onion & Tomato Puree", quantity: "1.5 cups" }
    ],
    instructions: [
      { step: 1, title: "Marinate Paneer", description: "Mix yogurt, ginger-garlic paste, half the spices, and salt. Coat paneer cubes and let marinate for 20 minutes." },
      { step: 2, title: "Grill Paneer", description: "Grill the marinated paneer cubes on a pan or oven until slightly charred on all sides. Set aside." },
      { step: 3, title: "Prepare Tikka Gravy", description: "Melt butter in a pan. Sauté onion and tomato puree. Add remaining spices and simmer until rich and fragrant." },
      { step: 4, title: "Simmer & Garnish", description: "Add the grilled paneer tikka to the gravy. Stir in heavy cream and fresh coriander. Simmer for 2 minutes and serve." }
    ],
    tips: [
      "Using mustard oil in the marinade adds an authentic, smoky street-style flavor to the paneer tikka.",
      "Garnish with a drizzle of cream and fresh coriander leaves for restaurant-style looks."
    ],
    nutrition: {
      calories: 390,
      protein: "14g",
      carbohydrates: "12g",
      fat: "31g"
    }
  },
  {
    id: "chicken-dum-biryani",
    name: "Classic Chicken Dum Biryani",
    description: "Fragrant long-grain basmati rice layered with juicy, marinated chicken, saffron, ghee, and caramelized onions, cooked slow dum-style.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=800",
    cuisine: "Indian",
    category: "Indian",
    region: "Hyderabad",
    rating: 4.9,
    reviews: 1650,
    prepTime: 25,
    cookTime: 40,
    difficulty: "Hard",
    servings: 4,
    vegetarian: false,
    ingredients: [
      { name: "Chicken (bone-in pieces)", quantity: "500g" },
      { name: "Basmati Rice", quantity: "2 cups" },
      { name: "Fried Onions (Birista)", quantity: "1 cup" },
      { name: "Thick Yogurt", quantity: "1/2 cup" },
      { name: "Ghee", quantity: "4 tbsp" },
      { name: "Saffron strands (soaked in milk)", quantity: "10-12" },
      { name: "Ginger-Garlic Paste", quantity: "1.5 tbsp" },
      { name: "Mint & Coriander leaves", quantity: "1/2 cup" }
    ],
    instructions: [
      { step: 1, title: "Marinate Chicken", description: "Marinate chicken in yogurt, ginger-garlic paste, half fried onions, chili powder, turmeric, garam masala, and salt. Refrigerate for 1 hour." },
      { step: 2, title: "Cook Rice", description: "Boil soaked basmati rice in heavily salted water with cloves and cardamom until 70% cooked. Drain." },
      { step: 3, title: "Layer Biryani", description: "In a heavy-bottomed pot, place marinated chicken at the bottom, cover with cooked rice, then sprinkle fried onions, ghee, mint, and saffron milk." },
      { step: 4, title: "Dum Cook", description: "Seal the pot tightly with dough or foil. Cook on low heat for 35-40 minutes until chicken is tender and rice is fluffy." }
    ],
    tips: [
      "Marinating the chicken overnight makes it incredibly tender and flavorful.",
      "Always use good quality long-grain Basmati rice for biryani."
    ],
    nutrition: {
      calories: 520,
      protein: "28g",
      carbohydrates: "60g",
      fat: "18g"
    }
  },
  {
    id: "paneer-dum-biryani",
    name: "Rich Paneer Dum Biryani",
    description: "A royal vegetarian delicacy featuring layered basmati rice and marinated paneer cubes, cooked under dum with caramelized onions, saffron, and mint.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
    cuisine: "Indian",
    category: "Indian",
    region: "Lucknow",
    rating: 4.8,
    reviews: 790,
    prepTime: 20,
    cookTime: 35,
    difficulty: "Hard",
    servings: 4,
    vegetarian: true,
    ingredients: [
      { name: "Paneer (cubed)", quantity: "300g" },
      { name: "Basmati Rice", quantity: "2 cups" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Fried Onions", quantity: "1 cup" },
      { name: "Mint & Coriander leaves", quantity: "1/2 cup" },
      { name: "Saffron strands (soaked in milk)", quantity: "10-12" },
      { name: "Ghee", quantity: "3 tbsp" }
    ],
    instructions: [
      { step: 1, title: "Prepare Paneer", description: "Marinate paneer cubes in yogurt, ginger-garlic paste, biryani masala, and a pinch of salt for 20 minutes." },
      { step: 2, title: "Boil Rice", description: "Boil rice with whole spices until 70% cooked. Drain completely." },
      { step: 3, title: "Assembly Layers", description: "Layer marinated paneer at the bottom, add drained basmati rice on top, then garnish with mint, fried onions, ghee, and saffron milk." },
      { step: 4, title: "Slow Dum Cook", description: "Cover and seal the pot. Cook on low heat for 25-30 minutes. Let rest for 10 minutes before serving." }
    ],
    tips: [
      "Do not overcook paneer during layering, as slow cooking under dum will make it soft and absorb all flavors.",
      "Garnish with toasted cashews and raisins for a royal touch."
    ],
    nutrition: {
      calories: 440,
      protein: "14g",
      carbohydrates: "62g",
      fat: "16g"
    }
  },
  {
    id: "poori-masala",
    name: "Fluffy Poori & Potato Masala",
    description: "Golden, puffed deep-fried wheat flatbreads (pooris) served with a mildly spiced, aromatic potato curry (masala).",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=800",
    cuisine: "Indian",
    category: "Breakfast",
    region: "South India",
    rating: 4.8,
    reviews: 950,
    prepTime: 15,
    cookTime: 20,
    difficulty: "Medium",
    servings: 4,
    vegetarian: true,
    ingredients: [
      { name: "Wheat Flour (Atta)", quantity: "2 cups" },
      { name: "Potatoes (boiled & mashed)", quantity: "3 large" },
      { name: "Onions (sliced)", quantity: "2 medium" },
      { name: "Ginger (finely chopped)", quantity: "1 tsp" },
      { name: "Green Chilies (slit)", quantity: "2" },
      { name: "Turmeric Powder", quantity: "1/2 tsp" },
      { name: "Oil (for deep frying)", quantity: "As needed" }
    ],
    instructions: [
      { step: 1, title: "Knead Dough", description: "Combine wheat flour, a pinch of salt, and water. Knead into a firm dough. Let it rest covered for 15 minutes." },
      { step: 2, title: "Cook Potato Masala", description: "Heat oil in a pan, temper with mustard seeds and curry leaves. Sauté sliced onions, ginger, and green chilies. Add turmeric, salt, mashed potatoes, and water. Simmer until slightly thick." },
      { step: 3, title: "Roll Pooris", description: "Divide dough into lemon-sized balls. Roll them into small, even rounds using a rolling pin." },
      { step: 4, title: "Deep Fry Pooris", description: "Heat oil in a deep pan. Gently slide rolled poori into hot oil. Press lightly with a slotted spoon until it puffs up. Flip and fry until golden brown. Serve hot with potato masala." }
    ],
    tips: [
      "The dough for pooris should be firm, not soft like chapati dough, so they absorb less oil.",
      "The oil must be very hot before sliding in the poori, otherwise it won't puff up."
    ],
    nutrition: {
      calories: 380,
      protein: "8g",
      carbohydrates: "52g",
      fat: "15g"
    }
  },
  {
    id: "ven-pongal",
    name: "Classic Ven Pongal",
    description: "A comforting, creamy South Indian rice and yellow lentil dish tempered with black pepper, cumin, ginger, cashews, and rich ghee.",
    image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&q=80&w=800",
    cuisine: "Indian",
    category: "Breakfast",
    region: "South India",
    rating: 4.7,
    reviews: 640,
    prepTime: 10,
    cookTime: 20,
    difficulty: "Easy",
    servings: 3,
    vegetarian: true,
    ingredients: [
      { name: "Raw Rice", quantity: "1 cup" },
      { name: "Moong Dal (Yellow Lentils)", quantity: "1/2 cup" },
      { name: "Ghee", quantity: "4 tbsp" },
      { name: "Black Peppercorns (crushed)", quantity: "1 tsp" },
      { name: "Cumin Seeds (Jeera)", quantity: "1 tsp" },
      { name: "Cashews (halved)", quantity: "10" },
      { name: "Ginger (finely chopped)", quantity: "1 tsp" },
      { name: "Curry Leaves", quantity: "1 sprig" }
    ],
    instructions: [
      { step: 1, title: "Roast Moong Dal", description: "Dry roast yellow moong dal in a pressure cooker on low heat until aromatic (about 2 minutes)." },
      { step: 2, title: "Cook Rice and Dal", description: "Add washed rice, salt, and 4.5 cups of water to the roasted dal. Pressure cook for 4-5 whistles until very soft and mushy." },
      { step: 3, title: "Prepare Tempering", description: "Heat ghee in a small pan. Fry cashews until golden, then add cumin seeds, black peppercorns, ginger, and curry leaves. Sauté for 1 minute." },
      { step: 4, title: "Mix and Serve", description: "Pour the hot ghee tempering over the cooked rice-dal mixture. Mix thoroughly and serve hot with sambar and coconut chutney." }
    ],
    tips: [
      "Roasting the moong dal before cooking adds a deep nutty aroma to the finished Pongal.",
      "Mash the rice and dal slightly while hot before mixing the tempering for a creamy texture."
    ],
    nutrition: {
      calories: 340,
      protein: "9g",
      carbohydrates: "48g",
      fat: "12g"
    }
  },
  {
    id: "mysore-bondalu",
    name: "Crispy Mysore Bondalu",
    description: "Crispy on the outside, fluffy on the inside deep-fried fritters made of fermented yogurt and flour batter, served with coconut chutney.",
    image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=800",
    cuisine: "Indian",
    category: "Breakfast",
    region: "South India",
    rating: 4.6,
    reviews: 510,
    prepTime: 15,
    cookTime: 15,
    difficulty: "Medium",
    servings: 3,
    vegetarian: true,
    ingredients: [
      { name: "All Purpose Flour (Maida)", quantity: "2 cups" },
      { name: "Sour Yogurt (Curd)", quantity: "1 cup" },
      { name: "Rice Flour", quantity: "2 tbsp" },
      { name: "Green Chilies (chopped)", quantity: "2" },
      { name: "Ginger (grated)", quantity: "1 tsp" },
      { name: "Cumin Seeds (Jeera)", quantity: "1 tsp" },
      { name: "Baking Soda", quantity: "1/4 tsp" },
      { name: "Oil (for deep frying)", quantity: "As needed" }
    ],
    instructions: [
      { step: 1, title: "Prepare Batter", description: "Whisk sour yogurt, maida, rice flour, baking soda, and salt. Add a little water to form a thick batter. Let it ferment for 2-3 hours." },
      { step: 2, title: "Add Aromatics", description: "Before frying, fold in chopped green chilies, grated ginger, cumin seeds, and fresh curry leaves into the fermented batter." },
      { step: 3, title: "Deep Fry Bondas", description: "Heat oil in a deep pan. Wet your hands, scoop a small portion of batter, and drop round balls of batter into the hot oil." },
      { step: 4, title: "Fry till Golden", description: "Fry on medium heat, stirring constantly, until the bondas are evenly golden-brown and crispy. Drain and serve hot with chutney." }
    ],
    tips: [
      "Using sour yogurt is essential to get that characteristic tangy flavor and perfect fermentation.",
      "Beat the batter well for 5 minutes to incorporate air, making the bondas light and fluffy inside."
    ],
    nutrition: {
      calories: 310,
      protein: "6g",
      carbohydrates: "44g",
      fat: "11g"
    }
  }
];

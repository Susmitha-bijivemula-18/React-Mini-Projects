// Dictionary of real, high-resolution Unsplash images matching specific ingredients.
const INGREDIENT_IMAGES: Record<string, string> = {
  'basmati rice': 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=300',
  'rice': 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=300',
  'tomato': 'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=300',
  'tomatoes': 'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=300',
  'onion': 'https://images.unsplash.com/photo-1508747703725-719ae257c26a?auto=format&fit=crop&q=80&w=300',
  'onions': 'https://images.unsplash.com/photo-1508747703725-719ae257c26a?auto=format&fit=crop&q=80&w=300',
  'butter': 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=300',
  'heavy cream': 'https://images.unsplash.com/photo-1596797882943-191154c3411a?auto=format&fit=crop&q=80&w=300',
  'cream': 'https://images.unsplash.com/photo-1596797882943-191154c3411a?auto=format&fit=crop&q=80&w=300',
  'fresh cream': 'https://images.unsplash.com/photo-1596797882943-191154c3411a?auto=format&fit=crop&q=80&w=300',
  'ginger': 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=300',
  'garlic': 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&q=80&w=300',
  'chili powder': 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=300',
  'chilli powder': 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=300',
  'garam masala': 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=300',
  'kasuri methi': 'https://images.unsplash.com/photo-1588673752187-578d5918ee08?auto=format&fit=crop&q=80&w=300',
  'cashews': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=300',
  'cashew': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=300',
  'coriander leaves': 'https://images.unsplash.com/photo-1614088924376-78d1fb5272a8?auto=format&fit=crop&q=80&w=300',
  'coriander': 'https://images.unsplash.com/photo-1614088924376-78d1fb5272a8?auto=format&fit=crop&q=80&w=300',
  'mint': 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=300',
  'basil': 'https://images.unsplash.com/photo-1588673752187-578d5918ee08?auto=format&fit=crop&q=80&w=300',
  'basil leaves': 'https://images.unsplash.com/photo-1588673752187-578d5918ee08?auto=format&fit=crop&q=80&w=300',
  'paneer': 'https://images.unsplash.com/photo-1605333396915-47ed6b68a00e?auto=format&fit=crop&q=80&w=300',
  'mozzarella': 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&q=80&w=300',
  'olive oil': 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=300',
  'egg': 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&q=80&w=300',
  'eggs': 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&q=80&w=300',
  'flour': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=300',
  'all-purpose flour': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=300',
  'milk': 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=300',
  'sugar': 'https://images.unsplash.com/photo-1581441617925-b157a62db2aa?auto=format&fit=crop&q=80&w=300',
  'salt': 'https://images.unsplash.com/photo-1610970881699-44a5587caaec?auto=format&fit=crop&q=80&w=300',
  'yeast': 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=300',
  'pasta': 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=300',
  'penne': 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=300',
  'cheese': 'https://images.unsplash.com/photo-1486887396153-fa416525c308?auto=format&fit=crop&q=80&w=300',
  'parmesan': 'https://images.unsplash.com/photo-1486887396153-fa416525c308?auto=format&fit=crop&q=80&w=300',
  'carrot': 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=300',
  'carrots': 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=300',
  'green peas': 'https://images.unsplash.com/photo-1592394533824-9440e5d68530?auto=format&fit=crop&q=80&w=300',
  'peas': 'https://images.unsplash.com/photo-1592394533824-9440e5d68530?auto=format&fit=crop&q=80&w=300',
  'beans': 'https://images.unsplash.com/photo-1567375691080-602b540f89cc?auto=format&fit=crop&q=80&w=300',
  'green beans': 'https://images.unsplash.com/photo-1567375691080-602b540f89cc?auto=format&fit=crop&q=80&w=300',
  'potato': 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=300',
  'potatoes': 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=300',
  'bell pepper': 'https://images.unsplash.com/photo-1566822295627-c1d428de03bc?auto=format&fit=crop&q=80&w=300',
  'capsicum': 'https://images.unsplash.com/photo-1566822295627-c1d428de03bc?auto=format&fit=crop&q=80&w=300',
  'mushrooms': 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=300',
  'green chili': 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&q=80&w=300',
  'green chilli': 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&q=80&w=300',
  'cumin': 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=300',
  'cumin seeds': 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=300',
  'turmeric': 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=300',
  'chicken': 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&q=80&w=300',
  'pizza dough': 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80&w=300',
  'pizza sauce': 'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=300',
  'soy sauce': 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=300',
  'vinegar': 'https://images.unsplash.com/photo-1622484211148-7164ff9c5006?auto=format&fit=crop&q=80&w=300',
  'cabbage': 'https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?auto=format&fit=crop&q=80&w=300',
  'spring onion': 'https://images.unsplash.com/photo-1588673752187-578d5918ee08?auto=format&fit=crop&q=80&w=300',
  'chocolate': 'https://images.unsplash.com/photo-1548907040-4d42b5212c11?auto=format&fit=crop&q=80&w=300',
  'cocoa': 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&q=80&w=300',
  'maple syrup': 'https://images.unsplash.com/photo-1589135306090-e17f7b3df6f8?auto=format&fit=crop&q=80&w=300',
  'honey': 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=300',
  'lemon': 'https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&q=80&w=300',
  'lime': 'https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&q=80&w=300'
};

export const ingredientImageService = {
  getIngredientImage: (ingredientName: string): string | null => {
    if (!ingredientName) return null;
    
    // Normalize string: lowercase, remove brackets / parentheses and trim.
    const normalized = ingredientName
      .toLowerCase()
      .replace(/\(.*\)/g, '')
      .replace(/fresh/g, '')
      .replace(/cubed/g, '')
      .replace(/chopped/g, '')
      .replace(/sliced/g, '')
      .replace(/minced/g, '')
      .replace(/grated/g, '')
      .replace(/powder/g, '')
      .trim();

    // Check direct matching or partial matching in dictionary keys
    if (INGREDIENT_IMAGES[normalized]) {
      return INGREDIENT_IMAGES[normalized];
    }

    // Try finding by sub-keyword matching
    const matchingKey = Object.keys(INGREDIENT_IMAGES).find(key => 
      normalized.includes(key) || key.includes(normalized)
    );

    if (matchingKey) {
      return INGREDIENT_IMAGES[matchingKey];
    }

    return null;
  }
};

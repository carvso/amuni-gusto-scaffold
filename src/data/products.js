// Mock product data for Amunì Group e-commerce
export const products = [
  {
    id: 1,
    name: 'Pasta alla Norma',
    description: 'Pasta con melanzane, pomodoro, ricotta salata e basilico. Un classico piatto siciliano pronto da gustare.',
    shortDescription: 'Pasta con melanzane e ricotta salata',
    price: 12.90,
    image: '/lovable-uploads/844b68eb-f4f8-4133-bf17-b8c31ebee83d.png',
    category: 'primi',
    featured: true,
    ingredients: 'Pasta di semola, melanzane, pomodoro, ricotta salata, basilico, aglio, olio extravergine d\'oliva, sale',
    nutritionalFacts: {
      calories: 380,
      proteins: '12g',
      carbs: '68g',
      fats: '8g',
      allergies: 'Glutine, Latticini'
    },
    preparationTime: '4 minuti',
    dietaryInfo: ['vegetariano']
  },
  {
    id: 2,
    name: 'Caponata Siciliana',
    description: 'Tradizionale contorno siciliano con melanzane, olive, capperi e sedano in agrodolce. Perfetto come antipasto o contorno.',
    shortDescription: 'Melanzane in agrodolce con capperi e olive',
    price: 9.50,
    image: '/lovable-uploads/7d193bd8-c6d9-4d45-9fb8-512cdd54fa14.png',
    category: 'contorni',
    featured: true,
    ingredients: 'Melanzane, sedano, olive verdi, capperi, cipolla, pomodoro, aceto, zucchero, olio extravergine d\'oliva, sale, pepe',
    nutritionalFacts: {
      calories: 220,
      proteins: '4g',
      carbs: '24g',
      fats: '12g',
      allergies: 'Nessuna'
    },
    preparationTime: '3 minuti',
    dietaryInfo: ['vegetariano', 'vegano', 'senza glutine']
  },
  {
    id: 3,
    name: 'Arancini di Riso',
    description: 'Palle di riso ripiene con ragù, piselli e formaggio, impanate e fritte. Un classico street food siciliano.',
    shortDescription: 'Palle di riso ripiene e fritte',
    price: 7.90,
    image: '/lovable-uploads/2d288f0c-7c11-4591-ad1b-d4b986be8765.png',
    category: 'street food',
    featured: true,
    ingredients: 'Riso, carne macinata, piselli, formaggio, pomodoro, uova, pangrattato, sale, pepe',
    nutritionalFacts: {
      calories: 280,
      proteins: '9g',
      carbs: '42g',
      fats: '10g',
      allergies: 'Glutine, Latticini, Uova'
    },
    preparationTime: '5 minuti',
    dietaryInfo: []
  },
  {
    id: 4,
    name: 'Cannoli Siciliani',
    description: 'Dolci tubolari con croccante cialda di pasta fritta ripiene di ricotta dolce, scaglie di cioccolato e scorza d\'arancia candita.',
    shortDescription: 'Dolci ripieni di ricotta e cioccolato',
    price: 8.50,
    image: '/lovable-uploads/c50d9845-4fe1-4151-8941-340256b5b7c0.png',
    category: 'dolci',
    featured: false,
    ingredients: 'Farina, ricotta di pecora, zucchero, cioccolato, scorza d\'arancia candita, vaniglia',
    nutritionalFacts: {
      calories: 350,
      proteins: '8g',
      carbs: '40g',
      fats: '18g',
      allergies: 'Glutine, Latticini'
    },
    preparationTime: 'Pronti da gustare',
    dietaryInfo: ['vegetariano']
  },
  {
    id: 5,
    name: 'Parmigiana di Melanzane',
    description: 'Strati di melanzane fritte con formaggio, basilico e sugo di pomodoro. Un grande classico della cucina siciliana.',
    shortDescription: 'Melanzane a strati con pomodoro e formaggio',
    price: 11.90,
    image: '/lovable-uploads/71e14010-7a98-48c7-b264-bf77265e3ab2.png',
    category: 'secondi',
    featured: true,
    ingredients: 'Melanzane, pomodoro, mozzarella, parmigiano, basilico, olio extravergine d\'oliva, sale',
    nutritionalFacts: {
      calories: 320,
      proteins: '14g',
      carbs: '18g',
      fats: '22g',
      allergies: 'Latticini'
    },
    preparationTime: '6 minuti',
    dietaryInfo: ['vegetariano', 'senza glutine']
  },
  {
    id: 6,
    name: 'Pasta con le Sarde',
    description: 'Bucatini con sarde, finocchietto selvatico, pinoli e uvetta. Un piatto iconico della tradizione palermitana.',
    shortDescription: 'Bucatini con sarde, finocchietto e pinoli',
    price: 13.90,
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhc3RhJTIwc2FyZGluZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    category: 'primi',
    featured: false,
    ingredients: 'Bucatini, sarde, finocchietto selvatico, pinoli, uvetta, cipolla, zafferano, olio extravergine d\'oliva, sale, pepe',
    nutritionalFacts: {
      calories: 410,
      proteins: '18g',
      carbs: '62g',
      fats: '14g',
      allergies: 'Glutine, Pesce, Frutta a guscio'
    },
    preparationTime: '4 minuti',
    dietaryInfo: []
  },
  {
    id: 7,
    name: 'Insalata di Arance',
    description: 'Fresca insalata di arance, finocchi, olive nere e cipolla rossa. Un contorno leggero e ricco di sapore.',
    shortDescription: 'Arance con finocchi, olive e cipolla rossa',
    price: 8.90,
    image: 'https://images.unsplash.com/photo-1596567595859-ba486e0b5d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b3JhbmdlJTIwc2FsYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    category: 'contorni',
    featured: false,
    ingredients: 'Arance, finocchi, olive nere, cipolla rossa, olio extravergine d\'oliva, sale, pepe',
    nutritionalFacts: {
      calories: 140,
      proteins: '2g',
      carbs: '22g',
      fats: '6g',
      allergies: 'Nessuna'
    },
    preparationTime: 'Pronto da gustare',
    dietaryInfo: ['vegetariano', 'vegano', 'senza glutine']
  },
  {
    id: 8,
    name: 'Involtini di Melanzane',
    description: 'Fettine di melanzane arrotolate e ripiene di ricotta, basilico e pomodorini secchi. Un antipasto saporito e elegante.',
    shortDescription: 'Melanzane ripiene di ricotta e pomodorini',
    price: 10.50,
    image: 'https://images.unsplash.com/photo-1634487359989-3e90c9432133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWdncGxhbnQlMjByb2xsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    category: 'antipasti',
    featured: false,
    ingredients: 'Melanzane, ricotta, basilico, pomodorini secchi, parmigiano, olio extravergine d\'oliva, sale, pepe',
    nutritionalFacts: {
      calories: 220,
      proteins: '10g',
      carbs: '14g',
      fats: '16g',
      allergies: 'Latticini'
    },
    preparationTime: '4 minuti',
    dietaryInfo: ['vegetariano', 'senza glutine']
  }
];

// Categories for filtering
export const categories = [
  { id: 'tutti', name: 'Tutti i Prodotti' },
  { id: 'antipasti', name: 'Antipasti' },
  { id: 'primi', name: 'Primi Piatti' },
  { id: 'secondi', name: 'Secondi Piatti' },
  { id: 'contorni', name: 'Contorni' },
  { id: 'street food', name: 'Street Food' },
  { id: 'dolci', name: 'Dolci' }
];

// Dietary options for filtering
export const dietaryOptions = [
  { id: 'vegetariano', name: 'Vegetariano' },
  { id: 'vegano', name: 'Vegano' },
  { id: 'senza glutine', name: 'Senza Glutine' }
];

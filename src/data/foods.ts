import { Food } from '@/types';

export const MEXICAN_FOODS: Food[] = [
  // Frutas
  { id: 'f1', name: 'Manzana', category: 'Frutas', caloriesPer100g: 52, defaultServing: 150, unit: 'g' },
  { id: 'f2', name: 'Plátano', category: 'Frutas', caloriesPer100g: 89, defaultServing: 120, unit: 'g' },
  { id: 'f3', name: 'Naranja', category: 'Frutas', caloriesPer100g: 47, defaultServing: 130, unit: 'g' },
  { id: 'f4', name: 'Papaya', category: 'Frutas', caloriesPer100g: 43, defaultServing: 140, unit: 'g' },
  { id: 'f5', name: 'Sandía', category: 'Frutas', caloriesPer100g: 30, defaultServing: 200, unit: 'g' },
  { id: 'f6', name: 'Mango', category: 'Frutas', caloriesPer100g: 60, defaultServing: 150, unit: 'g' },
  { id: 'f7', name: 'Piña', category: 'Frutas', caloriesPer100g: 50, defaultServing: 150, unit: 'g' },
  { id: 'f8', name: 'Fresa', category: 'Frutas', caloriesPer100g: 32, defaultServing: 100, unit: 'g' },
  { id: 'f9', name: 'Guayaba', category: 'Frutas', caloriesPer100g: 68, defaultServing: 100, unit: 'g' },
  { id: 'f10', name: 'Uvas', category: 'Frutas', caloriesPer100g: 69, defaultServing: 100, unit: 'g' },
  
  // Verduras
  { id: 'v1', name: 'Lechuga', category: 'Verduras', caloriesPer100g: 15, defaultServing: 80, unit: 'g' },
  { id: 'v2', name: 'Tomate', category: 'Verduras', caloriesPer100g: 18, defaultServing: 120, unit: 'g' },
  { id: 'v3', name: 'Cebolla', category: 'Verduras', caloriesPer100g: 40, defaultServing: 80, unit: 'g' },
  { id: 'v4', name: 'Zanahoria', category: 'Verduras', caloriesPer100g: 41, defaultServing: 100, unit: 'g' },
  { id: 'v5', name: 'Brócoli', category: 'Verduras', caloriesPer100g: 34, defaultServing: 100, unit: 'g' },
  { id: 'v6', name: 'Calabacita', category: 'Verduras', caloriesPer100g: 17, defaultServing: 150, unit: 'g' },
  { id: 'v7', name: 'Chile poblano', category: 'Verduras', caloriesPer100g: 20, defaultServing: 100, unit: 'g' },
  { id: 'v8', name: 'Nopales', category: 'Verduras', caloriesPer100g: 16, defaultServing: 100, unit: 'g' },
  { id: 'v9', name: 'Espinaca', category: 'Verduras', caloriesPer100g: 23, defaultServing: 80, unit: 'g' },
  { id: 'v10', name: 'Pepino', category: 'Verduras', caloriesPer100g: 15, defaultServing: 100, unit: 'g' },
  
  // Legumbres
  { id: 'l1', name: 'Frijoles negros cocidos', category: 'Legumbres', caloriesPer100g: 132, defaultServing: 150, unit: 'g' },
  { id: 'l2', name: 'Frijoles pintos cocidos', category: 'Legumbres', caloriesPer100g: 143, defaultServing: 150, unit: 'g' },
  { id: 'l3', name: 'Lentejas cocidas', category: 'Legumbres', caloriesPer100g: 116, defaultServing: 150, unit: 'g' },
  { id: 'l4', name: 'Garbanzos cocidos', category: 'Legumbres', caloriesPer100g: 164, defaultServing: 150, unit: 'g' },
  
  // Cereales
  { id: 'c1', name: 'Arroz blanco cocido', category: 'Cereales', caloriesPer100g: 130, defaultServing: 150, unit: 'g' },
  { id: 'c2', name: 'Tortilla de maíz', category: 'Cereales', caloriesPer100g: 218, defaultServing: 30, unit: 'g' },
  { id: 'c3', name: 'Tortilla de harina', category: 'Cereales', caloriesPer100g: 304, defaultServing: 40, unit: 'g' },
  { id: 'c4', name: 'Pan integral', category: 'Cereales', caloriesPer100g: 247, defaultServing: 30, unit: 'g' },
  { id: 'c5', name: 'Pan blanco', category: 'Cereales', caloriesPer100g: 265, defaultServing: 30, unit: 'g' },
  { id: 'c6', name: 'Avena cocida', category: 'Cereales', caloriesPer100g: 71, defaultServing: 200, unit: 'g' },
  { id: 'c7', name: 'Pasta cocida', category: 'Cereales', caloriesPer100g: 131, defaultServing: 150, unit: 'g' },
  
  // Proteínas
  { id: 'p1', name: 'Pechuga de pollo', category: 'Proteínas', caloriesPer100g: 165, defaultServing: 120, unit: 'g' },
  { id: 'p2', name: 'Carne de res magra', category: 'Proteínas', caloriesPer100g: 250, defaultServing: 100, unit: 'g' },
  { id: 'p3', name: 'Pescado blanco', category: 'Proteínas', caloriesPer100g: 90, defaultServing: 120, unit: 'g' },
  { id: 'p4', name: 'Atún en agua', category: 'Proteínas', caloriesPer100g: 116, defaultServing: 100, unit: 'g' },
  { id: 'p5', name: 'Huevo', category: 'Proteínas', caloriesPer100g: 155, defaultServing: 50, unit: 'g' },
  { id: 'p6', name: 'Camarón', category: 'Proteínas', caloriesPer100g: 99, defaultServing: 100, unit: 'g' },
  { id: 'p7', name: 'Pechuga de pavo', category: 'Proteínas', caloriesPer100g: 135, defaultServing: 100, unit: 'g' },
  
  // Lácteos
  { id: 'd1', name: 'Leche descremada', category: 'Lácteos', caloriesPer100g: 34, defaultServing: 240, unit: 'ml' },
  { id: 'd2', name: 'Leche entera', category: 'Lácteos', caloriesPer100g: 61, defaultServing: 240, unit: 'ml' },
  { id: 'd3', name: 'Yogur natural', category: 'Lácteos', caloriesPer100g: 61, defaultServing: 150, unit: 'g' },
  { id: 'd4', name: 'Queso panela', category: 'Lácteos', caloriesPer100g: 200, defaultServing: 40, unit: 'g' },
  { id: 'd5', name: 'Queso Oaxaca', category: 'Lácteos', caloriesPer100g: 305, defaultServing: 30, unit: 'g' },
  { id: 'd6', name: 'Queso fresco', category: 'Lácteos', caloriesPer100g: 174, defaultServing: 40, unit: 'g' },
  
  // Grasas
  { id: 'g1', name: 'Aguacate', category: 'Grasas', caloriesPer100g: 160, defaultServing: 50, unit: 'g' },
  { id: 'g2', name: 'Aceite de oliva', category: 'Grasas', caloriesPer100g: 884, defaultServing: 10, unit: 'ml' },
  { id: 'g3', name: 'Nueces', category: 'Grasas', caloriesPer100g: 654, defaultServing: 28, unit: 'g' },
  { id: 'g4', name: 'Almendras', category: 'Grasas', caloriesPer100g: 579, defaultServing: 28, unit: 'g' },
  { id: 'g5', name: 'Cacahuates', category: 'Grasas', caloriesPer100g: 567, defaultServing: 28, unit: 'g' },
  
  // Platillos típicos
  { id: 'pt1', name: 'Tacos de pollo (2 pzas)', category: 'Platillos', caloriesPer100g: 200, defaultServing: 100, unit: 'porción' },
  { id: 'pt2', name: 'Quesadilla de queso', category: 'Platillos', caloriesPer100g: 350, defaultServing: 100, unit: 'porción' },
  { id: 'pt3', name: 'Enchiladas verdes (3 pzas)', category: 'Platillos', caloriesPer100g: 450, defaultServing: 100, unit: 'porción' },
  { id: 'pt4', name: 'Sopa de tortilla', category: 'Platillos', caloriesPer100g: 180, defaultServing: 250, unit: 'ml' },
  { id: 'pt5', name: 'Pozole (tazón)', category: 'Platillos', caloriesPer100g: 200, defaultServing: 300, unit: 'ml' },
  { id: 'pt6', name: 'Chilaquiles', category: 'Platillos', caloriesPer100g: 280, defaultServing: 200, unit: 'g' },
  { id: 'pt7', name: 'Huevos a la mexicana', category: 'Platillos', caloriesPer100g: 180, defaultServing: 150, unit: 'g' },
  { id: 'pt8', name: 'Tamales de pollo', category: 'Platillos', caloriesPer100g: 250, defaultServing: 100, unit: 'g' },
  
  // Bebidas
  { id: 'b1', name: 'Agua natural', category: 'Bebidas', caloriesPer100g: 0, defaultServing: 250, unit: 'ml' },
  { id: 'b2', name: 'Café sin azúcar', category: 'Bebidas', caloriesPer100g: 2, defaultServing: 240, unit: 'ml' },
  { id: 'b3', name: 'Té sin azúcar', category: 'Bebidas', caloriesPer100g: 1, defaultServing: 240, unit: 'ml' },
  { id: 'b4', name: 'Refresco', category: 'Bebidas', caloriesPer100g: 42, defaultServing: 355, unit: 'ml' },
  { id: 'b5', name: 'Jugo de naranja natural', category: 'Bebidas', caloriesPer100g: 45, defaultServing: 240, unit: 'ml' },
  { id: 'b6', name: 'Agua de jamaica sin azúcar', category: 'Bebidas', caloriesPer100g: 5, defaultServing: 240, unit: 'ml' },
  { id: 'b7', name: 'Horchata', category: 'Bebidas', caloriesPer100g: 70, defaultServing: 240, unit: 'ml' },
  
  // Postres
  { id: 'ps1', name: 'Flan napolitano', category: 'Postres', caloriesPer100g: 200, defaultServing: 100, unit: 'g' },
  { id: 'ps2', name: 'Gelatina', category: 'Postres', caloriesPer100g: 62, defaultServing: 100, unit: 'g' },
  { id: 'ps3', name: 'Paleta de hielo', category: 'Postres', caloriesPer100g: 80, defaultServing: 80, unit: 'g' },
  { id: 'ps4', name: 'Churros (2 pzas)', category: 'Postres', caloriesPer100g: 400, defaultServing: 80, unit: 'g' },
  { id: 'ps5', name: 'Pan dulce (concha)', category: 'Postres', caloriesPer100g: 340, defaultServing: 90, unit: 'g' },
  
  // Botanas
  { id: 'bt1', name: 'Jícama con limón', category: 'Botanas', caloriesPer100g: 40, defaultServing: 120, unit: 'g' },
  { id: 'bt2', name: 'Pepino con chile', category: 'Botanas', caloriesPer100g: 20, defaultServing: 100, unit: 'g' },
  { id: 'bt3', name: 'Chicharrón de cerdo', category: 'Botanas', caloriesPer100g: 544, defaultServing: 30, unit: 'g' },
  { id: 'bt4', name: 'Palomitas naturales', category: 'Botanas', caloriesPer100g: 387, defaultServing: 30, unit: 'g' },
  { id: 'bt5', name: 'Tostadas horneadas', category: 'Botanas', caloriesPer100g: 400, defaultServing: 30, unit: 'g' },
];

export const FOOD_CATEGORIES = [
  'Todas',
  'Frutas',
  'Verduras',
  'Legumbres',
  'Cereales',
  'Proteínas',
  'Lácteos',
  'Grasas',
  'Platillos',
  'Bebidas',
  'Postres',
  'Botanas',
];

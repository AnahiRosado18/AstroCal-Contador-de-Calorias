export interface Profile {
  id: string;
  name: string;
  passwordHash: string;
  sex?: 'male' | 'female';
  age?: number;
  weightKg?: number;
  heightCm?: number;
  activity?: string;
  tdee?: number;
  createdAt: string;
}

export interface Food {
  id: string;
  name: string;
  category: string;
  caloriesPer100g: number;
  defaultServing: number;
  unit: string;
}

/**
 * --- INICIO DE LA MODIFICACIÓN ---
 * Actualizado para soportar cantidades.
 */
export interface IntakeItem {
  foodId: string;
  foodName: string;
  baseServingSize: number; // La porción de 1 unidad (ej. 150g)
  baseCalories: number;    // Las calorías de 1 unidad (ej. 95 kcal)
  quantity: number;        // Cuántas unidades se han comido (ej. 1, 2, 3)
  timestamp: string;       // Cuándo se agregó la primera vez
}
// --- FIN DE LA MODIFICACIÓN ---

export interface DayIntake {
  date: string;
  items: IntakeItem[];
  totalCalories: number;
}

export type ActivityLevel = 
  | 'sedentary'
  | 'light'
  | 'moderate'
  | 'active'
  | 'very_active';

export const ACTIVITY_FACTORS: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very_active: 1.9,
};
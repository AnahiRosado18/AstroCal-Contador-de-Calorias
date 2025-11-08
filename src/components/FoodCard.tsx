// Importa el tipo de dato 'Food'
import { Food } from '@/types';
// Importa componentes de UI
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// Importa icono
import { Plus } from 'lucide-react';

// Define la "forma" de las props que espera este componente
interface FoodCardProps {
  food: Food; // El objeto completo del alimento
  onAdd: (food: Food) => void; // Una función callback que se llama al hacer clic
}

/**
 * Componente que muestra una tarjeta individual de alimento
 * en los resultados de búsqueda del Dashboard.
 */
export function FoodCard({ food, onAdd }: FoodCardProps) {
  // Calcula las calorías para la porción por defecto
  // (ej. 150g de manzana, no 100g)
  const defaultCalories = Math.round((food.caloriesPer100g * food.defaultServing) / 100);

  // --- RENDERIZADO DEL COMPONENTE (JSX) ---
  return (
    <Card className="p-4 hover:shadow-[var(--shadow-card)] transition-shadow border-primary/10">
      <div className="flex items-start justify-between gap-3">
        {/* Sección de Información (Izquierda) */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground truncate">{food.name}</h3>
          <p className="text-sm text-muted-foreground">{food.category}</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-primary">{defaultCalories}</span>
            <span className="text-sm text-muted-foreground">kcal</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {/* Muestra la porción y las calorías por 100g */}
            {food.defaultServing}{food.unit} • {food.caloriesPer100g} kcal/100{food.unit}
          </p>
        </div>
        
        {/* Botón de Añadir (Derecha) */}
        <Button
          size="icon"
          // Al hacer clic, llama a la función 'onAdd' (que vive en Dashboard.tsx)
          // y le pasa el objeto 'food' de esta tarjeta.
          onClick={() => onAdd(food)}
          className="shrink-0 rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-[var(--shadow-brand)]"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}
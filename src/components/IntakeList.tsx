import { ScrollArea } from '@/components/ui/scroll-area';
import { IntakeItem } from '@/types';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// --- INICIO DE LA MODIFICACIÓN ---
import { Trash2, Plus, Minus } from 'lucide-react';
// --- FIN DE LA MODIFICACIÓN ---

interface IntakeListProps {
  items: IntakeItem[];
  // --- INICIO DE LA MODIFICACIÓN ---
  // Las props cambiaron, ya no usamos el 'index'
  onDecrease: (foodId: string) => void;
  onIncrease: (foodId: string) => void;
  // --- FIN DE LA MODIFICACIÓN ---
}

export function IntakeList({ items, onDecrease, onIncrease }: IntakeListProps) {
  
  if (items.length === 0) {
    return (
      <Card className="p-8 text-center border-dashed border-2 border-primary/20">
        <p className="text-muted-foreground">
          Aún no has agregado alimentos. Busca y agrega para comenzar a registrar.
        </p>
      </Card>
    );
  }

  // --- INICIO DE LA MODIFICACIÓN ---
  // La UI de la tarjeta ahora tiene botones +/-
  return (
    <ScrollArea className="h-[300px] w-full pr-4">
      <div className="space-y-2">
        {items.map((item) => {
          // Calcula los totales basados en la cantidad
          const totalCalories = item.baseCalories * item.quantity;
          const totalServing = item.baseServingSize * item.quantity;
          
          return (
            <Card key={item.foodId} className="p-4 flex items-center justify-between border-primary/10">
              {/* Información del alimento */}
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">{item.foodName}</h4>
                <p className="text-sm text-muted-foreground">
                  {totalServing}g • {totalCalories} kcal
                </p>
              </div>

              {/* Controles de Cantidad */}
              <div className="flex items-center gap-2">
                {/* Botón de Restar (-) */}
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => onDecrease(item.foodId)}
                  className="text-destructive hover:text-destructive hover:bg-destructive/10"
                >
                  {/* Si la cantidad es 1, muestra Basura, si no, muestra Menos */}
                  {item.quantity === 1 ? <Trash2 className="h-4 w-4" /> : <Minus className="h-4 w-4" />}
                </Button>

                {/* Muestra la cantidad */}
                <span className="font-bold w-4 text-center">{item.quantity}</span>

                {/* Botón de Sumar (+) */}
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => onIncrease(item.foodId)}
                  className="text-primary hover:text-primary hover:bg-primary/10"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </ScrollArea>
  );
  // --- FIN DE LA MODIFICACIÓN ---
}
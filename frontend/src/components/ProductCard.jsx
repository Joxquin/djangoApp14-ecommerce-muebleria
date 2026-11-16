import React from 'react';
import { Card, CardContent } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { formatPrice } from '@/lib/utils';
import { ShoppingCart, CheckCircle2, AlertTriangle } from 'lucide-react';

export function ProductCard({ 
  nombre, 
  descripcion, 
  precio, 
  imagen, 
  categoria_nombre, 
  cantidad_disponible 
}) {
  const isAvailable = cantidad_disponible > 0;
  const isLowStock = cantidad_disponible > 0 && cantidad_disponible <= 3;

  return (
    <Card className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Product Image Frame */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f7ebe4] rounded-t-[28px]">
        <img
          src={imagen || "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800"}
          alt={nombre}
          className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Floating Category Pill */}
        <div className="absolute top-4 left-4 z-10">
          <Badge variant="default" className="shadow-sm backdrop-blur-md bg-white/90 text-[#301400]">
            {categoria_nombre || "General"}
          </Badge>
        </div>

        {/* Stock Status Badge */}
        <div className="absolute top-4 right-4 z-10">
          {isLowStock ? (
            <Badge variant="warning" className="shadow-sm flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" />
              Últimas {cantidad_disponible} unid.
            </Badge>
          ) : isAvailable ? (
            <Badge variant="success" className="shadow-sm flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              {cantidad_disponible} en stock
            </Badge>
          ) : (
            <Badge variant="secondary" className="shadow-sm bg-stone-200 text-stone-600">
              Agotado
            </Badge>
          )}
        </div>
      </div>

      {/* Product Information Body */}
      <CardContent className="p-6 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-xl font-bold text-[#221a15] mb-2 leading-snug group-hover:text-[#944b00] transition-colors">
            {nombre}
          </h3>
          <p className="text-sm text-[#52443d] line-clamp-2 leading-relaxed mb-4">
            {descripcion}
          </p>
        </div>

        <div className="pt-4 border-t border-[#f1e5df] flex items-center justify-between">
          <div>
            <span className="text-xs uppercase font-semibold text-[#745845] tracking-wider block">
              Inversión
            </span>
            <span className="text-2xl font-black text-[#221a15] tracking-tight">
              {formatPrice(precio)}
            </span>
          </div>

          <Button 
            variant="filled" 
            size="sm"
            disabled={!isAvailable}
            icon={ShoppingCart}
            className="rounded-full shadow-md hover:shadow-lg"
          >
            {isAvailable ? "Adquirir" : "Agotado"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

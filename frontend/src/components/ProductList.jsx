import React from 'react';
import { ProductCard } from './ProductCard';
import { PackageOpen, Sparkles, RefreshCw } from 'lucide-react';
import { Button } from './ui/Button';

export function ProductList({ 
  productos = [], 
  loading = false, 
  error = null, 
  onRetry 
}) {
  // Estado de carga elegante (Skeletons con esquinas redondeadas M3)
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div 
            key={item} 
            className="rounded-[28px] bg-white border border-[#f1e5df] overflow-hidden p-0 animate-pulse shadow-sm"
          >
            <div className="aspect-[4/3] bg-[#f1e5df] w-full" />
            <div className="p-6 space-y-4">
              <div className="h-6 bg-[#f1e5df] rounded-full w-3/4" />
              <div className="space-y-2">
                <div className="h-4 bg-[#f1e5df] rounded-full w-full" />
                <div className="h-4 bg-[#f1e5df] rounded-full w-2/3" />
              </div>
              <div className="pt-4 flex justify-between items-center border-t border-[#f1e5df]">
                <div className="h-8 bg-[#f1e5df] rounded-full w-1/3" />
                <div className="h-10 bg-[#f1e5df] rounded-full w-28" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Estado de error amigable con botón de reintento
  if (error) {
    return (
      <div className="rounded-[28px] bg-[#ffdad6]/40 border border-[#ba1a1a]/20 p-12 text-center max-w-xl mx-auto my-8">
        <div className="w-16 h-16 bg-[#ffdad6] text-[#ba1a1a] rounded-full flex items-center justify-center mx-auto mb-4">
          <PackageOpen className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#410002] mb-2">
          No se pudo sincronizar el catálogo
        </h3>
        <p className="text-sm text-[#410002]/80 mb-6 leading-relaxed">
          {error}
        </p>
        {onRetry && (
          <Button 
            variant="filled" 
            onClick={onRetry} 
            icon={RefreshCw}
            className="bg-[#ba1a1a] hover:bg-[#93000a]"
          >
            Reintentar Conexión
          </Button>
        )}
      </div>
    );
  }

  // Estado vacío: Sin productos que mostrar
  if (!productos || productos.length === 0) {
    return (
      <div className="rounded-[28px] bg-white border border-[#f1e5df] p-16 text-center max-w-md mx-auto my-8 shadow-sm">
        <div className="w-16 h-16 bg-[#ffdcc3] text-[#944b00] rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Sparkles className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#221a15] mb-2">
          No hay piezas disponibles
        </h3>
        <p className="text-sm text-[#52443d] leading-relaxed">
          No encontramos productos en esta categoría por el momento. Prueba seleccionando otra categoría de muebles.
        </p>
      </div>
    );
  }

  // Cuadrícula responsive de tarjetas de productos
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {productos.map((producto) => (
        <ProductCard
          key={producto.id}
          nombre={producto.nombre}
          descripcion={producto.descripcion}
          precio={producto.precio}
          imagen={producto.imagen}
          categoria_nombre={producto.categoria_nombre}
          cantidad_disponible={producto.cantidad_disponible}
        />
      ))}
    </div>
  );
}

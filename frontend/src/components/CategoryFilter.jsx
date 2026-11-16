import React from 'react';
import { Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

export function CategoryFilter({ 
  categorias = [], 
  selectedCategoryId = null, 
  onSelectCategory,
  totalItemsCount = 0
}) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[#745845] flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#944b00]" />
          Filtrar por Categoría
        </h2>
        {selectedCategoryId && (
          <button 
            onClick={() => onSelectCategory(null)}
            className="text-xs font-semibold text-[#944b00] hover:underline cursor-pointer"
          >
            Limpiar filtro
          </button>
        )}
      </div>

      {/* Horizontal scrollable expressive chips */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
        {/* 'Todos' Chip */}
        <button
          onClick={() => onSelectCategory(null)}
          className={cn(
            "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 shrink-0 flex items-center gap-2 cursor-pointer border",
            selectedCategoryId === null
              ? "bg-[#944b00] text-white border-[#944b00] shadow-md shadow-[#944b00]/20 scale-105"
              : "bg-white text-[#52443d] border-[#d7c3b9] hover:bg-[#ffdcc3]/30 hover:border-[#944b00]/40"
          )}
        >
          <span>Todos los Muebles</span>
          <span className={cn(
            "text-xs px-2 py-0.5 rounded-full",
            selectedCategoryId === null ? "bg-white/20 text-white" : "bg-[#f1e5df] text-[#52443d]"
          )}>
            {totalItemsCount}
          </span>
        </button>

        {/* Dynamic Category Chips */}
        {categorias.map((cat) => {
          const isSelected = selectedCategoryId === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 shrink-0 flex items-center gap-2 cursor-pointer border",
                isSelected
                  ? "bg-[#944b00] text-white border-[#944b00] shadow-md shadow-[#944b00]/20 scale-105"
                  : "bg-white text-[#52443d] border-[#d7c3b9] hover:bg-[#ffdcc3]/30 hover:border-[#944b00]/40"
              )}
            >
              <span>{cat.nombre}</span>
              {cat.total_productos !== undefined && (
                <span className={cn(
                  "text-xs px-2 py-0.5 rounded-full",
                  isSelected ? "bg-white/20 text-white" : "bg-[#f1e5df] text-[#52443d]"
                )}>
                  {cat.total_productos}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

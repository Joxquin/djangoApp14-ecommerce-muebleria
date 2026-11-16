import React from 'react';
import { Armchair, Sparkles, ShoppingBag, Search, Menu } from 'lucide-react';
import { Button } from './ui/Button';

export function Header({ totalProducts = 0 }) {
  return (
    <header className="sticky top-0 z-40 bg-[#fff8f5]/90 backdrop-blur-md border-b border-[#f1e5df] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Name */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#ffdcc3] text-[#944b00] flex items-center justify-center shadow-inner">
              <Armchair className="w-6 h-6" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#221a15] block leading-tight">
                Koa & Madera
              </span>
              <span className="text-xs font-semibold tracking-wider uppercase text-[#745845]">
                Mobiliario de Autor
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <a 
              href="#catalogo" 
              className="px-4 py-2 text-sm font-semibold text-[#944b00] bg-[#ffdcc3]/50 rounded-full transition-colors"
            >
              Catálogo
            </a>
            <a 
              href="#nosotros" 
              className="px-4 py-2 text-sm font-medium text-[#52443d] hover:text-[#221a15] hover:bg-[#f1e5df]/60 rounded-full transition-colors"
            >
              Colecciones
            </a>
            <a 
              href="#diseno" 
              className="px-4 py-2 text-sm font-medium text-[#52443d] hover:text-[#221a15] hover:bg-[#f1e5df]/60 rounded-full transition-colors"
            >
              Sostenibilidad
            </a>
            <a 
              href="#contacto" 
              className="px-4 py-2 text-sm font-medium text-[#52443d] hover:text-[#221a15] hover:bg-[#f1e5df]/60 rounded-full transition-colors"
            >
              Nosotros
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center bg-[#f1e5df]/70 rounded-full px-3 py-1.5 border border-[#d7c3b9]/40 text-[#52443d]">
              <Sparkles className="w-4 h-4 text-[#944b00] mr-2" />
              <span className="text-xs font-medium">
                {totalProducts} {totalProducts === 1 ? 'diseño' : 'diseños exclusivos'}
              </span>
            </div>

            <Button variant="tonal" size="icon" title="Buscar">
              <Search className="w-5 h-5" />
            </Button>

            <Button variant="filled" size="icon" className="relative" title="Carrito">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-[#ba1a1a] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#fff8f5]">
                0
              </span>
            </Button>
          </div>

        </div>
      </div>
    </header>
  );
}

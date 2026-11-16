import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { CategoryFilter } from '@/components/CategoryFilter';
import { ProductList } from '@/components/ProductList';
import { getCategorias, getProductos } from '@/services/api';
import { Sparkles, Compass, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

export function CatalogPage() {
  const [categorias, setCategorias] = useState([]);
  const [productos, setProductos] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  // Cargar categorías y productos iniciales
  const loadData = async (catId = null) => {
    try {
      setLoading(true);
      setError(null);

      // Cargar productos y categorías en paralelo
      const [catsData, prodsData] = await Promise.all([
        getCategorias(),
        getProductos(catId)
      ]);

      setCategorias(catsData);
      setProductos(prodsData);
    } catch (err) {
      console.error("Error al inicializar catálogo:", err);
      setError("No se pudo conectar con el servicio backend de Django REST Framework en http://localhost:8000/api/");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadData(selectedCategoryId);
  }, [selectedCategoryId]);

  const handleSelectCategory = (catId) => {
    setSelectedCategoryId(catId);
  };

  const handleRefresh = () => {
    setRefreshing(true);
    loadData(selectedCategoryId);
  };

  return (
    <div className="min-h-screen bg-[#fff8f5] flex flex-col selection:bg-[#ffdcc3] selection:text-[#301400]">
      {/* Encabezado Principal */}
      <Header totalProducts={productos.length} />

      {/* Hero Banner Expressive con curvaturas orgánicas Material 3 */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-8 pb-12 max-w-7xl mx-auto w-full">
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#fedcc6] via-[#f7ebe4] to-[#e3e7af]/50 p-8 sm:p-12 md:p-16 border border-[#f1e5df] shadow-sm">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md text-[#944b00] text-xs font-bold uppercase tracking-wider mb-6 border border-white">
              <Sparkles className="w-4 h-4" />
              Colección Primavera 2026
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#221a15] tracking-tight leading-[1.1] mb-6">
              Muebles que transforman tus espacios en hogar.
            </h1>
            <p className="text-base sm:text-lg text-[#52443d] leading-relaxed mb-8 max-w-xl">
              Diseño contemporáneo, maderas sostenibles seleccionadas a mano y acabados artesanales concebidos para perdurar por generaciones.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-[#52443d]">
              <span className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#944b00]" /> Despacho especializado
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#944b00]" /> Garantía de 5 años
              </span>
              <span className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#944b00]" /> Maderas certificadas FSC
              </span>
            </div>
          </div>

          {/* Decorative Background Blob */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#ffdcc3]/60 rounded-full blur-3xl pointer-events-none" />
        </div>
      </section>

      {/* Main Content: Catálogo y Filtro */}
      <main id="catalogo" className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Barra de Categorías y Acciones */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <CategoryFilter
            categorias={categorias}
            selectedCategoryId={selectedCategoryId}
            onSelectCategory={handleSelectCategory}
            totalItemsCount={productos.length}
          />
          <button
            onClick={handleRefresh}
            disabled={refreshing}
            className="self-end md:self-auto flex items-center gap-1.5 text-xs font-medium text-[#745845] hover:text-[#944b00] transition-colors cursor-pointer"
            title="Sincronizar con base de datos Django"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin text-[#944b00]' : ''}`} />
            Sincronizar catálogo
          </button>
        </div>

        {/* Listado de Productos */}
        <ProductList
          productos={productos}
          loading={loading}
          error={error}
          onRetry={() => loadData(selectedCategoryId)}
        />
      </main>

      {/* Footer Expressive */}
      <footer className="mt-20 border-t border-[#f1e5df] bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-[#745845]">
          <div className="flex items-center gap-3">
            <span className="font-serif font-bold text-lg text-[#221a15]">Koa & Madera</span>
            <span>&copy; {new Date().getFullYear()} Todos los derechos reservados.</span>
          </div>
          <div className="flex items-center gap-6 text-xs font-semibold">
            <a href="#" className="hover:text-[#944b00] transition-colors">Políticas de Garantía</a>
            <a href="#" className="hover:text-[#944b00] transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-[#944b00] transition-colors">Atención al Cliente</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

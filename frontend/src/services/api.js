const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

/**
 * Obtener todas las categorías desde el backend de Django REST Framework
 */
export async function getCategorias() {
  try {
    const response = await fetch(`${API_BASE_URL}/categorias/`, {
      headers: {
        'Accept': 'application/json',
      }
    });
    if (!response.ok) {
      throw new Error(`Error en el servidor al cargar categorías: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fallo al obtener categorías:", error);
    throw error;
  }
}

/**
 * Obtener todos los productos o filtrar por categoría
 * @param {number|null} categoriaId - ID de la categoría opcional
 */
export async function getProductos(categoriaId = null) {
  try {
    const url = categoriaId 
      ? `${API_BASE_URL}/productos/?categoria=${categoriaId}`
      : `${API_BASE_URL}/productos/`;

    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
      }
    });
    if (!response.ok) {
      throw new Error(`Error en el servidor al cargar productos: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fallo al obtener productos:", error);
    throw error;
  }
}

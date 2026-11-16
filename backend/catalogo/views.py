from rest_framework import viewsets
from .models import Categoria, Producto
from .serializers import CategoriaSerializer, ProductoSerializer

class CategoriaViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint para consultar el listado de categorías comerciales.
    """
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer


class ProductoViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint para consultar el listado de productos con capacidad de filtrado por categoría.
    """
    serializer_class = ProductoSerializer

    def get_queryset(self):
        queryset = Producto.objects.select_related('categoria').all()
        categoria_id = self.request.query_params.get('categoria', None)
        if categoria_id is not None:
            queryset = queryset.filter(categoria_id=categoria_id)
        return queryset

from rest_framework import serializers
from .models import Categoria, Producto

class CategoriaSerializer(serializers.ModelSerializer):
    total_productos = serializers.IntegerField(source='productos.count', read_only=True)

    class Meta:
        model = Categoria
        fields = ['id', 'nombre', 'descripcion', 'total_productos', 'creado_en']


class ProductoSerializer(serializers.ModelSerializer):
    categoria_nombre = serializers.ReadOnlyField(source='categoria.nombre')

    class Meta:
        model = Producto
        fields = [
            'id', 
            'nombre', 
            'descripcion', 
            'precio', 
            'imagen', 
            'cantidad_disponible', 
            'categoria', 
            'categoria_nombre',
            'creado_en'
        ]

from django.contrib import admin
from .models import Categoria, Producto

@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    list_display = ('id', 'nombre', 'descripcion', 'creado_en')
    search_fields = ('nombre',)
    ordering = ('nombre',)


@admin.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ('id', 'nombre', 'categoria', 'precio', 'cantidad_disponible', 'creado_en')
    list_filter = ('categoria', 'creado_en')
    search_fields = ('nombre', 'descripcion')
    list_editable = ('precio', 'cantidad_disponible')
    ordering = ('-creado_en',)

from django.db import models

class Categoria(models.Model):
    nombre = models.CharField(max_length=100, unique=True, verbose_name="Nombre de Categoría")
    descripcion = models.TextField(blank=True, null=True, verbose_name="Descripción")
    creado_en = models.DateTimeField(auto_now_add=True, verbose_name="Fecha de Creación")

    class Meta:
        verbose_name = "Categoría"
        verbose_name_plural = "Categorías"
        ordering = ['nombre']

    def __str__(self):
        return self.nombre


class Producto(models.Model):
    nombre = models.CharField(max_length=200, verbose_name="Nombre del Producto")
    descripcion = models.TextField(verbose_name="Descripción Detallada")
    precio = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Precio (PEN)")
    imagen = models.URLField(max_length=500, verbose_name="URL de la Imagen")
    cantidad_disponible = models.PositiveIntegerField(default=0, verbose_name="Cantidad Disponible")
    categoria = models.ForeignKey(
        Categoria, 
        on_delete=models.CASCADE, 
        related_name='productos',
        verbose_name="Categoría"
    )
    creado_en = models.DateTimeField(auto_now_add=True, verbose_name="Fecha de Registro")

    class Meta:
        verbose_name = "Producto"
        verbose_name_plural = "Productos"
        ordering = ['-creado_en']

    def __str__(self):
        return f"{self.nombre} - S/. {self.precio}"

# Koa & Madera — Mueblería de Autor (E-Commerce)
### Plataforma Web con ReactJS, Django REST Framework y Material 3 Expressive Design

Este repositorio contiene la solución completa al laboratorio de desarrollo de una tienda virtual moderna, desacoplada e interactiva para la empresa de diseño y comercialización de muebles artesanales y contemporáneos **"Koa & Madera"**.

---

## 🏛️ Arquitectura del Sistema
El proyecto implementa una arquitectura desacoplada Frontend-Backend con comunicación mediante API RESTful:

```
+------------------------------------+           +---------------------------------------+
|        FRONTEND (ReactJS)          |           |        BACKEND (Django REST)          |
|                                    |           |                                       |
|  - Vite + React 19                 |           |  - Django 6 + Django REST Framework   |
|  - Material 3 Expressive Tokens    |  HTTP     |  - SQLite3 Database                   |
|  - Tailwind CSS + UI Components    | --------> |  - ViewSets & ModelSerializers        |
|  - Fetch Service Layer             |  (JSON)   |  - Django Admin Backoffice            |
|  - Category Filter & Product Cards |           |  - CORS Headers Middleware            |
+------------------------------------+           +---------------------------------------+
```

---

## 📁 Estructura del Directorio

```bash
djangoApp14/
├── backend/                  # Proyecto Backend en Django REST Framework
│   ├── catalogo/             # Aplicación de productos y categorías
│   │   ├── admin.py          # Configuración del panel de administración
│   │   ├── models.py         # Modelos Categoria y Producto (1:N)
│   │   ├── serializers.py    # Serializadores REST Framework
│   │   ├── urls.py           # Enrutamiento de endpoints
│   │   └── views.py          # ViewSets con filtrado de productos
│   ├── config/               # Configuración del proyecto Django (settings, urls, wsgi)
│   └── manage.py
├── frontend/                 # Aplicación Frontend en ReactJS con Vite
│   ├── src/
│   │   ├── components/       # Header, ProductCard, ProductList, CategoryFilter
│   │   │   └── ui/           # Componentes base M3 Expressive (Button, Badge, Card)
│   │   ├── lib/              # Utilidades y formateador de precios
│   │   ├── pages/            # CatalogPage (Gestión de estado y layout principal)
│   │   ├── services/         # api.js (Llamadas HTTP asíncronas con Fetch)
│   │   ├── App.jsx
│   │   ├── index.css         # Tokens de color M3 Expressive y elevación
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── docs/screenshots/        # Capturas de código y diseño del procedimiento
```

---

## 🚀 Guía de Instalación y Ejecución

### 1. Clonar el Repositorio
```bash
git clone https://github.com/Joxquin/djangoApp14-ecommerce-muebleria.git
cd djangoApp14-ecommerce-muebleria
```

### 2. Configurar y Ejecutar el Backend (Django)
```bash
# Crear entorno virtual e instalar requerimientos
python3 -m venv venv
source venv/bin/activate
pip install django djangorestframework django-cors-headers pillow

# Migraciones y servidor
cd backend
python manage.py makemigrations
python manage.py migrate
python manage.py runserver 8000
```
> **Credenciales de Administrador:**
> - URL Admin: `http://localhost:8000/admin/`
> - Usuario: `admin` | Contraseña: `admin123`

### 3. Configurar y Ejecutar el Frontend (ReactJS)
En una nueva terminal:
```bash
cd frontend
npm install
npm run dev
```
> La aplicación estará disponible en `http://localhost:5173/`.

---

## 🎨 Principios de Diseño: Material 3 Expressive
- **Paleta Orgánica & Expresiva:** Tonos terracota (`#944b00`), ocre cálido (`#745845`) y superficies crema suave (`#fff8f5`).
- **Formas Dinámicas:** Curvaturas acentuadas de 28px a 36px en tarjetas y contenedores (`rounded-[28px]`, `rounded-full`).
- **Micro-interacciones:** Chips de categoría interactivos con recuento dinámico de piezas, animaciones sutiles y estados de carga (skeletons) integrados.

---

## 👨‍💻 Autor
- **Desarrollado por:** Joxquin
- **Proyecto:** Laboratorio de Comercio Electrónico (ReactJS & Django REST Framework)

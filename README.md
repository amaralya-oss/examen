# 🌱 Ecotracker — Plataforma de compostaje doméstico

Ecotracker es una aplicación web que promueve hábitos sostenibles mediante soluciones para compostaje en el hogar. El sistema integra un sitio e-commerce orientado a usuarios y un panel administrativo para la gestión de productos, inventario y métricas de ventas.

El objetivo es facilitar la reducción de residuos orgánicos y fomentar la economía circular desde el hogar.

---

## 🧭 Estructura del sistema

El proyecto está compuesto por dos interfaces principales:

- 👤 Sitio público (usuarios)
- 🛠️ Panel administrativo (dashboard)

---

## 👤 Sitio web para usuarios

El sitio permite conocer la propuesta de valor de Ecotracker y adquirir productos relacionados con compostaje doméstico.

### 🔹 Navegación principal

- Sobre Ecotracker
- Cómo funciona
- Tienda (catálogo)
- Descarga de la app
- Carrito de compras

---

### 🌿 Sección informativa

Incluye contenido educativo sobre compostaje:

- Beneficios ambientales
- Reducción de residuos
- Uso de compost como fertilizante natural
- Control del proceso mediante app

También presenta una guía paso a paso:

1. Elegir la compostera
2. Instalarla correctamente
3. Monitorear el proceso
4. Utilizar el compost generado

---

### 🛒 Catálogo de productos

Los productos se organizan por categorías:

- Starter Kits
- Tecnología
- Accesorios
- Educación

Cada producto muestra:

- Nombre
- Categoría
- Precio
- Imagen
- Disponibilidad
- Descripción detallada (al visualizar)

---

### 🧺 Carrito de compras

El sistema incluye un carrito interactivo con funcionalidades típicas de e-commerce:

- Visualización de productos agregados
- Actualización de cantidades
- Eliminación de productos
- Cálculo automático del total
- Estado vacío cuando no hay productos
- Botones de acción:
  - Ir al pago
  - Continuar explorando

Además, incluye retroalimentación visual mediante mensajes emergentes.

---

### 📱 Promoción de la aplicación

El sitio informa sobre la futura app Ecotracker, que permitirá:

- Monitorear el compost en tiempo real
- Recibir alertas y recomendaciones
- Controlar el proceso desde cualquier lugar

---

## 🛠️ Panel de administrador

El sistema incluye un dashboard independiente destinado a la gestión de la tienda.

Permite supervisar métricas de negocio y administrar el inventario de productos.

---

### 📊 Métricas y KPI

El panel muestra indicadores clave:

- Ventas del mes
- Ingresos totales
- Pérdidas (devoluciones o merma)
- Ganancia neta
- Variación respecto al mes anterior

También incluye visualizaciones de:

- Ventas por semana
- Ventas por categoría

---

### 📦 Gestión de inventario

El administrador puede visualizar y editar todos los productos disponibles.

Cada registro incluye:

- Nombre del producto
- Categoría
- Precio
- Stock disponible
- Estado (OK / agotado)
- Acción de edición

---

### ✏️ Edición de productos

Desde el panel se pueden modificar:

- Nombre
- Descripción
- Precio
- Stock
- URL de la imagen

Los cambios se guardan y se reflejan automáticamente en el sitio público.

---

### 🚫 Control de disponibilidad

Cuando el stock de un producto llega a cero:

- El producto se marca como agotado
- Se deshabilita su compra en el sitio
- Se muestra un indicador visual de no disponibilidad

---

## 💾 Persistencia de datos

El proyecto utiliza **Local Storage** para simular una base de datos, lo que permite:

- Mantener inventario actualizado
- Persistir cambios del administrador
- Conservar información entre recargas del navegador

---

## 🧩 Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Vue.js (CDN)
- Web APIs (Local Storage)

---

## 🎯 Objetivo del proyecto

Desarrollar una solución interactiva que combine:

- Educación ambiental
- Experiencia de usuario moderna
- Simulación de comercio electrónico
- Gestión administrativa básica

---

## 🚀 Proyección futura

Posibles mejoras:

- Integración con base de datos real
- Sistema de autenticación para administrador
- Pasarela de pago
- Gestión de usuarios
- Analítica avanzada
- Publicación de la app móvil

---

## 📍 Ubicación

Santiago, Chile

---

## 👩‍💻 Autor

Proyecto desarrollado con fines académicos y demostrativos.

---

## 📄 Licencia

Uso educativo

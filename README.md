# 🎨 AKAL INFANTIL - Web Visual con Ilustraciones

Sistema completo con panel de administración y diseño visual atractivo con ilustraciones originales de Akal Infantil.

## 📦 Archivos para Subir a GitHub

```
akal-infantil-web/
├── index.html          # Página principal
├── styles.css          # Estilos modernos
├── script.js           # Funcionalidad
├── admin.js            # Panel de administración
├── README.md           # Este archivo
└── images/             # Carpeta de ilustraciones
    ├── logo-akal.jpg
    ├── ilustracion-cocina.jpg
    ├── ilustracion-elefante.jpg
    ├── ilustracion-casa-arbol.jpg
    ├── ilustracion-arbol-musical.jpg
    └── ilustracion-lluvia.jpg
```

## ✨ Características Visuales

### Logo de Akal Infantil
- Incluido en el header
- También en el footer
- Totalmente integrado en el diseño

### Ilustraciones Integradas
1. **Hero (inicio):** Árbol musical como fondo
2. **Sección Valores:** Ilustración de cocina con animales
3. **Sección Colecciones:** Elefante cocinando
4. **Catálogo:** Personajes bajo la lluvia
5. **Para Educadores:** Casa árbol con múltiples ambientes

### Diseño Visual
- Hero impactante a pantalla completa
- Ilustraciones flotantes con animaciones
- Gradientes modernos
- Sombras suaves y profesionales
- Totalmente responsive

## 🚀 Cómo Subir a GitHub

### IMPORTANTE: Estructura de Carpetas

Debes subir TODO junto manteniendo la estructura:

```
1. Crea carpeta: akal-infantil-web
2. Dentro pon:
   - index.html
   - styles.css
   - script.js
   - admin.js
   - README.md
   - 📁 images/ (con las 6 ilustraciones dentro)
```

### Paso 1: Preparar Archivos Localmente
1. Descarga todos los archivos
2. Crea la carpeta `images` y mete las 6 ilustraciones
3. Asegúrate de que todos los archivos están en la carpeta raíz

### Paso 2: Subir a GitHub
```bash
# Opción A: Por web (fácil)
1. Ve a github.com → New repository
2. Nombre: akal-infantil-web
3. Create repository
4. "uploading an existing file"
5. Arrastra TODO (incluida carpeta images)
6. Commit changes

# Opción B: Con Git
cd akal-infantil-web
git init
git add .
git commit -m "Web Akal Infantil con ilustraciones"
git remote add origin https://github.com/TU_USUARIO/akal-infantil-web.git
git push -u origin master
```

### Paso 3: Desplegar en Netlify
1. app.netlify.com → Add new site
2. Import from Git → GitHub
3. Selecciona repositorio
4. Deploy site
5. ¡Listo en 1 minuto!

## 🎨 Dónde se Usan las Ilustraciones

| Ilustración | Ubicación | Propósito |
|------------|-----------|-----------|
| logo-akal.jpg | Header + Footer | Identidad de marca |
| ilustracion-arbol-musical.jpg | Hero (fondo) | Impacto visual inicial |
| ilustracion-cocina.jpg | Sección Valores | Complemento visual |
| ilustracion-elefante.jpg | Sección Colecciones | Ilustración temática |
| ilustracion-lluvia.jpg | Catálogo | Personajes entrañables |
| ilustracion-casa-arbol.jpg | Para Educadores | Ambientes educativos |

## 📝 Cómo Funciona el Panel Admin

1. Click en botón ⚙️ (abajo derecha)
2. Contraseña: **akalinfantil2025**
3. Edita cualquier contenido
4. Sube nuevas imágenes a Cloudinary
5. Guarda cambios
6. Descarga HTML actualizado
7. Sube a GitHub

## 🖼️ Añadir Más Imágenes

### Opción 1: Usar Cloudinary (Recomendado)
1. Configura Cloudinary en admin.js
2. Sube imágenes desde el panel
3. Copia la URL
4. Úsala en cualquier sección

### Opción 2: Añadir a la Carpeta images/
1. Pon la nueva imagen en la carpeta `images/`
2. Referénciala como `images/nombre-archivo.jpg`
3. Sube de nuevo a GitHub

## ⚙️ Configuración de Cloudinary

Para subir archivos adicionales:

1. Crea cuenta en cloudinary.com (gratis)
2. Copia tu Cloud Name
3. Settings → Upload → Create unsigned preset
4. Edita `admin.js` líneas 245-246:
```javascript
const cloudName = 'tu-cloud-name';
const uploadPreset = 'tu-preset-name';
```
5. Sube `admin.js` a GitHub

## 🎯 Actualizar Contenido

### Textos y Contenido
- Usa el panel de administración
- Todo se guarda localmente
- Descarga HTML para publicar

### Imágenes de Libros
1. Sube a Cloudinary
2. Copia URL
3. Pégala en la sección correspondiente

### Nueva Sección
1. Panel → "Gestionar Secciones"
2. "+ Añadir Nueva Sección"
3. Elige tipo (valores, libros, texto)
4. Edita contenido
5. Guarda y descarga

## 🆘 Solución de Problemas

**Las imágenes no se ven**
- Verifica que la carpeta `images/` esté en GitHub
- Comprueba que los nombres de archivo coincidan

**El logo no aparece**
- Asegúrate de que `images/logo-akal.jpg` existe
- Verifica la ruta en index.html

**Las ilustraciones están pixeladas**
- Las imágenes originales tienen buena resolución
- Puede ser problema de caché del navegador (Ctrl+F5)

## 💡 Consejos

- **Mantén la carpeta images/** en la raíz del proyecto
- **No cambies los nombres** de las ilustraciones
- **Haz backups** descargando el HTML regularmente
- **Prueba localmente** antes de subir a GitHub

## 📞 Estructura Final en GitHub

```
akal-infantil-web/
│
├── index.html
├── styles.css
├── script.js
├── admin.js
├── README.md
│
└── images/
    ├── logo-akal.jpg (logo principal)
    ├── ilustracion-cocina.jpg (valores)
    ├── ilustracion-elefante.jpg (colecciones)
    ├── ilustracion-casa-arbol.jpg (educadores)
    ├── ilustracion-arbol-musical.jpg (hero)
    └── ilustracion-lluvia.jpg (catálogo)
```

## 🎉 ¡Todo Listo!

Tu web ahora incluye:
✅ Logo de Akal Infantil
✅ 5 ilustraciones integradas
✅ Diseño visual impactante
✅ Panel de administración completo
✅ Secciones modulares
✅ 100% responsive

---

**Desarrollado para Akal Infantil**  
Web visual con ilustraciones originales  
© 2025

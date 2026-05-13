# Landing Armonía

## ¿Qué es este proyecto?

Este repositorio contiene una página web de promoción para los talleres y servicios de Armonía Familiar IAP.

La aplicación está construida con:
- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Lucide Icons

## Funcionalidades principales

- Página de inicio con:
  - sección principal (`Hero`),
  - quiénes somos,
  - carrusel de talleres,
  - detalle dinámico del taller seleccionado,
  - secciones de colaboración y ayuda.
- Página de detalle de taller con:
  - información de fecha, hora y modalidad,
  - objetivos,
  - contenido,
  - botón de inscripción externo.
- Página de enlaces a redes sociales y contacto.
- Página de colaboración con opciones para trabajar con el equipo.

## Cómo ejecutar el proyecto

1. Abrir la terminal en la carpeta del proyecto:
   ```bash
   cd c:\Developer\social-service\landing-armonia
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abrir el navegador en la dirección que indique Vite (normalmente `http://localhost:5173`).

## Comandos útiles

- `npm run dev`: inicia el proyecto en modo desarrollo con recarga automática.
- `npm run build`: genera la versión de producción.
- `npm run preview`: sirve la versión generada para ver cómo queda el build.
- `npm run lint`: ejecuta ESLint para revisar el código.

## Estructura del proyecto

- `src/App.tsx`: definición de rutas principales y estructura general de la app.
- `src/pages/`: páginas principales de la aplicación.
- `src/components/`: componentes reutilizables y secciones internas.
- `src/components/layout/`: header, footer y layout general.
- `src/data/workshops.ts`: datos de los talleres.
- `src/data/socialLink.ts`: enlaces y redes sociales.
- `src/types/`: tipos TypeScript.
- `public/`: imágenes y activos estáticos.

## Descripción y uso de cada página y componente

- `src/App.tsx`
  - Uso: controla las rutas de la aplicación.
  - Incluye el `Header` y `Footer` en todas las vistas.
  - Define rutas para el inicio (`/`), detalle de taller (`/workshop/:id`), redes (`/redes`) y colaboración (`/colabora`).

- `src/pages/Home.tsx`
  - Uso: página principal de la landing.
  - Muestra el `Hero`, `WhoWeAre`, `WorkshopsCarousel`, `WorkshopDetail`, `ConocenosParticipa` y `HelpSection`.
  - Gestiona la selección de taller activo y el scroll hacia secciones internas desde el header.

- `src/pages/WorkshopDetailPage.tsx`
  - Uso: vista de información completa de un taller específico.
  - Muestra datos del taller, objetivos, contenido, galería de imágenes y contacto.
  - Se activa al navegar a `/workshop/:id`.

- `src/pages/LinkInBioPage.tsx`
  - Uso: página de redes sociales.
  - Muestra botones con iconos y enlaces a cada red social.
  - Ideal para campañas tipo "link in bio".

- `src/components/ColaboraPage.tsx`
  - Uso: página de colaboración y oportunidades.
  - Explica modalidades: voluntariado, servicio social y prácticas profesionales.
  - Incluye requisitos, beneficios y datos de contacto.

- `src/components/layout/Header.tsx`
  - Uso: barra superior de navegación.
  - Incluye logo, navegación por secciones y botón de ayuda.
  - Permite abrir un menú móvil en pantallas pequeñas.

- `src/components/layout/Footer.tsx`
  - Uso: pie de página global.
  - Contiene información de contacto, redes sociales y llamada a colaborar.
  - Inserta el aviso de privacidad y el año actual automáticamente.

- `src/components/layout/Layout.tsx`
  - Uso: contenedor de layout genérico.
  - Agrupa `Header`, `children` y `Footer` en un mismo diseño.
  - Está preparado para usarlo si se quiere envolver páginas completas.

- `src/components/Hero.tsx`
  - Uso: sección principal de bienvenida.
  - Presenta el mensaje más visible de la organización.

- `src/components/WhoWeAre.tsx`
  - Uso: sección de "Quiénes somos".
  - Explica la misión y valores de Armonía Familiar.

- `src/components/WorkshopsCarousel.tsx`
  - Uso: carrusel interactivo de talleres.
  - Permite ver varios talleres y seleccionar uno para ver detalles.

- `src/components/WorkshopDetail.tsx`
  - Uso: muestra el taller activo dentro de la página de inicio.
  - Presenta título, descripción breve y datos clave.

- `src/components/ConocenosParticipa.tsx`
  - Uso: llamada a la acción para conocer y participar.
  - Refuerza el mensaje de invitación a la comunidad.

- `src/components/HelpSection.tsx`
  - Uso: sección de ayuda y contacto.
  - Facilita que los visitantes pidan apoyo o más información.

- `src/components/ContactInfo.tsx`
  - Uso: bloque reutilizable de datos de contacto.
  - Se usa en la página `ColaboraPage` para mostrar email, teléfono y ubicación.

- `src/data/workshops.ts`
  - Uso: contiene los datos de todos los talleres.
  - Alimenta el carrusel y la página de detalle con información real.

- `src/data/socialLink.ts`
  - Uso: contiene enlaces a redes sociales y sus iconos.
  - Se usa en el footer y en la página de links.

## Cómo actualizar contenido

### Talleres

Los talleres se administran en `src/data/workshops.ts`.

Para agregar o modificar un taller:
1. Abrir `src/data/workshops.ts`.
2. Editar o añadir un objeto dentro del arreglo `workshops`.
3. Asegurarse de que cada taller tenga un `id` único y campos como:
   - `name`
   - `title`
   - `image`
   - `description`
   - `date`
   - `time`
   - `modality`
   - `objectives`
   - `content`
4. Si usas imágenes nuevas, colócalas en `public/workShop/<nombre-del-taller>/`.

### Enlaces de redes sociales

Los enlaces y los iconos de redes se configuran en `src/data/socialLink.ts`.

Para actualizar una red social:
1. Abrir `src/data/socialLink.ts`.
2. Modificar la URL o el icono de la entrada correspondiente.
3. Guardar el archivo.

### Rutas y navegación

Las rutas del sitio se definen en `src/App.tsx`:
- `/` → inicio
- `/workshop/:id` → detalle de taller
- `/redes` → página de redes sociales
- `/colabora` → página de colaboración

Si agregas una nueva página, registra la ruta y el componente en `src/App.tsx`.

## Cómo hacer cambios de diseño

- El estilo se aplica principalmente con clases de Tailwind CSS dentro de los componentes.
- El estilo global se encuentra en `src/index.css`.
- Para cambiar colores, tipografía o espaciado, edita las clases Tailwind en los componentes o ajusta la configuración de Tailwind si es necesario.

## Cómo llevar a cabo nuevas actualizaciones

1. Actualiza el contenido o el diseño en los archivos de `src/`.
2. Prueba en desarrollo con `npm run dev`.
3. Verifica que no haya errores con `npm run lint`.
4. Genera el build de producción con `npm run build`.
5. Si todo está bien, sube los cambios al control de versiones (`git`).

## Consejo para nuevos colaboradores

- Leer `src/App.tsx` para entender la estructura de rutas.
- Revisar `src/pages/` para conocer el flujo de cada vista.
- Abrir el sitio en el navegador y navegar al detalle de un taller para ver cómo se cargan los datos.

---

Este instructivo está pensado para personas ajenas al código que deben ejecutar, revisar o actualizar el proyecto de forma sencilla.

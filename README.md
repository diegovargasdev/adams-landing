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

- `src/App.tsx`: definición de rutas principales.
- `src/pages/`: páginas principales de la aplicación.
- `src/components/`: componentes reutilizables.
- `src/data/workshops.ts`: datos de los talleres.
- `src/data/socialLink.ts`: enlaces y redes sociales.
- `src/types/`: tipos TypeScript.
- `public/`: imágenes y activos estáticos.

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

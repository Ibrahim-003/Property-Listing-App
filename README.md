# Property Listing App

Property Listing App es una aplicación web desarrollada con TypeScript y React que permite a los usuarios buscar y listar propiedades. La aplicación incluye características como filtrado por ubicación y superhost.

## Vista Previa
![Captura del Proyecto](./src/assets/images/desktop-preview.webp)

Puedes ver la versión demo en vivo aquí: [Property Listing App](https://property-listing-app-phi.vercel.app/)

## Características

- Listado de propiedades con detalles como título, descripción, precio, calificación, superhost, ubicación, capacidad y una imagen.
- Filtrado de propiedades por ubicación.
- Filtrado de propiedades por superhost.

## Tecnologías Utilizadas
- ⚛️ **React** - Para la interfaz de usuario
- 📝 **TypeScript** - Para tipado estático y mejor mantenimiento del código
- 💅 **Tailwind CSS** - Para estilos modernos y responsivos
- 🔄 **Custom Hooks** - Para manejo de estado y lógica de negocio

## Estructura del Proyecto
```
property-listing-app-ts/
├── public/
│   ├── favicon.ico
│   └── vite.svg
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── setupTests.ts
│   ├── vite-env.d.ts
│   ├── assets/
│   │   ├── Expand_down.svg
│   │   ...
│   │   └── images/
│   ├── components/
│   │   ├── hero/
│   │   │   └── HeroSection.tsx
│   │   ├── property/
│   │   │   ├── filter/
│   │   │   │   ├── PropertyFilter.tsx
│   │   │   │   └── usePropertyFilters.tsx
│   │   │   ├── header/
│   │   │   │   └── PropertyHeader.tsx
│   │   │   ├── properties/
│   │   │   │   ├── PropertyCard.tsx
│   │   │   │   └── PropertyList.tsx
│   │   │   └── Property.tsx
│   │   ├── ui/
│   │   │   ├── Dropdown.tsx
│   │   │   └── SwitchButton.tsx
│   ├── config/
│   │   └── api.ts
│   ├── contants/
│   │   └── api.ts
│   ├── hooks/
│   │   ├── useFetchProperties.ts
│   │   └── usePropertiesFilter.tsx
│   ├── mocks/
│   │   └── propertiesData.json
│   ├── service/
│   │   └── githubApiProjects.tsx
│   └── types/
│       └── Property.ts
```

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto localmente:

1. Clona el repositorio:

    ```bash
    git clone https://github.com/Ibrahim-003/property-listing-app-ts.git
    cd property-listing-app-ts
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

3. Inicia la aplicación:

    ```bash
    npm start
    ```

La aplicación estará disponible en `http://localhost:3000`.

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

- `npm start`: Inicia la aplicación en modo de desarrollo.
- `npm test`: Ejecuta las pruebas.
- `npm run build`: Construye la aplicación para producción en la carpeta `build`.

## Autor 👨‍💻
Desarrollado por **[Ibrahim Almeyda](https://github.com/Ibrahim-003)**.

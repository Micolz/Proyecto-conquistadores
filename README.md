# Proyecto Conquistadores

Sistema web para la gestión de clubes de conquistadores: clubes, unidades,
miembros, clases y especialidades.

Es una aplicación de **solo lectura** construida sobre datos de prueba: todavía no
hay backend ni persistencia. El objetivo actual es modelar el dominio y la
navegación entre sus entidades.

## Créditos

El planteamiento y la especificación del sistema son del **Ing. Pedro Villa Casas**,
docente del proyecto. La implementación es de [Micolz](https://github.com/Micolz).

## Stack

| Herramienta  | Versión | Para qué                       |
| ------------ | ------- | ------------------------------ |
| React        | 19      | Interfaz                       |
| TypeScript   | 6       | Tipado del modelo de datos     |
| Vite         | 8       | Servidor de desarrollo y build |
| React Router | 8       | Navegación entre páginas       |
| Tailwind CSS | 4       | Estilos                        |
| Prettier     | 3.9     | Formato del código             |
| ESLint       | 10      | Reglas de código               |

Requiere **Node 22.22 o superior** (ver `.nvmrc`).

## Cómo correrlo

```bash
npm install     # instalar dependencias
npm run dev     # servidor de desarrollo en http://localhost:5173
```

Otros comandos:

```bash
npm run build         # compila TypeScript y genera dist/
npm run preview       # sirve el build de producción
npm run lint          # ESLint sobre todo el proyecto
npm run format        # aplica Prettier
npm run format:check  # verifica el formato sin escribir
```

## Modelo de datos

Los tipos viven en `src/types/index.ts`. Los datos se sirven como JSON desde
`public/` y se piden con `fetch`: hay un archivo por entidad (`clubes.json`,
`unidades.json`, `miembros.json`, `clases.json`, `especialidades.json`).

- **Club** — nombre, lema, logo, ciudad, estado, fechas de inicio y fin, si está activo.
- **Unidad** — grupo dentro de un club, con capitán y consejero (referencias a miembros) y sexo.
- **Miembro** — pertenece a un club y a una clase, opcionalmente a una unidad. Guarda
  datos de seguridad: padres, contacto de emergencia, alergias y cardiopatía.
- **Clase** — las siete clases progresivas (Amigo, Compañero, Explorador, Orientador,
  Viajero, Guía, Guía Mayor), cada una con color y orden.
- **Especialidad** — nombre, código, año, nivel y área. Las áreas son seis
  (`HM`, `AA`, `AP`, `AR`, `EN`, `AD`), con sus nombres en `nombresDeArea`
  (`src/constants.ts`) — son etiquetas de la interfaz, no datos, y por eso viven en
  el código y no en el JSON.

Las relaciones se resuelven por id: una unidad apunta a su `clubId`, un miembro a su
`clubId`, `claseId` y `unidadId`.

### Pendiente del modelo

Del planteamiento original faltan por modelar: **Directiva**, **Instructor**,
**Investidura**, **Asistencia** (con puntualidad y uniforme) y el historial de roles
multigeneracional.

## Estructura

```
public/                  Servido tal cual desde la raíz
├── clubes.json
├── unidades.json
├── miembros.json
├── clases.json
└── especialidades.json

src/
├── App.tsx              Rutas y cabecera
├── main.tsx             Punto de entrada
├── constants.ts         Etiquetas de la interfaz
├── types/index.ts       Interfaces del dominio
├── hooks/               Lógica con estado, reutilizable
│   ├── useDatos.ts      Hook genérico: fetch + carga + error
│   └── recursos.ts      Un hook por entidad, sobre useDatos
├── pages/               Vistas completas (una por ruta)
│   ├── ListaClubes.tsx
│   ├── DetalleClub.tsx
│   ├── ListaEspecialidades.tsx
│   └── NoEncontrado.tsx
└── components/          Piezas reutilizables
    ├── ClubCard.tsx
    ├── ListaUnidades.tsx
    ├── UnidadCard.tsx
    └── EspecialidadCard.tsx
```

## Rutas

| Ruta              | Página                              |
| ----------------- | ----------------------------------- |
| `/`               | Lista de clubes, con buscador       |
| `/clubes/:clubId` | Detalle de un club con sus unidades |
| `/especialidades` | Lista de especialidades             |
| `*`               | Página de no encontrado             |

import type { Club, Clase, Miembro, Unidad, Especialidad, AreaCodigo } from '../types'

export const clases: Clase[] = [
  { id: 1, nombre: 'Amigo', color: '#FFC107', logo: '', orden: 1 },
  { id: 2, nombre: 'Compañero', color: '#4CAF50', logo: '', orden: 2 },
  { id: 3, nombre: 'Explorador', color: '#2196F3', logo: '', orden: 3 },
  { id: 4, nombre: 'Orientador', color: '#9C27B0', logo: '', orden: 4 },
  { id: 5, nombre: 'Viajero', color: '#FF5722', logo: '', orden: 5 },
  { id: 6, nombre: 'Guía', color: '#607D8B', logo: '', orden: 6 },
  { id: 7, nombre: 'Guía Mayor', color: '#212121', logo: '', orden: 7 },
]

export const clubes: Club[] = [
  {
    id: 1,
    nombre: 'Águilas Reales',
    lema: 'Volando alto con fe',
    logo: '',
    fechaInicio: '1986-01-01',
    fechaFin: '',
    ciudad: 'Culiacán',
    estado: 'Sinaloa',
    activo: true,
  },
  {
    id: 2,
    nombre: 'Beta Crucis',
    lema: 'Luz en el camino',
    logo: '',
    fechaInicio: '2005-01-01',
    fechaFin: '',
    ciudad: 'Culiacán',
    estado: 'Sinaloa',
    activo: true,
  },
  {
    id: 3,
    nombre: 'Delfines',
    lema: 'Nadando hacia la meta',
    logo: '',
    fechaInicio: '2000-01-01',
    fechaFin: '',
    ciudad: 'Los Mochis',
    estado: 'Sinaloa',
    activo: true,
  },
  {
    id: 4,
    nombre: 'Polaris',
    lema: 'Guiados por la estrella',
    logo: '',
    fechaInicio: '2008-01-01',
    fechaFin: '',
    ciudad: 'Los Mochis',
    estado: 'Sinaloa',
    activo: true,
  },
]

export const miembros: Miembro[] = [
  {
    id: 1,
    nombre: 'Juan Pérez',
    fechaNacimiento: '2014-05-10',
    sexo: 'M',
    clubId: 3, // Delfines
    claseId: 1, // Amigo
    padres: 'Sr. y Sra. Pérez',
    contactoEmergencia: '667-000-0001',
  },
  {
    id: 2,
    nombre: 'Teresa Gómez',
    fechaNacimiento: '2012-03-22',
    sexo: 'F',
    clubId: 1, // Águilas Reales
    claseId: 2, // Compañero
    unidadId: 1,
    padres: 'Familia Gómez',
    contactoEmergencia: '667-000-0002',
  },
  {
    id: 3,
    nombre: 'Andrea Herrera',
    fechaNacimiento: '2014-01-15',
    sexo: 'F',
    clubId: 1,
    claseId: 2, // Compañero
    unidadId: 2,
    padres: 'Miguel Herrera',
    contactoEmergencia: '667-000-0003',
  },
  {
    id: 4,
    nombre: 'Santiago Herrera',
    fechaNacimiento: '2016-07-08',
    sexo: 'M',
    clubId: 1,
    claseId: 1, // Amigo
    padres: 'Miguel Herrera',
    contactoEmergencia: '667-000-0003',
  },
]

export const unidades: Unidad[] = [
  {
    id: 1,
    nombre: 'Gorrioncillos',
    lema: 'Pequeños pero valientes',
    logo: '/logos/Gorriones.png',
    clubId: 1, // Águilas Reales
    capitanId: 2,
    consejeroId: 2,
    sexo: 'F',
  },
  {
    id: 2,
    nombre: 'Palomas Mensajeras',
    lema: 'Llevando el mensaje',
    logo: '/logos/Palomas.png',
    clubId: 1,
    capitanId: 3,
    consejeroId: 2,
    sexo: 'F',
  },
]

export const especialidades: Especialidad[] = [
  { id: 1, nombre: 'Arañas', area: 'EN', codigo: 'EN-001', ano: 1928, nivel: 2 },
  { id: 2, nombre: 'Astronomía', area: 'EN', codigo: 'EN-002', ano: 1928, nivel: 2 },
  { id: 3, nombre: 'Radioaficionado', area: 'AP', codigo: 'AP-004', ano: 1928, nivel: 3 },
  { id: 4, nombre: 'Aves domésticas', area: 'EN', codigo: 'EN-004', ano: 1928, nivel: 2 },
  { id: 5, nombre: 'Guitarra', area: 'HM', codigo: 'HM-087', ano: 2012, nivel: 2 },
  { id: 6, nombre: 'Fruticultura 1', area: 'AA', codigo: 'AA-008', ano: 1929, nivel: 1 },
]


export const nombresDeArea: Record<AreaCodigo, string> = {
  HM: 'Habilidades Manuales',
  EN: 'Estudio de la Naturaleza',
  AA: 'Actividades Agrícolas',
  AP: 'Actividades Profesionales',
  AR: 'Actividades Recreativas',
  AD: 'Habilidades Domésticas'
}
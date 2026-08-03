export interface Club {
  id: number
  nombre: string
  lema: string
  logo: string
  fechaInicio: string
  fechaFin: string
  ciudad: string
  estado: string
  activo: boolean
}

export interface Clase {
  id: number
  nombre: string // Amigo, Compañero, Explorador, Orientador, Viajero, Guía, Guía Mayor
  color: string
  logo: string
  orden: number // 1-7, para saber la progresión
}

export interface Miembro {
  id: number
  nombre: string
  fechaNacimiento: string
  sexo: 'M' | 'F'
  clubId: number
  claseId: number
  unidadId?: number
  padres: string
  contactoEmergencia: string
  alergias?: string
  cardiopatia?: boolean
}

export interface Unidad {
  id: number
  nombre: string
  lema: string
  logo: string
  clubId: number
  capitanId: number // referencia a un miembro
  consejeroId: number
  sexo: 'M' | 'F'
}

export interface Especialidad {
  id: number
  nombre: string
  area: AreaCodigo
  codigo: string
  ano: number
  nivel: number
}

export type AreaCodigo = 'HM' | 'AA' | 'AP' | 'AR' | 'EN' | 'AD'

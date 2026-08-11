import type { Clase, Club, Especialidad, Miembro, Unidad } from '../types'
import { useDatos } from './useDatos'

// Un hook por recurso: el componente pide "clubes", no una URL suelta.
export const useClubes = () => useDatos<Club>('/clubes.json')
export const useUnidades = () => useDatos<Unidad>('/unidades.json')
export const useMiembros = () => useDatos<Miembro>('/miembros.json')
export const useClases = () => useDatos<Clase>('/clases.json')
export const useEspecialidades = () => useDatos<Especialidad>('/especialidades.json')

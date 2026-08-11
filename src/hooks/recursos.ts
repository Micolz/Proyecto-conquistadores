import { API } from '../constants'
import type { Clase, Club, Especialidad, Miembro, Unidad } from '../types'
import { useDatos } from './useDatos'

// Un hook por recurso: el componente pide "clubes", no una URL suelta.
export const useClubes = () => useDatos<Club>(`${API}/clubes`)
export const useUnidades = () => useDatos<Unidad>(`${API}/unidades`)
export const useMiembros = () => useDatos<Miembro>(`${API}/miembros`)
export const useClases = () => useDatos<Clase>(`${API}/clases`)
export const useEspecialidades = () => useDatos<Especialidad>(`${API}/especialidades`)

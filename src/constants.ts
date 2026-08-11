import type { AreaCodigo } from './types'

// Etiquetas de la interfaz, no datos: cambian con el código, no con la instalación.
export const nombresDeArea: Record<AreaCodigo, string> = {
  HM: 'Habilidades Manuales',
  EN: 'Estudio de la Naturaleza',
  AA: 'Actividades Agrícolas',
  AP: 'Actividades Profesionales',
  AR: 'Actividades Recreativas',
  AD: 'Habilidades Domésticas',
}

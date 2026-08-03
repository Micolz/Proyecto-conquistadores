import { nombresDeArea } from '../data/mockData'
import type { Especialidad } from '../types'

interface EspecialidadCardProps {
  especialidad: Especialidad
}

function EspecialidadCard({ especialidad }: EspecialidadCardProps) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <h2 className="text-lg font-semibold text-gray-900">{especialidad.nombre}</h2>
      <dl className="mt-3 space-y-1 text-sm text-gray-900">
        <div className="flex gap-1">
          <dt className="text-gray-500">Código:</dt>
          <dd>{especialidad.codigo}</dd>
        </div>
        <div className="flex gap-1">
          <dt className="text-gray-500">Área:</dt>
          <dd> {nombresDeArea[especialidad.area]}</dd>
        </div>
        <div className="flex gap-1">
          <dt className="text-gray-500">Nivel:</dt>
          <dd> {especialidad.nivel}</dd>
        </div>
      </dl>
    </article>
  )
}
export default EspecialidadCard

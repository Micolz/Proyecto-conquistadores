import { nombresDeArea } from '../data/mockData'
import type { Especialidad } from '../types'

interface EspecialidadCardProps {
  especialidad: Especialidad
}

function EspecialidadCard({ especialidad }: EspecialidadCardProps) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-2">
        <h2 className="text-lg font-semibold text-gray-900">{especialidad.nombre}</h2>
      </div>
      <dl className="mt-3 space-y-1 text-sm text-gray-900">
        <div className="flex gap-1">
          <dt className="font-medium">Código:</dt>
          <dd>
            <span className="text-gray-400 italic">{especialidad.codigo}</span>
          </dd>
        </div>
        <div className="flex gap-1">
          <dt className="font-medium">Área:</dt>
          <dd>
            <span className="text-gray-400 italic">{nombresDeArea[especialidad.area]}</span>
          </dd>
        </div>
        <div className="flex gap-1">
          <dt className="font-medium">Nivel:</dt>
          <dd>
            <span className="text-gray-400 italic">{especialidad.nivel}</span>
          </dd>
        </div>
      </dl>
    </article>
  )
}
export default EspecialidadCard

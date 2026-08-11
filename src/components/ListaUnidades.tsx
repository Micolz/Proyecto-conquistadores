import type { Miembro, Unidad } from '../types'
import UnidadCard from './UnidadCard'

interface ListaUnidadesProps {
  unidades: Unidad[]
  miembros: Miembro[]
}

function ListaUnidades({ unidades, miembros }: ListaUnidadesProps) {
  if (unidades.length === 0) {
    return <p className="text-sm text-gray-400 italic">Este club no tiene unidades registradas.</p>
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {unidades.map(unidad => (
        <UnidadCard
          key={unidad.id}
          unidad={unidad}
          capitan={miembros.find(miembro => miembro.id === unidad.capitanId)}
          consejero={miembros.find(miembro => miembro.id === unidad.consejeroId)}
          integrantes={miembros.filter(miembro => miembro.unidadId === unidad.id)}
        />
      ))}
    </div>
  )
}

export default ListaUnidades

import { Link, useParams } from 'react-router'
import NoEncontrado from './NoEncontrado'

import Aviso from '../components/Aviso'
import ListaUnidades from '../components/ListaUnidades'
import { useClases, useClubes, useMiembros, useUnidades } from '../hooks/recursos'

function DetalleClub() {
  const clubes = useClubes()
  const unidades = useUnidades()
  const miembros = useMiembros()
  const clases = useClases()
  // useParams siempre devuelve strings (o undefined): la URL es texto.
  const { clubId } = useParams()

  const cargando = clubes.cargando || unidades.cargando || miembros.cargando || clases.cargando
  const error = clubes.error ?? unidades.error ?? miembros.error ?? clases.error

  if (cargando) return <Aviso>Cargando el club…</Aviso>
  if (error) return <Aviso tono="error">{error}</Aviso>
  const club = clubes.datos.find(club => club.id === Number(clubId))

  if (!club) {
    return <NoEncontrado />
  }
  const unidadesDelClub = unidades.datos.filter(unidad => unidad.clubId === club.id)
  const miembrosDelClub = miembros.datos.filter(miembro => miembro.clubId === club.id)

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <Link to="/" className="text-sm text-blue-700 underline">
        ← Volver a clubes
      </Link>
      <header className="mt-4">
        <h1 className="text-3xl font-bold text-gray-900">{club.nombre}</h1>
        <p className="mt-1 text-gray-600 italic">{club.lema}</p>
        <p className="mt-2 text-sm text-gray-700">
          {club.ciudad}, {club.estado} · Fundado en {club.fechaInicio.slice(0, 4)}
        </p>
      </header>
      <section className="mt-8">
        <h2 className="mb-3 text-xs font-semibold tracking-wide text-gray-500 uppercase">
          Unidades ({unidadesDelClub.length})
        </h2>

        <ListaUnidades unidades={unidadesDelClub} miembros={miembros.datos} />
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xs font-semibold tracking-wide text-gray-500 uppercase">
          Miembros ({miembrosDelClub.length})
        </h2>

        {miembrosDelClub.length === 0 ? (
          <p className="text-sm text-gray-400 italic">Este club no tiene miembros registrados.</p>
        ) : (
          <ul className="divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white text-sm">
            {miembrosDelClub.map(miembro => {
              const clase = clases.datos.find(clase => clase.id === miembro.claseId)
              const unidad = unidades.datos.find(unidad => unidad.id === miembro.unidadId)
              return (
                <li key={miembro.id} className="flex flex-wrap gap-x-4 px-4 py-2">
                  <span className="font-medium text-gray-900">{miembro.nombre}</span>
                  <span className="text-gray-500">({miembro.sexo})</span>
                  <span className="text-gray-700">{clase?.nombre ?? 'Sin clase'}</span>
                  <span className="text-gray-500">{unidad?.nombre ?? 'Sin unidad'}</span>
                </li>
              )
            })}
          </ul>
        )}
      </section>
    </div>
  )
}

export default DetalleClub

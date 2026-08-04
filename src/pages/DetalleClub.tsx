import { Link, useParams } from 'react-router'
import { clases, clubes, miembros, unidades } from '../data/mockData'
import ListaUnidades from '../components/ListaUnidades'
import NoEncontrado from './NoEncontrado'

function DetalleClub() {
  // useParams siempre devuelve strings (o undefined): la URL es texto.
  const { clubId } = useParams()
  const club = clubes.find(club => club.id === Number(clubId))

  if (!club) {
    return <NoEncontrado />
  }

  const unidadesDelClub = unidades.filter(unidad => unidad.clubId === club.id)
  const miembrosDelClub = miembros.filter(miembro => miembro.clubId === club.id)

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

        <ListaUnidades unidades={unidadesDelClub} />
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
              const clase = clases.find(clase => clase.id === miembro.claseId)
              const unidad = unidades.find(unidad => unidad.id === miembro.unidadId)
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

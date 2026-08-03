import { clubes, miembros, unidades } from '../data/mockData'
import ClubCard from '../components/ClubCard'
import UnidadCard from '../components/UnidadCard'

function ListaClubes() {
  return (
    <div className="px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">Clubes</h1>

        <div className="space-y-8">
          {clubes.map(club => {
            const unidadesDelClub = unidades.filter(unidad => unidad.clubId === club.id)
            return (
              <section key={club.id}>
                <ClubCard club={club} />

                <div className="mt-4 ml-4 border-l-2 border-gray-200 pl-5">
                  <h3 className="mb-3 text-xs font-semibold tracking-wide text-gray-500 uppercase">
                    Unidades ({unidadesDelClub.length})
                  </h3>

                  {unidadesDelClub.length === 0 ? (
                    <p className="text-sm text-gray-400 italic">
                      Este club no tiene unidades registradas.
                    </p>
                  ) : (
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {unidadesDelClub.map(unidad => (
                        <UnidadCard
                          key={unidad.id}
                          unidad={unidad}
                          capitan={miembros.find(miembro => miembro.id === unidad.capitanId)}
                          consejero={miembros.find(miembro => miembro.id === unidad.consejeroId)}
                          integrantes={miembros.filter(miembro => miembro.unidadId === unidad.id)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ListaClubes

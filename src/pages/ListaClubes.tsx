import { clubes, miembros, unidades } from '../data/mockData'
import ClubCard from '../components/ClubCard'
import UnidadCard from '../components/UnidadCard'
import { useState } from 'react'

function ListaClubes() {
  const [ciudad, setCiudad] = useState('')
  const clubesFiltrados = clubes.filter(club => {
    const lowCiudad = ciudad.toLowerCase()
    const lowClubCiudad = club.ciudad.toLowerCase()
    return lowClubCiudad.includes(lowCiudad)
  })
  return (
    <div className="px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-4 text-3xl font-bold text-gray-900">Clubes</h1>

        <label className="mb-6 block">
          <span className="mb-1 block text-xs font-semibold tracking-wide text-gray-500 uppercase">
            Filtrar por ciudad
          </span>
          <input
            type="search"
            value={ciudad}
            onChange={e => setCiudad(e.target.value)}
            placeholder="Escribe una ciudad…"
            className="w-full max-w-sm rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none"
          />
        </label>
        <div className="space-y-8">
          {clubesFiltrados.length === 0 ? (
            <p className="text-sm text-gray-400 italic">No se encontraron clubes.</p>
          ) : (
            clubesFiltrados.map(club => {
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
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default ListaClubes

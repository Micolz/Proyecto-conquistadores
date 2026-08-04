import { clubes, unidades } from '../data/mockData'
import ClubCard from '../components/ClubCard'
import ListaUnidades from '../components/ListaUnidades'
import { useState } from 'react'
function sinAcentos(texto: string) {
  return texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}
function ListaClubes() {
  const [busqueda, setBusqueda] = useState('')

  const lowBusqueda = sinAcentos(busqueda)
  const clubesFiltrados = clubes.filter(club => {
    const lowCNombre = sinAcentos(club.nombre)
    const lowCCiudad = sinAcentos(club.ciudad)
    return lowCNombre.includes(lowBusqueda) || lowCCiudad.includes(lowBusqueda)
  })
  return (
    <div className="px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-4 text-3xl font-bold text-gray-900">Clubes</h1>

        <label className="mb-6 block">
          <span className="mb-1 block text-xs font-semibold tracking-wide text-gray-500 uppercase">
            Filtrar por ciudad/nombre
          </span>
          <input
            type="search"
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
            placeholder="Escribe una ciudad o nombre"
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

                    <ListaUnidades unidades={unidadesDelClub} />
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

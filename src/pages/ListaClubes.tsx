import Aviso from '../components/Aviso'
import ClubCard from '../components/ClubCard'
import ListaUnidades from '../components/ListaUnidades'
import { Link, useSearchParams } from 'react-router'
import { type ChangeEvent } from 'react'
import { useClubes, useMiembros, useUnidades } from '../hooks/recursos'

function sinAcentos(texto: string) {
  return texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

function ListaClubes() {
  const clubes = useClubes()
  const unidades = useUnidades()
  const miembros = useMiembros()
  const [searchParams, setSearchParams] = useSearchParams()

  const cargando = clubes.cargando || unidades.cargando || miembros.cargando
  const error = clubes.error ?? unidades.error ?? miembros.error

  if (cargando) return <Aviso>Cargando clubes…</Aviso>
  if (error) return <Aviso tono="error">{error}</Aviso>
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (value) {
      setSearchParams({ query: value }, { replace: true })
    } else {
      setSearchParams({}, { replace: true })
    }
  }
  const busqueda = searchParams.get('query') || ''
  const lowBusqueda = sinAcentos(busqueda)
  const clubesFiltrados = clubes.datos.filter(club => {
    const lowCNombre = sinAcentos(club.nombre)
    const lowCCiudad = sinAcentos(club.ciudad)
    return lowCNombre.includes(lowBusqueda) || lowCCiudad.includes(lowBusqueda)
  })

  return (
    <div className="px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-4 text-3xl font-bold text-gray-900">Clubes</h1>{' '}
        <Link to="/clubes/nuevo">Nuevo club</Link>
        <label className="mb-6 block">
          <span className="mb-1 block text-xs font-semibold tracking-wide text-gray-500 uppercase">
            Filtrar por ciudad/nombre
          </span>
          <input
            type="search"
            value={busqueda}
            onChange={handleChange}
            placeholder="Escribe una ciudad o nombre"
            className="w-full max-w-sm rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none"
          />
        </label>
        <div className="space-y-8">
          {clubesFiltrados.length === 0 ? (
            <p className="text-sm text-gray-400 italic">No se encontraron clubes.</p>
          ) : (
            clubesFiltrados.map(club => {
              const unidadesDelClub = unidades.datos.filter(unidad => unidad.clubId === club.id)
              return (
                <section key={club.id}>
                  <ClubCard club={club} />

                  <div className="mt-4 border-l-2 border-gray-200 pl-4 sm:ml-4 sm:pl-5">
                    <h3 className="mb-3 text-xs font-semibold tracking-wide text-gray-500 uppercase">
                      Unidades ({unidadesDelClub.length})
                    </h3>

                    <ListaUnidades unidades={unidadesDelClub} miembros={miembros.datos} />
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

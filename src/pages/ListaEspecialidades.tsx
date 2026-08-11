import EspecialidadCard from '../components/EspecialidadCard'
import { useEspecialidades } from '../hooks/recursos'

function ListaEspecialidades() {
  const especialidades = useEspecialidades()

  if (especialidades.cargando) return <p className="text-sm text-gray-500">Cargando...</p>
  if (especialidades.error) return <p className="text-sm text-red-600">{especialidades.error}</p>

  return (
    <div className="px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">Especialidades</h1>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {especialidades.datos.map(especialidad => {
            return <EspecialidadCard key={especialidad.id} especialidad={especialidad} />
          })}
        </div>
      </div>
    </div>
  )
}

export default ListaEspecialidades

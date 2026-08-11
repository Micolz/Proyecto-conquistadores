import Aviso from '../components/Aviso'
import EspecialidadCard from '../components/EspecialidadCard'
import { useEspecialidades } from '../hooks/recursos'

function ListaEspecialidades() {
  const especialidades = useEspecialidades()

  if (especialidades.cargando) return <Aviso>Cargando especialidades…</Aviso>
  if (especialidades.error) return <Aviso tono="error">{especialidades.error}</Aviso>

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

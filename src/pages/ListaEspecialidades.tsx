import EspecialidadCard from '../components/EspecialidadCard'
import { especialidades } from '../data/mockData'

function ListaEspecialidades() {
  return (
    <div className="px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">Especialidades</h1>
        <div className="space-y-8">
          {especialidades.map(especialidad => {
            return (
              <section key={especialidad.id}>
                <EspecialidadCard especialidad={especialidad} />
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ListaEspecialidades

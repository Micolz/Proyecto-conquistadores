import { Link } from 'react-router'

function NoEncontrado() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 text-center">
      <h1 className="text-2xl font-bold text-gray-900">Página no encontrada</h1>
      <p className="mt-2 text-gray-600">La dirección que buscas no existe o el club fue dado de baja.</p>
      <Link to="/" className="mt-6 inline-block text-blue-700 underline">
        Volver a la lista de clubes
      </Link>
    </div>
  )
}

export default NoEncontrado

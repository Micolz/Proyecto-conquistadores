import { Link, Route, Routes } from 'react-router'
import ListaClubes from './pages/ListaClubes'
import DetalleClub from './pages/DetalleClub'
import NoEncontrado from './pages/NoEncontrado'
import ListaEspecialidades from './pages/ListaEspecialidades'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <Link to="/" className="text-lg font-bold text-blue-700">
            Club de Conquistadores
          </Link>
          <nav className="flex gap-5">
            <Link
              to="/"
              className="text-sm font-medium text-blue-700 transition hover:text-blue-900"
            >
              Clubes
            </Link>
            <Link
              to="/especialidades"
              className="text-sm font-medium text-blue-700 transition hover:text-blue-900"
            >
              Especialidades
            </Link>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<ListaClubes />} />
        <Route path="/clubes/:clubId" element={<DetalleClub />} />
        <Route path="/especialidades" element={<ListaEspecialidades />} />
        <Route path="*" element={<NoEncontrado />} />
      </Routes>
    </div>
  )
}

export default App

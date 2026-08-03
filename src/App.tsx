import { Link, Route, Routes } from 'react-router'
import ListaClubes from './pages/ListaClubes'
import DetalleClub from './pages/DetalleClub'
import NoEncontrado from './pages/NoEncontrado'
import ListaEspecialidades from './pages/ListaEspecialidades'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-3">
          <Link to="/" className="text-lg font-bold text-blue-700">
            Club de Conquistadores
          </Link>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<ListaClubes />} />
        <Route path="/clubes/:clubId" element={<DetalleClub />} />
        <Route path="*" element={<NoEncontrado />} />
        <Route path="/lista-especialiades" element={<ListaEspecialidades/>}/>
      </Routes>
    </div>
  )
}

export default App

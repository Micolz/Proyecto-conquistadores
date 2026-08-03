import { Link } from 'react-router'
import type { Club } from '../types'

interface ClubCardProps {
  club: Club
}

function ClubCard({ club }: ClubCardProps) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-3">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold text-gray-900">
              <Link to={`/clubes/${club.id}`} className="hover:text-blue-700 hover:underline">
                {club.nombre}
              </Link>
            </h2>
            <span
              className={
                club.activo
                  ? 'rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800'
                  : 'rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600'
              }
            >
              {club.activo ? 'Activo' : 'Inactivo'}
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-600 italic">{club.lema}</p>
        </div>

        <dl className="flex gap-8 text-sm">
          <div>
            <dt className="text-xs tracking-wide text-gray-500 uppercase">Sede</dt>
            <dd className="mt-0.5 text-gray-800">
              {club.ciudad}, {club.estado}
            </dd>
          </div>
          <div>
            <dt className="text-xs tracking-wide text-gray-500 uppercase">Fundado</dt>
            <dd className="mt-0.5 text-gray-800">{club.fechaInicio.slice(0, 4)}</dd>
          </div>
        </dl>
      </div>
    </article>
  )
}

export default ClubCard

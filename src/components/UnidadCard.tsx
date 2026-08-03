import type { Miembro, Unidad } from '../types'

interface UnidadCardProps {
  unidad: Unidad
  capitan?: Miembro
  consejero?: Miembro
  integrantes: Miembro[]
}

function UnidadCard({ unidad, capitan, consejero, integrantes }: UnidadCardProps) {
  // Regla de negocio: el consejero y todos los integrantes deben ser del mismo sexo que la unidad.
  const consejeroNoCoincide = consejero !== undefined && consejero.sexo !== unidad.sexo

  return (
    <article className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-2">
        <h4 className="text-lg font-semibold text-gray-900">{unidad.nombre}</h4>
        {unidad.logo ? (
          <img
            src={unidad.logo}
            alt={`Logo de ${unidad.nombre}`}
            className="h-10 w-10 shrink-0 rounded-full object-contain"
          />
        ) : (
          <span
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-500"
          >
            {unidad.nombre.charAt(0)}
          </span>
        )}
      </div>

      <p className="mt-1 text-sm text-gray-600 italic">{unidad.lema}</p>

      <dl className="mt-3 space-y-1 text-sm text-gray-700">
        <div className="flex gap-1">
          <dt className="font-medium">Capitán:</dt>
          <dd>
            {capitan ? (
              <>
                {capitan.nombre} <span className="text-gray-500">({capitan.sexo})</span>
              </>
            ) : (
              <span className="text-gray-400 italic">Sin asignar</span>
            )}
          </dd>
        </div>
        <div className="flex gap-1">
          <dt className="font-medium">Consejero:</dt>
          <dd className={consejeroNoCoincide ? 'text-red-600' : undefined}>
            {consejero ? (
              <>
                {consejero.nombre}{' '}
                <span className={consejeroNoCoincide ? 'font-medium' : 'text-gray-500'}>
                  ({consejero.sexo})
                </span>
                {consejeroNoCoincide && (
                  <span title={`La unidad es ${unidad.sexo}`}> ⚠</span>
                )}
              </>
            ) : (
              <span className="text-gray-400 italic">Sin asignar</span>
            )}
          </dd>
        </div>
        <div className="flex gap-1">
          <dt className="font-medium">Sexo:</dt>
          <dd>{unidad.sexo}</dd>
        </div>
      </dl>

      <div className="mt-3 text-sm text-gray-700">
        <h5 className="mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase">
          Integrantes ({integrantes.length})
        </h5>

        {integrantes.length === 0 ? (
          <p className="text-gray-400 italic">Esta unidad no tiene integrantes registrados.</p>
        ) : (
          <ul className="list-disc space-y-0.5 pl-5">
            {integrantes.map(integrante => {
              const sexoNoCoincide = integrante.sexo !== unidad.sexo
              return (
                <li key={integrante.id} className={sexoNoCoincide ? 'text-red-600' : undefined}>
                  {integrante.nombre}{' '}
                  <span className={sexoNoCoincide ? 'font-medium' : 'text-gray-500'}>
                    ({integrante.sexo})
                  </span>
                  {sexoNoCoincide && (
                    <span title={`La unidad es ${unidad.sexo}`}> ⚠</span>
                  )}
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </article>
  )
}

export default UnidadCard

import type { ReactNode } from 'react'

interface AvisoProps {
  children: ReactNode
  tono?: 'neutro' | 'error'
}

/**
 * Mensaje a página completa para los estados de carga y de error.
 * Lleva el mismo ancho y respiración que el resto de las vistas.
 */
function Aviso({ children, tono = 'neutro' }: AvisoProps) {
  const esError = tono === 'error'

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <p
        role={esError ? 'alert' : 'status'}
        aria-live="polite"
        className={
          esError
            ? 'rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700'
            : 'animate-pulse text-sm text-gray-500'
        }
      >
        {children}
      </p>
    </div>
  )
}

export default Aviso

import { useEffect, useState } from 'react'

/**
 * Pide un arreglo de datos a una URL y lleva el estado de carga y de error.
 * El tipo T dice qué contiene el arreglo: useDatos<Club>('/clubes.json').
 */
export function useDatos<T>(url: string) {
  const [datos, setDatos] = useState<T[]>([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`No se pudieron cargar los datos de ${url}`)
        return res.json()
      })
      .then(data => setDatos(data))
      .catch(err => setError(err.message))
      .finally(() => setCargando(false))
  }, [url])

  return { datos, cargando, error }
}

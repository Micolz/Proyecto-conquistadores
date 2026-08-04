import { useEffect, useState } from 'react'
import type { Club } from '../types'

export function useClubes() {
  const [clubes, setClubes] = useState<Club[]>([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/clubes.json')
      .then(res => {
        if (!res.ok) throw new Error('No se pudieron cargar los clubes')
        return res.json()
      })
      .then(data => setClubes(data.clubes))
      .catch(err => setError(err.message))
      .finally(() => setCargando(false))
  }, [])

  return { clubes, cargando, error }
}

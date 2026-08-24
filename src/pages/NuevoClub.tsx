import { useState, type ChangeEvent, type SubmitEvent } from 'react'

function NuevoClub() {
  const [form, setForm] = useState({
    nombre: '',
    lema: '',
    ciudad: '',
    estado: '',
    fechaInicio: '',
  })
  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(form)
  }
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre
        <input name="nombre" value={form.nombre} onChange={handleChange} />
      </label>
      <label>
        Lema
        <input name="lema" value={form.lema} onChange={handleChange} />
      </label>
      <label>
        Ciudad
        <input name="ciudad" value={form.ciudad} onChange={handleChange} />
      </label>
      <label>
        Estado
        <input name="estado" value={form.estado} onChange={handleChange} />
      </label>
      <label>
        Fecha inicio
        <input type="date" name="fechaInicio" value={form.fechaInicio} onChange={handleChange} />
      </label>
      <button type="submit">Crear Club</button>
    </form>
  )
}
export default NuevoClub

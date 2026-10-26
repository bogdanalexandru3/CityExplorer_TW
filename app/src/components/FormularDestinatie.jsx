import { useState } from 'react'

export default function FormularDestinatie({ onAdd }) {
  const [oras, setOras] = useState('')
  const [tara, setTara] = useState('')
  const [zile, setZile] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const orasValidat = oras.trim()
    const taraValidata = tara.trim()

    if (!orasValidat || !taraValidata) {
      return
    }

    onAdd({
      id: crypto.randomUUID(),
      oras: orasValidat,
      tara: taraValidata,
      zile: Number(zile),
      vizitat: false,
    })
    setOras('')
    setTara('')
    setZile('')
  }

  return (
    <form className="formular" onSubmit={handleSubmit}>
      <input
        aria-label="Oraș"
        type="text"
        placeholder="Oraș"
        value={oras}
        onChange={(event) => setOras(event.target.value)}
        required
      />
      <input
        aria-label="Țară"
        type="text"
        placeholder="Țară"
        value={tara}
        onChange={(event) => setTara(event.target.value)}
        required
      />
      <input
        aria-label="Număr de zile"
        type="number"
        min="1"
        placeholder="Zile"
        value={zile}
        onChange={(event) => setZile(event.target.value)}
        required
      />
      <button type="submit">Adaugă destinație</button>
    </form>
  )
}

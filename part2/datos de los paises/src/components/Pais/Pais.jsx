
const Pais = ({nombre, capital, area, lenguajes, imagen}) => {
  return (
    <div>
      <h1>{nombre}</h1>
      <div>
        <p>{capital}</p>
        <p>{area}</p>
      </div>
      <h2>Lenguajes</h2>
      <ul>
        {Object.values(lenguajes).map((idioma, i) => (
          <li key={i}>{idioma}</li>
        ))}
      </ul>
      <img src={imagen} alt="imagen del pais" />
    </div>
  )
}

export default Pais
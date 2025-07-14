
const Formulario = ({ onChange, value}) => {
  return (
    <form >
        Escriba el pais:{""}
        <input 
        type="text"
        onChange={onChange}
        value={value}
        />
    </form>
  )
}

export default Formulario

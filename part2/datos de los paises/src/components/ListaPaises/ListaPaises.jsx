

const ListaPaises = ({ nombre, click }) => {
  return (
    <li>
      {nombre} <button onClick={() => click(nombre)}>ver</button>
    </li>
  );
};


export default ListaPaises
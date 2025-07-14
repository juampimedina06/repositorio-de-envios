import axios from "axios";
import { useEffect, useState } from "react";
import Pais from "./components/Pais/Pais";
import Formulario from "./components/Formulario/Formulario";
import ListaPaises from "./components/ListaPaises/ListaPaises";

const App = () => {
  const [paises, setPaises] = useState([]);
  const [nombrePais, setNombrePais] = useState("");

  useEffect(() => {
      axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((response) => {
        setPaises(response.data);
      })
      .catch((error) => {
        console.error("Error al buscar el país", error);
      });
  },[]);

  const handleOnChange = (event) => {
    setNombrePais(event.target.value);
  };

  const filtradorPaises = paises.filter((pais) => 
    pais.name.common.toLowerCase().includes(nombrePais.toLowerCase()))

  const diferentesPaises = () => {
    if (filtradorPaises.length > 10) {
      return <p>Por favor, sé más específico</p>
    } else if (filtradorPaises.length >= 2 && filtradorPaises.length <= 10) {
      return (
        <ul>
          {filtradorPaises.map((pais) => (
            <ListaPaises key={pais.name.common} nombre={pais.name.common} click={clickPais} />
          ))}
        </ul>
      );
    } else if (filtradorPaises.length === 1) {
      const { name, capital, area, languages, flags } = filtradorPaises[0]
      return (
        <Pais
          key={name.common}
          nombre={name.common}
          capital={capital}
          area={area}
          lenguajes={languages}
          imagen={flags.png}
        />
      );
    }
};

  const clickPais = (nombre) =>{
    setNombrePais(nombre)
  }

  return (
    <div>
      <Formulario value={nombrePais} onChange={handleOnChange} />
          {filtradorPaises.length === 0 ? (
            <p>No se encontro el pais </p>
          ) : (
          diferentesPaises()
        )}
    </div>
  )
}

export default App;

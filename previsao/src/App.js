import React, { useEffect, useState } from "react";
import X2JS from "x2js";
import axios from "axios";

function App() {
  const [temperatura, setTemperatura] = useState();

  useEffect(() => {
    obtemObj();
  }, []);

  async function obtemObj() {
    await axios
      .get("http://servicos.cptec.inpe.br/XML/capitais/condicoesAtuais.xml")
      .then((res) => {
        const x2js = new X2JS();
        const data = x2js.xml2js(res.data);
        const localizacoes = data.capitais.metar;
        let resultado = [];

        // localizacoes.map((linha) => console.log(linha));

        localizacoes.forEach((linha) => {
          if (
            linha.codigo === "SBJP" ||
            linha.codigo === "SBAR" ||
            linha.codigo === "SBBE" ||
            linha.codigo === "SBCF"
          ) {
            resultado.push(linha);
          }
        });
        console.log(resultado);
        setTemperatura(resultado);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <h1>PREVISÃO DO TEMPO - REGIÃO SUDESTE</h1>
      {temperatura[0].codigo}
    </div>
  );
}
export default App;

import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
 
const [temperatura, setTemperatura] = useState({})

  useEffect(() =>{
  temp()
},[])

const temp = () => {
   axios
   .get("https://api.factmaven.com/xml-to-json/?xml=http://servicos.cptec.inpe.br/XML/capitais/condicoesAtuais.xml")
   
   .then(res => {
       console.log(res.data.capitais.metar)
       setTemperatura(res.data.capitais.metar)
   })
   .catch(err => {
        console.log(err);
        
   })
}

return(
  <div>
    <h1>PREVISÃO DO TEMPO - REGIÃO SUDESTE</h1>
   
  </div>
)

}
export default App

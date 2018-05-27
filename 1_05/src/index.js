import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return (
    <div><h1>{props.kurssi.nimi}</h1></div>
  )
}
const Osa = (props) => {
  return (
    <div>
      <p>{props.osa.nimi} {props.osa.tehtavia}</p>
    </div>
  )
}
const Sisalto = (props) => {
  const kaikkiOsat = props.kurssi.osat.map( (osa) =>
    <Osa osa={osa} />);
  return (
    <div>
      {kaikkiOsat}
    </div>
  )
}
const Yhteensa = (props) => {
  const yhteensa = props.kurssi.osat
                        .map( (osa) => osa.tehtavia )
                        .reduce((summa, nyt) => summa + nyt);
  return (
    <div>
      <p>yhteensä {yhteensa} tehtävää</p>
    </div>
  )
}
const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto
        kurssi={kurssi} />
      <Yhteensa
        kurssi={kurssi} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

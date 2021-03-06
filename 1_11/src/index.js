import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = ({otsikko}) => {
  return (
    <div><h1>{otsikko}</h1></div>
  )
}

const Statistic = ({teksti, luku, extra}) => {
  return (
    <tr>
      <td>{teksti}:</td><td>{luku} {extra}</td>
    </tr>
  )
}

const Statistics = ({tilasto}) => {
  if (!tilasto.hyva && !tilasto.neutraali && !tilasto.huono) {
    return (
      <div>ei yhtään palautetta annettu</div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <Statistic teksti="hyvä" luku={tilasto.hyva} />
          <Statistic teksti="neutraali" luku={tilasto.neutraali} />
          <Statistic teksti="huono" luku={tilasto.huono}  />
          <Keskiarvo tilasto={tilasto} />
          <Positiivisia tilasto={tilasto} />
        </tbody>
      </table>
    </div>
  )
}

const Keskiarvo = ({tilasto}) => {
  let hyva = tilasto.hyva;
  let neutraali = tilasto.neutraali;
  let huono = tilasto.huono;
  let kokonaismaara = hyva + neutraali + huono;
  let keskiarvo = ((1 * hyva) + (-1 * huono)) / (1.0 * kokonaismaara);
  if (isNaN(keskiarvo)) {
    return (
      <tr>
        <td colSpan="2">Ei vielä lukuja josta muodostaa keskiarvo.</td>
      </tr>
    )
  }
  return (
    <Statistic teksti="keskiarvo" luku={keskiarvo.toFixed(2)} />
  )
}

const Positiivisia = ({tilasto}) => {
  let kokonaismaara = tilasto.hyva + tilasto.neutraali + tilasto.huono;
  let hyvienOsuus = tilasto.hyva / (1.0 * kokonaismaara) * 100;
  if (!hyvienOsuus) {
    return (
      <tr>
        <td colSpan="2">Ei vielä lukuja josta laskea positiivisen osuus.</td>
      </tr>
    )
  }
  return (
      <Statistic teksti="positiivisia" luku={hyvienOsuus.toFixed(2)} extra="%" />
  )
}

const Button = ({handler, teksti}) => {
  return (
    <button onClick={handler}>{teksti}</button>
  )
}

class UnicafeSurvey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hyva:0, neutraali:0, huono:0
    }
  }

  handler = (nimi) => {
    this.setState({[nimi]: this.state[nimi] + 1});
  }

  render() {
    return (
      <div>
        <Otsikko otsikko="anna palautetta" />
        <Button handler={()=>this.handler("hyva")} teksti="hyvä"/>
        <Button handler={()=>this.handler("neutraali")}teksti="neutraali" />
        <Button handler={()=>this.handler("huono")} teksti="huono" />
        <Otsikko otsikko="statistiikka" />
        <Statistics tilasto={this.state} />

      </div>
    );
  }
}
ReactDOM.render(
  <UnicafeSurvey />,
  document.getElementById('root')
)

import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = ({otsikko}) => {
  return (
    <div><h1>{otsikko}</h1></div>
  )
}

const Statistiikka = ({tilasto}) => {
  return (
    <div>
      hyvä: {tilasto.hyva}<br />
      neutraali: {tilasto.neutraali}<br />
      huono: {tilasto.huono}<br />
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
      <div>Ei vielä lukuja josta muodostaa keskiarvo.</div>
    )
  }
  return (
    <div>
      keskiarvo: {keskiarvo.toFixed(2)}
    </div>
  )
}

const Positiivisia = ({tilasto}) => {
  let kokonaismaara = tilasto.hyva + tilasto.neutraali + tilasto.huono;
  let hyvienOsuus = tilasto.hyva / (1.0 * kokonaismaara) * 100;
  if (!hyvienOsuus) {
    return (
      <div>Ei vielä lukuja josta laskea positiivisen osuus.</div>
    )
  }
  return (
    <div>
      positiivisia: {hyvienOsuus.toFixed(2)}%
    </div>
  )
}

class UnicafeSurvey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hyva:0, neutraali:0, huono:0
    }
  }

  hyvaHandler = () => {
    this.setState((prevState) => ({hyva: prevState.hyva + 1}));
  }

  neutraaliHandler = () => {
    this.setState((prevState) => ({neutraali: prevState.neutraali + 1}));
  }

  huonoHandler = () => {
    this.setState((prevState) => ({huono: prevState.huono + 1}));
  }

  render() {
    return (
      <div>
        <Otsikko otsikko="anna palautetta" />
        <button onClick={this.hyvaHandler}>hyvä</button>
        <button onClick={this.neutraaliHandler}>neutraali</button>
        <button onClick={this.huonoHandler}>huono</button>
        <Otsikko otsikko="statistiikka" />
        <Statistiikka tilasto={this.state} />
        <Keskiarvo tilasto={this.state} />
        <Positiivisia tilasto={this.state} />
      </div>
    );
  }
}
ReactDOM.render(
  <UnicafeSurvey />,
  document.getElementById('root')
)

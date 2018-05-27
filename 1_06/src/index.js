import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = ({otsikko}) => {
  return (
    <div><h1>{otsikko}</h1></div>
  )
}

const Statistiikka = (props) => {
  return (
    <div>
      hyvä: {props.tilasto.hyva}<br />
      neutraali: {props.tilasto.neutraali}<br />
      huono: {props.tilasto.huono}<br />
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
      </div>
    );
  }
}
ReactDOM.render(
  <UnicafeSurvey />,
  document.getElementById('root')
)

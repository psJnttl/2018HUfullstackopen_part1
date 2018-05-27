import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({handler}) => {
  return (
    <div>
      <button onClick={handler}>next anecdote</button>
    </div>
  )
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0
    }
  }

  getNextRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  handleRandom = () => {
    let random = this.getNextRandom(0, anecdotes.length);
    this.setState({selected: random});
  }

  render() {
    return (
      <div>
        <Button handler={this.handleRandom} />
        {this.props.anecdotes[this.state.selected]}
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

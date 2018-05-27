import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({handler, text}) => {
  return (
    <button onClick={handler}>{text}</button>
  )
}

const Anecdote = ({anecdotes, state}) => {
  return (
    <div>
      {anecdotes[state.selected]} <br/>
      has {state.votes[state.selected]} votes
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: [0,0,0,0,0,0]
    }
  }

  getNextRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  handleRandom = () => {
    let random = this.getNextRandom(0, anecdotes.length);
    this.setState({selected: random});
  }

  handleVote = () => {
    const copyVotes = {...this.state.votes}
    copyVotes[this.state.selected] += 1;
    this.setState({votes: copyVotes});
  }

  render() {
    return (
      <div>
        <Button handler={this.handleRandom} text="next anecdote" />
        <Button handler={this.handleVote} text="vote" />
        <Anecdote
          anecdotes={this.props.anecdotes}
          state={this.state} />
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

import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({handler, text}) => {
  return (
    <button onClick={handler}>{text}</button>
  )
}

const Anecdote = ({anecdotes, state}) => {
  const anec = state.votes.find((item) => {
    return item.index === state.selected;
  });
  if (! anec) {
    return null;
  }
  return (
    <div>
      {anecdotes[state.selected]} <br/>
      has {anec.votes} votes
    </div>
  )
}

const Top3Anecdotes = ({anecdotes, votes}) => {
  const items = [...votes];
  items.sort(function (a, b) {
    return b.votes - a.votes;
  });

  const topAnecdotes = []
  for (let i = 0; i < 3; i++) {
    if (items[i].votes > 0) {
      let item =
      <tr key={items[i].index}>
        <td>{items[i].votes}</td><td>{anecdotes[items[i].index]}</td>
      </tr>;
      topAnecdotes.push(item);
    }
  }
    return (
      <div>
        <h3>top3 anecdotes in terms of votes</h3>
        <table>
          <thead>
            <tr>
              <th>votes</th><th>anecdote</th>
            </tr>
          </thead>
          <tbody>{topAnecdotes}</tbody>
        </table>
      </div>
    )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: [{index:0, votes:0}, {index:1, votes:0}, {index:2, votes:0},
              {index:3, votes:0}, {index:4, votes:0}, {index:5, votes:0} ]
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
    const copyVotes = this.state.votes.map((item, index) => {
      if (item.index === this.state.selected) {
        item.votes += 1;
      }
      return item;
    });
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
        <Top3Anecdotes
          anecdotes={this.props.anecdotes}
          votes={this.state.votes}
        />
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

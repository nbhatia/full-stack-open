import React, { useState } from "react";
import ReactDOM from "react-dom";

const MostVotes = ({ most, anecdotes, votes }) => {
  let anecdote = anecdotes[most];
  let count = votes[most];
  console.log("most votes: ", most);

  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdote}</p>
      <p>has {count} votes</p>
    </div>
  );
};

const App = ({ anecdotes }) => {
  /* App State Variables */
  // 'selected' is the index of the randomly selected anecdote
  const [selected, setSelected] = useState(0);

  // votes is an array which contains the counts of votes for each respective anecdote
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const getRandom = max => {
    return Math.floor(Math.random() * max);
  };

  const randomAnecdote = () => {
    setSelected(getRandom(anecdotes.length));
  };

  const addVote = () => {
    var newVotes = [...votes];
    newVotes[selected]++;
    setVotes(newVotes);
  };

  return (
    <div>
      <h1>Anecdotes</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={randomAnecdote}>next</button>
      <button onClick={() => addVote()}>vote</button>
      <MostVotes
        most={votes.indexOf(Math.max(...votes))}
        anecdotes={anecdotes}
        votes={votes}
      />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
import React, { useState } from 'react';
import './App.css';

const leaderboardData = [
  { name: 'Ifunanya', score: 100, age: 25, gender: 'female' },
  { name: 'Goodnews', score: 50, age: 30, gender: 'male' },
  { name: 'Charles', score: 75, age: 40, gender: 'male' },
  { name: 'Onyebuchi', score: 75, age: 40, gender: 'male' },
  { name: 'Michael', score: 75, age: 40, gender: 'male' },
  { name: 'Ugochukwu', score: 75, age: 40, gender: 'male' },
  { name: 'Chiagozie', score: 75, age: 40, gender: 'male' },
  { name: 'Juliet', score: 75, age: 40, gender: 'male' },
  { name: 'Princess', score: 75, age: 40, gender: 'male' },
  { name: 'Alphonsine', score: 75, age: 40, gender: 'male' },
];

const Leaderboard = ({ data, onAdd, onRemove, onUpdate }) => {
  const [newPlayer, setNewPlayer] = useState({ name: '', score: 0, age: 0, gender: '' });

  const handleInputChange = (event) => {
    setNewPlayer({ ...newPlayer, [event.target.name]: event.target.value });
  };

  const handleAdd = () => {
    onAdd(newPlayer);
    setNewPlayer({ name: '', score: 0, age: 0, gender: '' });
  };

  return (
    <div>
      <h2>Learnable Frontend Leaderboard</h2>
      <div className="card-container">
        {data.sort((a, b) => b.score - a.score).map((player, index) => (
          <div className="card" key={index}>
            <h3>{player.name}</h3>
            <p>Score: {player.score}</p>
            <p>Age: {player.age}</p>
            <p>Gender: {player.gender}</p>
            <button onClick={() => onRemove(player)}>Remove</button>
            <button onClick={() => onUpdate(player)}>Update</button>
          </div>
        ))}
        <div className="card new-card">
          <h3>New Intern</h3>
          <form className="new-player-form">
            <label>Name:</label>
            <input type="text" name="name" placeholder="Name" value={newPlayer.name} onChange={handleInputChange} />
            <label>Score:</label>
            <input type="number" name="score" placeholder="Score" value={newPlayer.score} onChange={handleInputChange} />
            <label>Age:</label>
            <input type="number" name="age" placeholder="Age" value={newPlayer.age} onChange={handleInputChange} />
            <label>Gender:</label>
            <input type="text" name="gender" placeholder="Gender" value={newPlayer.gender} onChange={handleInputChange} />
            <button type="button" onClick={handleAdd} className="add-button">Add Intern</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [data, setData] = useState(leaderboardData);

  const handleAdd = (player) => {
    setData([...data, player]);
  };

  const handleRemove = (player) => {
    setData(data.filter((p) => p !== player));
  };

  const handleUpdate = (player) => {
    const newData = data.map((p) => (p === player ? { ...p, score: p.score + 10 } : p));
    setData(newData);
  };

  return (
    <div className="App">
      <Leaderboard data={data} onAdd={handleAdd} onRemove={handleRemove} onUpdate={handleUpdate} />
    </div>
  );
};

export default App;
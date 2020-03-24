import React, {useState} from 'react';
import './App.css';
import Form from './Form';
import Members from './Members';

function App() {
  const [member, setMember] = useState([]);

  const addMember = mem => {
    const newMember = {
      id: Date.now(),
      name: mem.name,
      email: mem.email,
      role: mem.role
    };
    setMember([...member, newMember])
  };

  return (
    <div className="App">
      <h1>My Team</h1>
      <div>
      <Form addMember={addMember} />
      <Members member={member} />
      </div>
    </div>
  );
}

export default App;

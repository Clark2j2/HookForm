import React, { useState } from 'react';
import './App.css';
import Form from './components/form'
import Results from './components/results'

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  return (
    <div className="App">
      <Form inputs={state} setInputs={setState} />
      <Results data={state} />
    </div>
  );
}

export default App;

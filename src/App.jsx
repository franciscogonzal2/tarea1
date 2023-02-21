import React, { useState } from 'react';
  import Input from './components/Input/Input';
  import User from './components/User/User';
  import "./App.css"
  
function App() {
    const [username, setUsername] = useState('');
  
    const handleSubmit = (value) => {
      setUsername(value);
    };
  
    return (
      <div className="App">
        <Input onSubmit={handleSubmit} />
        <User username={username} />
      </div>
    );
}
export default App;

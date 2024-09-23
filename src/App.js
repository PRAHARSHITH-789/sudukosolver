import React, { useState } from 'react';

function App() {
  const [form, setForm] = useState({ });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Name: </label>
        <input type="text" name="username" onChange={handleChange} value={form.username || ''} />
        <br />
        <label> Password: </label>
        <input type="text" name="password" onChange={handleChange} value={form.password || ''} />
        <br />
        <button type="submit">Submit</button>
        <br />
      </form>
      <p>{JSON.stringify(form)}</p>
    </div>
  );
}

export default App;

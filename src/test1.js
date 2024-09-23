import React, { useState, useEffect } from 'react';

export default function Test() {
  const [form, setForm] = useState({});
  const [users, setUsers] = useState([]); 
  const[userdata,setdata]=useState({});
  const[search,setsearch]=useState();// State to store user data

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form), // Sending the form data as JSON
      });

      const result = await response.json();
      setdata(result);
      console.log(result); // Display server response
      getUser(); // Refresh user data after submission
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
const handleinput= async (e)=>{

    console.log(e.target.value);
    try {
        const response = await fetch("http://localhost:8080", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(search), // Sending the form data as JSON
        });
  
        const result = await response.json();
        setdata(result);
        console.log(result); // Display server response
        getUser(); // Refresh user data after submission
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    
    

}

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // Fetch user data from backend
  const getUser = async () => {
    try {
      const response = await fetch("http://localhost:8080/data", {
        method: "GET",
      });
      const data = await response.json();
      setUsers(data); // Store fetched user data in state
      console.log(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Fetch user data on component mount
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Name: </label>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          value={form.username || ''}
        />
        <br />
        <label> Password: </label>
        <input
          type="text"
          name="password"
          onChange={handleChange}
          value={form.password || ''}
        />
        <br />
        <button type="submit">Submit</button>
        <br />
      </form>
      <p>{JSON.stringify(userdata)}</p>

      {/* Displaying the list of users */}
      <h3>Saved Users:</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.username} - {user.password}
          </li>


        ))}

        <input type="text" onChange={handleinput}/>
      </ul>
    </div>
  );
}

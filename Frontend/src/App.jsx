import { useEffect, useState } from 'react'
import axios from 'axios';
function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
     .then((response) => {
      console.log(response.data);
      setJokes(response.data);
     })
     .catch((error) => {
      console.error(error);
      alert("Failed to fetch jokes. Please try again later.");
    });
    
  })
  
  return (
    <>
      <h1 className="w-full flex items-center justify-center text-3xl">
      Hello Frontend</h1>
      <p className='w-full flex items-center justify-center text-2xl'>
      JOKES : {jokes.length}</p>
      {
        jokes.map((joke, index) => (
          <div className='w-full flex items-center justify-center text-xl' key={joke.id}>
            <h2>{index + 1}. {joke.desc}</h2>
          </div>
        ))   
      }
    </>
  )
}

export default App

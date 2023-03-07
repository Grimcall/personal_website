import React, {useState, useEffect} from 'react'
function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:5000").then(
      res => res.json()
    ).then(
      data =>{
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div>      
      {(typeof data.Test === 'undefined') ?(
          <p>Loading...</p>
      ) : (        
        data.Test.map((member, i) => (
          <p key = {i}> {member}</p>
        ))
      )}
    </div>
  )
}

export default App
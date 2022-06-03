import React, { useState }from 'react'
import { useNavigate } from 'react-router-dom'

const NewPirate = () => {
  const [ name, setName ] = useState("")
  const navigate = useNavigate()

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:9292/pirates', {
      method: "POST",
      headers: {
      'Content-Type': 'application/json'
    },
      body: JSON.stringify({ name })
    })
      .then(resp => resp.json())
      .then(data => {
        setName(data)
        navigate('/pirates')
      })
  }
  return (
    <div style={{ fontFamily: "fantasy", textAlign: "center", color:"#6991B3", fontSize: 30}}>
      <h1>Add Pirate</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input style={{ fontFamily: "fantasy", height: 35, width: 250, fontSize: 30}} 
          type="text"
           value={name}
           onChange={handleChange} 
           autoFocus={true}></input>
        </div>
        <br/>
        <input style={{ fontFamily: "fantasy", textAlign: "center", color:"black", height: 29, width: 150, fontSize: 18, backgroundColor: "#6991B3"}}type="submit" value="Create Pirate"/>
      </form>
    </div>
  )
}

export default NewPirate
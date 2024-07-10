import React, { useState } from 'react'
import './analysis_form.scss'
import axios from 'axios';
//What are your goals(eg retirement), how long do you want to invest(eg 2 years), risk kitna hai
const Analysis_form = () => {
    const [goals,setGoals] = useState("");
    const [time,setTime] = useState("");
    const [income,setIncome] = useState("")
    const [data,setData] = useState("");
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const res = await axios.post("http://localhost:8800/api/anal/form",{
            goals:goals,
            time:time,
            income:income
        })
        console.log(res);
        setData(res.data)
    }

  return (
    <>
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Analysis Form</h1>
          <label>What are your goals</label>
          <input
            name="goals"
            required
            minLength={3}
            maxLength={20}
            type="text"
            value={goals}
            onChange={(e)=>{
                setGoals(e.target.value)
            }}
            placeholder="Goals"
          />
          <label>How long do you want to invest</label>
          <input
            name="time"
            type="text"
            required
            value={time}

            onChange={(e)=>{
                setTime(e.target.value)
            }}
            placeholder="Duration of investment"
          />
          <label>What is your stable income ?</label>
          <input
            name="income"
            type="text"
            required
            value={income}
            onChange={(e)=>{
                setIncome(e.target.value);
            }}
            placeholder="Income"
          />
          <button >Submit your responses</button>
          {/* {error && <span>{error}</span>} */}
          {/* <Link to="/register">Don't have an account?</Link> */}
        </form>
      </div>
      {/* <div className="imgContainer">
        <img src="/stockmarket.webp" alt="" />
      </div> */}
    </div>
    {data?<div>{data}</div>:""}
    </>
    
  )
}

export default Analysis_form
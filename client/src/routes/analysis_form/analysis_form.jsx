import React, { useState } from 'react'
// import './analysis_form.scss'
import './NewOwner.css'; // Import CSS stylesheet
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
//What are your goals(eg retirement), how long do you want to invest(eg 2 years), risk kitna hai
const Analysis_form = () => {
  const [goals, setGoals] = useState('');
  const [riskTolerance, setRiskTolerance] = useState('');
  const [timeHorizon, setTimeHorizon] = useState('');
  const [fin, setFin] = useState('');
  

  const handleGoalsChange = (event) => {
    setGoals(event.target.value);
  };

  const handleToleranceChange = (event) => {
    setRiskTolerance(event.target.value);
  };

  const handleTimeHorizonChange = (event) => {
    setTimeHorizon(event.target.value);
  };

  const handleFinChange = (event) => {
    setFin(event.target.value);
  };

  return (
    <>
    <form className="form">
      <div className="form-group">
        <label className="form-label">What are your financial goals?</label>
        <div className="radio-group">
          <input type="radio" id="healthcare" name="goals" value="Long term growth" onChange={handleGoalsChange} />
          <label htmlFor="healthcare">Long-term growth</label>

          <input type="radio" id="education" name="goals" value="Income generation" onChange={handleGoalsChange} />
          <label htmlFor="education">Income Generation</label>

          <input type="radio" id="finance" name="goals" value="Capital Preservation" onChange={handleGoalsChange} />
          <label htmlFor="finance">Capital Preservation</label>

          {/* <input type="radio" id="tech" name="industry" value="tech" onChange={handleIndustryChange} />
          <label htmlFor="tech">Tech</label>

          <input type="radio" id="other" name="industry" value="other" onChange={handleIndustryChange} />
          <label htmlFor="other">Other</label> */}
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">Your Risk Tolerance?</label>
        <div className="radio-group">
          <input type="radio" id="minimalistic" name="riskTolerance" value="minimalistic" onChange={handleToleranceChange} />
          <label htmlFor="minimalistic">High Risk</label>

          <input type="radio" id="modern" name="riskTolerance" value="modern" onChange={handleToleranceChange} />
          <label htmlFor="modern">Moderate Risk</label>

          <input type="radio" id="vintage" name="riskTolerance" value="vintage" onChange={handleToleranceChange} />
          <label htmlFor="vintage">Low Risk</label>

          {/* <input type="radio" id="corporate" name="designPref" value="corporate" onChange={handleDesignPrefChange} />
          <label htmlFor="corporate">Corporate</label>

          <input type="radio" id="playful" name="designPref" value="playful" onChange={handleDesignPrefChange} />
          <label htmlFor="playful">Playful</label> */}
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">Your Time Horizon?</label>
        <div className="radio-group">
          <input type="radio" id="minimalistic" name="timeHorizon" value="minimalistic" onChange={handleTimeHorizonChange} />
          <label htmlFor="minimalistic">Short Term</label>

          <input type="radio" id="modern" name="timeHorizon" value="modern" onChange={handleTimeHorizonChange} />
          <label htmlFor="modern">Medium Term</label>

          <input type="radio" id="vintage" name="timeHorizon" value="vintage" onChange={handleTimeHorizonChange} />
          <label htmlFor="vintage">Long Term</label>

          {/* <input type="radio" id="corporate" name="designPref" value="corporate" onChange={handleDesignPrefChange} />
          <label htmlFor="corporate">Corporate</label>

          <input type="radio" id="playful" name="designPref" value="playful" onChange={handleDesignPrefChange} />
          <label htmlFor="playful">Playful</label> */}
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">Your current financial situation?</label>
        <div className="radio-group">
          <input type="radio" id="minimalistic" name="fin" value="minimalistic" onChange={handleFinChange} />
          <label htmlFor="minimalistic">net worth?</label>

          <input type="radio" id="modern" name="fin" value="modern" onChange={handleFinChange} />
          <label htmlFor="modern">debt?</label>

          <input type="radio" id="vintage" name="fin" value="vintage" onChange={handleFinChange} />
          <label htmlFor="vintage">goals?</label>

          {/* <input type="radio" id="corporate" name="designPref" value="corporate" onChange={handleDesignPrefChange} />
          <label htmlFor="corporate">Corporate</label>

          <input type="radio" id="playful" name="designPref" value="playful" onChange={handleDesignPrefChange} />
          <label htmlFor="playful">Playful</label> */}
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">Mutual Fund details</label>
        <div className="radio-group">
          <input type="text" placeholder='name' id="minimalistic" name="designPref" value="minimalistic" />
          
          <input type="text" placeholder='type' id="modern" name="designPref" value="modern"  />
          

          <input type="text" id="vintage" placeholder='expense ratio' name="designPref" value="vintage"  />
          <input type="text" id="vintage" placeholder='minimum investment requirement' name="designPref" value="vintage"  />
          <input type="text" id="vintage" placeholder='sharpe ratio' name="designPref" value="vintage" onChange/>

          {/* <input type="radio" id="corporate" name="designPref" value="corporate" onChange={handleDesignPrefChange} />
          <label htmlFor="corporate">Corporate</label>

          <input type="radio" id="playful" name="designPref" value="playful" onChange={handleDesignPrefChange} />
          <label htmlFor="playful">Playful</label> */}
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="startupDescription">Your current Portfolio</label>
        <textarea id="startupDescription" className="form-textarea"   />
      </div>
      {/* <div className="form-group">
        <label className="form-label">USP:</label>
        <div className="radio-group">
          <input type="radio" id="innovative" name="usp" value="innovative" onChange={handleUSPChange} />
          <label htmlFor="innovative">Innovative</label>

          <input type="radio" id="cost-effective" name="usp" value="cost-effective" onChange={handleUSPChange} />
          <label htmlFor="cost-effective">Cost-effective</label>

          <input type="radio" id="user-friendly" name="usp" value="user-friendly" onChange={handleUSPChange} />
          <label htmlFor="user-friendly">User-friendly</label>

          <input type="radio" id="high-quality" name="usp" value="high-quality" onChange={handleUSPChange} />
          <label htmlFor="high-quality">High-quality</label>

          <input type="radio" id="customizable" name="usp" value="customizable" onChange={handleUSPChange} />
          <label htmlFor="customizable">Customizable</label>
        </div>
        <div className="form-group">
        <label className="form-label">Avatar:</label>
        <input type="radio" class="btn-check" name="options" id="option4" autocomplete="off"/>
        <label class="btn btn-secondary snoop" for="option4"></label>

        <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off"/>
        <label class="btn btn-secondary williams" for="option2"></label>

        <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off"/>
        <label class="btn btn-secondary kanye" for="option1"></label>

        <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off"/>
        <label class="btn btn-secondary guruji" for="option3"></label>

        </div>
      </div> */}
    </form>
    </>
    
  )
}

export default Analysis_form
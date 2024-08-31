import { useState } from "react"
import "./style.scss"
import CalculatedResults from "./CalculatedResults"

  export default function MortgageForm(){
    let [newMortgageAmount, setNewMortgageAmount] = useState("")
    // let [mortgageAmountEntered, setMortgageAmountEntered] = useState([])
    let [mortgageTermEntered, setMortgageTermEntered] = useState([])
    let [interestRateEntered, setInterestRateEntered] = useState([])



    function clearInputValues(){
      setNewMortgageAmount("")
      setMortgageTermEntered("")
      setInterestRateEntered("")

      let getMortgageMsg = document.getElementById("errorMortgage")
      let getTermMsg = document.getElementById("errorTerm")
      let getInterestMsg = document.getElementById("errorInterest")
      let getRadioMsg = document.getElementById("errorRadio")

      let getResultsShownHere = document.getElementById("initialView")
      let getShowResults = document.getElementById("showResults")

      if(getMortgageMsg.hidden === false){
        getMortgageMsg.setAttribute("hidden", true)
      }
      if(getTermMsg.hidden === false){
        getTermMsg.setAttribute("hidden", true)
      }
      if(getInterestMsg.hidden === false){
        getInterestMsg.setAttribute("hidden", true)
      }
      if(getRadioMsg.hidden === false){
        getRadioMsg.setAttribute("hidden", true)
      }
      if(getResultsShownHere.hidden === true){
        getResultsShownHere.removeAttribute("hidden")
      }
      if(getShowResults.hidden === false){
        getShowResults.setAttribute("hidden", true)
      }
    }


  return(
  <>
    <div className="mortgageApp">
      <h1>Mortgage Calculator</h1>
      <button id="reset" type="reset" onClick={() => clearInputValues()}>Clear All</button>
      <div id="mortForm" className="mortgageCalculator">
        <div className="amount">
          <label htmlFor="item">Mortgage Amount</label>
          <input
          type="number"
          name="newMortgageAmount"
          value={newMortgageAmount}
          onChange={e => setNewMortgageAmount(e.target.value)}
          id="item"
          // required
          />
          <p id="errorMortgage" className="errorMortgage" hidden>This field is required</p>
        </div>
          <div className="mortgageTerm">
            <label htmlFor="item">Mortgage Term</label>
            <input
            type="number"
            name="mortgageTermEntered"
            value={mortgageTermEntered}
            onChange={e => setMortgageTermEntered(e.target.value)}
            id="item"
            // required
            />
            <p id="errorTerm" className="errorTerm" hidden>This field is required</p>
          </div>

          <div className="interestRate">
            <label htmlFor="item">Interest Rate</label>
            <input
            type="number"
            name="interestRateEntered"
            value={interestRateEntered}
            onChange={e => setInterestRateEntered(e.target.value)}
            id="item"
            // required
            />
            <p id="errorInterest" className="errorInterest" hidden>This field is required</p>
          </div>

          <fieldset>
            <legend>Mortgage Type</legend>
            <div className="form-control radio-control">
              <input
              type="radio"
              name="type"
              id="repayment"
              value="repayment"
            // checked={radioButtonRepayment === "repayment"}
            // onChange={e => setRadioRepayment(e.target.value)}
              />
              <label htmlFor="repayment">Repayment</label>
            </div>
            <div className="form-control radio-control">
              <input
              type="radio"
              name="type"
              id="interest-only"
              value="interest-only"
            // checked={values.type === "interest-only"}
            // onChange={handleChanges}
              />
              <label htmlFor="interest-only">Interest Only</label>
            </div>
            <p id="errorRadio" className="errorRadio" hidden>This field is required</p>
          </fieldset>
            <button className="btn btn-warning">Calculate Payment</button>
        </div>
    </div>
  </>
  )
}
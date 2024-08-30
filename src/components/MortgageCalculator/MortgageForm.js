import { useState } from "react"
import "./style.scss"

// export default function MortgageForm(){
  //LIKE this^^^ you get an error that says a module CANNOT have multiple default exports
  export default function MortgageForm(){
    let [newMortgageAmount, setNewMortgageAmount] = useState("")
    //^^ newMorgageAmount and other are immutable, they cant be changed
    // setNewMortgageAmount("adfasdf") <-- this would cause infinite loop DONT DO
    //WHAT THIS DOES: useState(""): value is set to setNewMortgageAmount, which is an EMPTY STRING so were decalring that the INPUT always has a VALUE of EMPTY STRING ("") BUT here were saying that we are NEVER updating it so therefore it NEVER gets changed

  //IF returning JSX from a function that starts with a CAPITAL letter is called a component, which is for breaking down individual parts of an APP.
    //SO, in this APP, a component can be the WHOLE APP, THE CALCULATION PART, AND THE RESULTS PART

    // console.log("SEE: " +newMortgageAmount) THIS VAR TRax keystrokes
    let [mortgageAmountEntered, setMortgageAmountEntered] = useState([])
    //Any type of data we want to rerender our input data, we want to put those inside a state^^^
    let [mortgageTermEntered, setMortgageTermEntered] = useState([])
    console.log("mortgageTermEntered: " +mortgageTermEntered);
    // console.log("plus:: " + (mortgageAmountEntered + newMortgageAmount))
    let x = parseInt(newMortgageAmount)
    let y = parseInt(mortgageTermEntered)
    console.log("plus:: " + (x + y))
    let [interestRateEntered, setInterestRateEntered] = useState([])
    console.log("intrest R*: " +interestRateEntered)

  return(
  // this (BELOW <>) is called a fragment "<>"
  <>
    <div className="mortgageApp">
      <button id="reset" type="reset">Clear All</button>
      <div className="mortgageCalculator">
        <div className="amount">
        <label htmlFor="item">Mortgage Amount</label>
        <input
          type="number"
          name="newMortgageAmount"
          value={newMortgageAmount}
          onChange={e => setNewMortgageAmount(e.target.value)}
          //HERE we are saying: Whenever I change the input, get the new value of the input, set that as my newMortgageAmount, rerun the component (function MortgageForm(){...}) and now the value (value={newMortgageAmount}) is set to my newMortgageAmoun
          id="item"
          required
          />
          </div>
          <div className="mortgageTerm">
            <label htmlFor="item">Mortgage Term</label>
            <input
            type="number"
            name="mortgageTermEntered"
            value={mortgageTermEntered}
            onChange={e => setMortgageTermEntered(e.target.value)}
          //HERE we are saying: Whenever I change the input, get the new value of the input, set that as my newMortgageAmount, rerun the component (function MortgageForm(){...}) and now the value (value={newMortgageAmount}) is set to my newMortgageAmoun
            id="item"
            required
            />
          </div>

          <div className="interestRate">
            <label htmlFor="item">Interest Rate</label>
            <input
            type="number"
            name="interestRateEntered"
            value={interestRateEntered}
            onChange={e => setInterestRateEntered(e.target.value)}
          //HERE we are saying: Whenever I change the input, get the new value of the input, set that as my newMortgageAmount, rerun the component (function MortgageForm(){...}) and now the value (value={newMortgageAmount}) is set to my newMortgageAmoun
            id="item"
            required
            />
          </div>

          <fieldset>
        <legend>Mortgage Type</legend>
        <div className="form-control radio-control">
          <input
            type="radio"
            name="type"
            id="repayment"
            value="repayment"


          />
          <label htmlFor="repayment">Repayment</label>
        </div>
        <div className="form-control radio-control">
          <input
            type="radio"
            name="type"
            id="interest-only"
            value="interest-only"

          />
          <label htmlFor="interest-only">Interest Only</label>
        </div>

      </fieldset>


      </div>
    </div>
    <button className="btn btn-warning">Calculate Payment</button>

  </>
  //COMPONENTS in REACT can only return ONE ELEMENT
  )
}

// export default MortgageForm
  //CUZ were EXPORTING AT FUNCTION we DONT need this
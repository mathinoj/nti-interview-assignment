import { useState } from "react"
import "./style.scss"

  export default function MortgageForm(){
    let [newMortgageAmount, setNewMortgageAmount] = useState("")
    // let [mortgageAmountEntered, setMortgageAmountEntered] = useState([])
    let [mortgageTermEntered, setMortgageTermEntered] = useState([])
    let [interestRateEntered, setInterestRateEntered] = useState([])

  return(
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
          </fieldset>
            <button className="btn btn-warning">Calculate Payment</button>
        </div>
    </div>
  </>
  )
}
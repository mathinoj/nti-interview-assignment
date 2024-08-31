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
      <button id="reset" className="btn btn-link" type="reset" onClick={() => clearInputValues()}>Clear All</button>
      <div id="mortForm" className="mortgageCalculator">
        <div className="amount mb-3">
          <label htmlFor="basic-url item" className="form-label">Mortgage Amount</label>
          <div className="input-group">
          <span className="input-group-text">&#163;</span>
          <input
          type="number"
          className="form-control"
          name="newMortgageAmount"
          value={newMortgageAmount}
          onChange={e => setNewMortgageAmount(e.target.value)}
          id="item"
          // required
          />
          </div>
          <p id="errorMortgage" className="text-danger errorMortgage" hidden>This field is required</p>
        </div>
          <div className="mortgageTerm mb-3">
            <label htmlFor="basic-url item" className="form-label">Mortgage Term</label>
            <div className="input-group">
            <input
            type="number"
            className="form-control"
            name="mortgageTermEntered"
            value={mortgageTermEntered}
            onChange={e => setMortgageTermEntered(e.target.value)}
            id="item"
            // required
            />
            <span className="input-group-text">Years</span>
            </div>
            <p id="errorTerm" className="text-danger errorTerm" hidden>This field is required</p>
          </div>

          <div className="interestRate mb-3">
            <label htmlFor="basic-url item" className="form-label">Interest Rate</label>
            <div className="input-group">
            <input
            type="number"
            className="form-control"
            name="interestRateEntered"
            value={interestRateEntered}
            onChange={e => setInterestRateEntered(e.target.value)}
            id="item"
            // required
            />
            <span className="input-group-text">%</span>
            </div>
            <p id="errorInterest" className="text-danger errorInterest" hidden>This field is required</p>
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



// return (
//   <>
//     <div className="container mortgageApp">
//       <h1 className="text-center my-4">Mortgage Calculator</h1>
//       <button
//         id="reset"
//         type="reset"
//         className="btn btn-secondary mb-4"
//         onClick={() => clearInputValues()}
//       >
//         Clear All
//       </button>
//       <div id="mortForm" className="mortgageCalculator">
//         <div className="form-group">
//           <label htmlFor="item">Mortgage Amount</label>
//           <input
//             type="number"
//             className="form-control"
//             name="newMortgageAmount"
//             value={newMortgageAmount}
//             onChange={(e) => setNewMortgageAmount(e.target.value)}
//             id="item"
//           />
//           <p id="errorMortgage" className="text-danger errorMortgage" hidden>
//             This field is required
//           </p>
//         </div>
//         <div className="form-group">
//           <label htmlFor="item">Mortgage Term</label>
//           <input
//             type="number"
//             className="form-control"
//             name="mortgageTermEntered"
//             value={mortgageTermEntered}
//             onChange={(e) => setMortgageTermEntered(e.target.value)}
//             id="item"
//           />
//           <p id="errorTerm" className="text-danger errorTerm" hidden>
//             This field is required
//           </p>
//         </div>
//         <div className="form-group">
//           <label htmlFor="item">Interest Rate</label>
//           <input
//             type="number"
//             className="form-control"
//             name="interestRateEntered"
//             value={interestRateEntered}
//             onChange={(e) => setInterestRateEntered(e.target.value)}
//             id="item"
//           />
//           <p id="errorInterest" className="text-danger errorInterest" hidden>
//             This field is required
//           </p>
//         </div>
//         <fieldset className="form-group">
//           <legend>Mortgage Type</legend>
//           <div className="form-check">
//             <input
//               type="radio"
//               className="form-check-input"
//               name="type"
//               id="repayment"
//               value="repayment"
//             />
//             <label className="form-check-label" htmlFor="repayment">
//               Repayment
//             </label>
//           </div>
//           <div className="form-check">
//             <input
//               type="radio"
//               className="form-check-input"
//               name="type"
//               id="interest-only"
//               value="interest-only"
//             />
//             <label className="form-check-label" htmlFor="interest-only">
//               Interest Only
//             </label>
//           </div>
//           <p id="errorRadio" className="text-danger errorRadio" hidden>
//             This field is required
//           </p>
//         </fieldset>
//         <button className="btn btn-warning">Calculate Payment</button>
//       </div>
//     </div>
//   </>
// );
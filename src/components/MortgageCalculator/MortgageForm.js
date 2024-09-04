import { useState } from "react"
import "./style.scss"

  export default function MortgageForm(){
    let [newMortgageAmount, setNewMortgageAmount] = useState("")
    let [mortgageTermEntered, setMortgageTermEntered] = useState([])
    let [interestRateEntered, setInterestRateEntered] = useState([])

  //THESE 3 functions remove the red border onClick when inputs are empty
  let x = document.getElementById("itemMortgage")
  console.log(x);

  function removeAmountStyle(){
    let mortStyle = document.getElementById("itemMortgage2")
    let mortStyleTab = document.getElementById("tabColorSpecial2")
    // console.log(mortStyle.id);
    // let mortStyleId = mortStyle.id;
    // if(mortStyle.id === "itemMortgage2"){
    //   console.log("this is treu!");
      // mortStyle.id = "itemMortgage"
      // mortStyleTab.id = "tabColorSpecial"
    // }

  }
  function removeTermStyle(){
    let termStyle = document.getElementById("itemTerm2")
    let termStyleTab = document.getElementById("tabColorAgain")
    // termStyle.id = "itemTerm"
    // termStyleTab.id = "tabColor"
  }
  function removeRateStyle(){
    let rateStyle = document.getElementById("itemInterest2")
    let rateStyleTab = document.getElementById("tabColor3")
    // rateStyle.id = "itemInterest"
    // rateStyleTab.id = "tabColor2"
  }
  console.log(newMortgageAmount)

    //Function to clear inputs on click
    function clearInputValues(){
      setNewMortgageAmount("")
      setMortgageTermEntered("")
      setInterestRateEntered("")

      removeAmountStyle()
      removeTermStyle()
      removeRateStyle()



      let getMortgageMsg = document.getElementById("errorMortgage")
      let getTermMsg = document.getElementById("errorTerm")
      let getInterestMsg = document.getElementById("errorInterest")
      let getRadioMsg = document.getElementById("errorRadio")

      let getResultsShownHere = document.getElementById("initialResultsView")
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
    <div id="mortgageApp" className="mortgageApp">
      <div id="titleDiv" className="title mb-2">
        <h1 id="mortgageTitle" className="boldIt mt-2 my-1 py-2">Mortgage Calculator</h1>
        <button id="reset" className="btn btn-link" type="reset" onClick={() => clearInputValues()}>Clear All</button>
      </div>
      <div id="mortForm" className="mortgageCalculator">
        <div className="amount p-1 px-0 py-3">
          <label htmlFor="basic-url item" className="form-label">Mortgage Amount</label>
          <div id="mortRev" className="input-group d-flex flex-row-reverse">
            <input
            type="number"
            className="form-control p-2 shadow-none border-start-0"
            name="newMortgageAmount"
            value={newMortgageAmount}
            onChange={e => setNewMortgageAmount(e.target.value)}
            id="itemMortgage"
            // onClick={removeAmountStyle}
            min="0"
            // onMouseMove={handleMouseOver}
            // onMouseOut={handleMouseLeave}
            // required
            />
            <span id="tabColorSpecial" className="input-group-text border-end-0">&#163;</span>
          </div>
          <p id="errorMortgage" className="text-danger errorMortgage" hidden>This field is required</p>
        </div>
        <div className="term-rate">
          <div className="mortgageTerm mb-3">
            <label htmlFor="basic-url item" className="form-label">Mortgage Term</label>
            <div className="input-group">
            <input
            type="number"
            className="form-control border-end-0 shadow-none"
            name="mortgageTermEntered"
            value={mortgageTermEntered}
            onChange={e => setMortgageTermEntered(e.target.value)}
            id="itemTerm"
            // onClick={removeTermStyle}
            min="1"
            // required
            />
            <span id="tabColor" className="input-group-text border-start-0">Years</span>
            </div>
            <p id="errorTerm" className="text-danger errorTerm" hidden>This field is required</p>
          </div>

          <div className="interestRate mb-3">
            <label htmlFor="basic-url item" className="form-label">Interest Rate</label>
            <div className="input-group">
            <input
            type="number"
            className="form-control border-end-0  shadow-none"
            name="interestRateEntered"
            value={interestRateEntered}
            onChange={e => setInterestRateEntered(e.target.value)}
            id="itemInterest"
            // onClick={removeRateStyle}
            min="0"
            // required
            />
            <span id="tabColor2" className="input-group-text border-start-0">%</span>
            </div>
            <p id="errorInterest" className="text-danger errorInterest" hidden>This field is required</p>
          </div>
        </div>
          <fieldset>
            <label>Mortgage Type</label>

            <div id="radioBorder" className="form-control radio-control d-flex align-items-center gap-2 p-2 my-2  shadow-none">
              <input
              type="radio"
              name="type"
              id="repayment"
              value="repayment"
              />
              <label className="boldIt" htmlFor="repayment">Repayment</label>
            </div>
            <div id="radioBorder" className="form-control radio-control d-flex align-items-center gap-2 p-2 my-2  shadow-none">
              <input
              type="radio"
              name="type"
              id="interest-only"
              value="interest-only"
              />
              <label className="boldIt" htmlFor="interest-only">Interest Only</label>
            </div>
            <p id="errorRadio" className="text-danger errorRadio" hidden>This field is required</p>
          </fieldset>
            <button id="calcButton" className="btn btn-warning d-flex justify-content-center align-items-center gap-2 px-3 py-2 mx-1">
              <img src="../images/icon-calculator.svg" alt="calculator icon" />
              <span>Calculate Payment</span>
            </button>
        </div>
    </div>
  </>
  )
}
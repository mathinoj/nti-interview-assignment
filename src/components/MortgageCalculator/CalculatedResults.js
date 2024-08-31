import { useState } from "react"
import "./style.scss"


export default function CalculatedResults(){


  return(
    <>
    {/* <div id="calcRez" className="calculatedResults text-center"> */}
      <div id="initialView" className="first">
        <img src="../images/illustration-empty.svg" alt="calculator icon" />
        <h1>Results shown here</h1>
        <p id="resultsFontColor">Complete the form and click “calculate repayments” to see what your monthly repayments would be.

        </p>
      </div>


    <div id="showResults" className="second" hidden>
      {/* <div className="total"> */}
        <h1>Your results</h1>
        <p id="resultsFontColor">Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.
        </p>
        <div className="total">
          <div className="monthly-total">
            <span id="resultsFontColor">Your monthly repayments</span>
            <h1 id="mortgageAmount"></h1>
          </div>
          <hr />
          <div className="grand-total">
            <span id="resultsFontColor">Total you'll repay over the term</span>
            <h3 id="totalRepayment"></h3>
          </div>
        </div>
    </div>
    {/* </div> */}

    </>

  )





}
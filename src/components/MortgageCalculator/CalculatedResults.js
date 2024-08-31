import { useState } from "react"
import "./style.scss"


export default function CalculatedResults(){


  return(
    <>
    <div id="calcRez" className="calculatedResults">
      <div id="initialView" className="first">
        <img src="../images/illustration-empty.svg" alt="calculator icon" />
        <h1>Results shown here</h1>
        <p>Complete the form and click “calculate repayments” to see what your monthly repayments would be.

        </p>
      </div>

      
      <div id="showResults" className="second" hidden>
        <h1>Your results</h1>
        <p>Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.
        </p>
        <span>Your monthly repayments</span>
        <h3 id="mortgageAmount"></h3>
        <span>Total you'll repay over the term</span>
        <h4 id="totalRepayment"></h4>
      </div>
    </div>

    </>

  )





}
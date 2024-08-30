import { useState } from "react"
import "./style.scss"

export default function CalculatedResults(){

  // let x = document.getElementById("x");
  // x.addEventListener('click', function(){
  //   alert('llllll')
  // })



  return(
    <>
    <div id="calcRez" className="calculatedResults">
      <div id="initialView" className="first">
        <h1>Results shown here</h1>
        <p>Complete the form and click “calculate repayments” to see what your monthly repayments would be.

        </p>
      </div>
      <div id="showResults" className="second" hidden>
        <h1>Your results</h1>
        <p>Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.
        </p>
        <h3 id="mortgageAmount"></h3>
        <h4 id="totalRepayment"></h4>
      </div>
    </div>

    </>

  )





}
"use client";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import "./style.scss";
import MortgageForm from "./MortgageForm"
import CalculatedResults from './CalculatedResults'

const MortgageCalculator = ({ ...props }) => {
	const formRef = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(formRef.current);
		const data = Object.fromEntries(formData.entries());
		console.log(data);

		let mortgageAmount = parseFloat(data.newMortgageAmount);
		let mortgageTerm = parseFloat(data.mortgageTermEntered);
		let interestRate = parseFloat(data.interestRateEntered);
		let radioButtonChosen = data.type

		//ERROR HANDLING
		let errorMortgage = document.getElementById("errorMortgage")
		let errorTerm = document.getElementById("errorTerm")
		let errorInterest = document.getElementById("errorInterest")
		let errorRadio = document.getElementById("errorRadio")

		let mortBorder = document.getElementById("itemMortgage")
		let tabColorSpecial = document.getElementById("tabColorSpecial");

		let termBorder = document.getElementById("itemTerm")
		let tabColor = document.getElementById("tabColor");

		let rateBorder = document.getElementById("itemInterest")
		let tabColor2 = document.getElementById("tabColor2");

		if(data.newMortgageAmount === ""){
			errorMortgage.removeAttribute("hidden")
			mortBorder.style.borderColor = 'red';
			tabColorSpecial.style.borderColor = 'red';
			tabColorSpecial.style.backgroundColor = 'red';
			tabColorSpecial.style.color = 'white';
		}else{
			errorMortgage.setAttribute("hidden", true)
		}
		if(data.mortgageTermEntered === ""){
			errorTerm.removeAttribute("hidden")
			termBorder.style.borderColor = 'red';
			tabColor.style.borderColor = 'red';
			tabColor.style.backgroundColor = 'red';
			tabColor.style.color = 'white';
		}else{
			errorTerm.setAttribute("hidden", true)
		}
		if(data.interestRateEntered === ""){
			errorInterest.removeAttribute("hidden")
			rateBorder.style.borderColor = 'red';
			tabColor2.style.borderColor = 'red';
			tabColor2.style.backgroundColor = 'red';
			tabColor2.style.color = 'white';
		}else{
			errorInterest.setAttribute("hidden", true)
		}
		if(data.type === undefined){
			errorRadio.removeAttribute("hidden")
		}else{
			errorRadio.setAttribute("hidden", true)
		}
		//ERROR HANDLING^^^^


		//This handles all calculations ONLY if ALL inputs/radios are NOT empty
		if(radioButtonChosen !== undefined && data.newMortgageAmount !== "" && data.mortgageTermEntered !== "" && data.interestRateEntered !== ""){
			let convertInterestToPercent = interestRate/100;
			let monthlyRate = convertInterestToPercent/12;
			let topHalf = mortgageAmount * (monthlyRate);
			let exponent = (12*mortgageTerm) * -1;
			let bottomHalf = 1 - (Math.pow((monthlyRate + 1), exponent))
			let divideTopBot = topHalf / bottomHalf;
			let monthlyPayment = (Math.round((divideTopBot) * 100) / 100).toFixed(2);
			//https://www.youtube.com/watch?v=-5cw1xc8pTw <--How to calculate Mortgage Payment

			// Total Repayment = monthlyPayment * n
			//n = Total number of payments (mortgage term in years * 12)
			let termTimesTwelve = mortgageTerm * 12
			let monthlyTimesTerm = monthlyPayment * termTimesTwelve
			let totalRepayment = (Math.round((monthlyTimesTerm) * 100) / 100).toFixed(2);

			//This formats the currency and sets it on the screen
			let getMortgageAmount = document.getElementById("mortgageAmount")
			let getTotalRepayment = document.getElementById("totalRepayment")
			let mortgageToPound = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(monthlyPayment);
			let repaymentToPound = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(totalRepayment);
			getMortgageAmount.innerHTML = mortgageToPound
			getTotalRepayment.innerHTML  = repaymentToPound

			//These hide/show the results
			let hideOnSubmit = document.getElementById('initialResultsView')
			hideOnSubmit.setAttribute("hidden", true)

			let showResults = document.getElementById('showResults');
			showResults.removeAttribute("hidden");
		}


	};
	return (
		<>
		<div id="container">
				<form id="mortgage-calculator-form"
				className="mortgage-calculator d-flex flex-column flex-md-row bg-white w-100"
				ref={formRef}
				onSubmit={handleSubmit}
				>
					<MortgageForm/>
					{/* TAKE IT AWAY! */}
				</form>
			<div id="calcResults">
				<CalculatedResults/>
			</div>
		</div>
	</>
	);
};

export default MortgageCalculator;
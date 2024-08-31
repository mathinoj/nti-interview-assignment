"use client";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import "./style.scss";
import MortgageForm from "./MortgageForm"
import CalculatedResults from './CalculatedResults'

const MortgageCalculator = ({ ...props }) => {
	const formRef = useRef(null);
	// let [newMortgageAmount, setNewMortgageAmount] = useState("")
	// let [mortgageTermEntered, setMortgageTermEntered] = useState([])
	// let [interestRateEntered, setInterestRateEntered] = useState([])


	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(formRef.current);
		const data = Object.fromEntries(formData.entries());
		console.log(data);

		let mortgageAmount = parseFloat(data.newMortgageAmount);
		let mortgageTerm = parseFloat(data.mortgageTermEntered);
		let interestRate = parseFloat(data.interestRateEntered);
		let radioButtonChosen = data.type

		let errorMortgage = document.getElementById("errorMortgage")
		let errorTerm = document.getElementById("errorTerm")
		let errorInterest = document.getElementById("errorInterest")
		let errorRadio = document.getElementById("errorRadio")



		if(data.newMortgageAmount === ""){
			errorMortgage.removeAttribute("hidden")
		}else{
			errorMortgage.setAttribute("hidden", true)
		}
		if(data.mortgageTermEntered === ""){
			errorTerm.removeAttribute("hidden")
		}else{
			errorTerm.setAttribute("hidden", true)
		}
		if(data.interestRateEntered === ""){
			errorInterest.removeAttribute("hidden")
		}else{
			errorInterest.setAttribute("hidden", true)
		}
		if(data.type === undefined){
			errorRadio.removeAttribute("hidden")
		}else{
			errorRadio.setAttribute("hidden", true)
		}


		if(radioButtonChosen !== undefined && data.newMortgageAmount !== "" && data.mortgageTermEntered !== "" && data.interestRateEntered !== ""){

			let hideOnSubmit = document.getElementById('initialView')
			hideOnSubmit.setAttribute("hidden", true)

			let showResults = document.getElementById('showResults');
			showResults.removeAttribute("hidden");

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

			let getMortgageAmount = document.getElementById("mortgageAmount")
			let getTotalRepayment = document.getElementById("totalRepayment")
			getMortgageAmount.innerHTML = monthlyPayment
			getTotalRepayment.innerHTML  = totalRepayment
		}

	};
	return (
		<div id="container">
			<div id="form">
				<form id="mForm"
				className="mortgage-calculator d-flex flex-column flex-md-row bg-white rounded-4 w-100"
				ref={formRef}
				onSubmit={handleSubmit}
				>
					<MortgageForm/>
					{/* TAKE IT AWAY! */}
				</form>
		</div>
		<div id="calcResults">
			<CalculatedResults/>
		</div>
	</div>
	);
};

export default MortgageCalculator;

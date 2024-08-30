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
		console.log("mortgageAmount: " +mortgageAmount);
		let mortgageTerm = parseFloat(data.mortgageTermEntered);
		console.log("mortgageTerm: " +mortgageTerm);
		let interestRate = parseFloat(data.interestRateEntered);
		console.log("interestRate: " +interestRate);
		let radioButtonChosen = data.type
		console.log("radioButtonChosen: " +radioButtonChosen)


		if(radioButtonChosen === "repayment"){
			let removeOnSubmit = document.getElementById('removeFirst')
			removeOnSubmit.remove()

			console.log("Repayment was selected")
			let convertInterestToPercent = interestRate/100;
			let monthlyRate = convertInterestToPercent/12;
			let topHalf = mortgageAmount * (monthlyRate);
			let exponent = (12*mortgageTerm) * -1;
			let bottomHalf = 1 - (Math.pow((monthlyRate + 1), exponent))
			let divideTopBot = topHalf / bottomHalf;
			let monthlyPayment = (Math.round((divideTopBot) * 100) / 100).toFixed(2);
			console.log("Monthly Payment: " +monthlyPayment)
			//https://www.youtube.com/watch?v=-5cw1xc8pTw <--How to calculate Mortgage Payment

			// Total Repayment = monthlyPayment * n
			//n = Total number of payments (mortgage term in years * 12)
			let termTimesTwelve = mortgageTerm * 12
			let x = monthlyPayment * termTimesTwelve
			let totalRepayment = (Math.round((x) * 100) / 100).toFixed(2);
			console.log("Total Repayment: " +totalRepayment)


			let grabCalcRez = document.getElementById('calcRez')
			console.log(grabCalcRez)
			let createDiv = document.createElement('div')
			createDiv.classList.add('card', `card-1`)
			grabCalcRez.appendChild(createDiv)

			let newCard = document.querySelector(`.card-1`)
			console.log(newCard)

			let showMonthlyPayment = document.createElement('h3')
			showMonthlyPayment.setAttribute('id', `showMonthlyPayment-1`)
			showMonthlyPayment.innerText = monthlyPayment

			let showTotalRepayment = document.createElement('h4')
			showTotalRepayment.setAttribute('id', `showTotalRepayment-1`)
			showTotalRepayment.innerText = totalRepayment

			newCard.appendChild(showMonthlyPayment)
			newCard.appendChild(showTotalRepayment)



		}
		if(radioButtonChosen === "interest-only"){
			console.log("Interest was selected")
		}

	};
	return (
		<form
			className="mortgage-calculator d-flex flex-column flex-md-row bg-white rounded-4 w-100"
			ref={formRef}
			onSubmit={handleSubmit}
		>

			<MortgageForm></MortgageForm>
			<CalculatedResults>
				<h3></h3>
			</CalculatedResults>
			{/* TAKE IT AWAY! */}
		</form>
	);
};

export default MortgageCalculator;

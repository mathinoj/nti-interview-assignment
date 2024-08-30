"use client";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import "./style.scss";
import MortgageForm from "./MortgageForm"

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

		// For example, if your interest rate is 6 percent, you would divide 0.06 by 12 to get a monthly rate of 0.005. You would then multiply this number by the amount of your loan to calculate your loan payment. If your loan amount is $100,000, you would multiply $100,000 by 0.005 for a monthly payment of $500.

// 		To calculate your monthly mortgage payment, you can use the formula M = P.r (1 + r)n / (1 + r)n - 1, where:
// M: is the total monthly mortgage payment
// P: is the principal loan amount
// r: is the monthly interest rate, which is the annual interest rate divided by 12
// n: is the number of months required to repay the loan, which is the number of years multiplied by 12

		if(radioButtonChosen === "repayment"){
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
			let totalRepayment = monthlyPayment * termTimesTwelve
			console.log("Total Repayment: " +totalRepayment)





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
			{/* TAKE IT AWAY! */}
		</form>
	);
};

export default MortgageCalculator;

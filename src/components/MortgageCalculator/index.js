"use client";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import "./style.scss";
import MortgageForm from "./MortgageForm"

const MortgageCalculator = ({ ...props }) => {
	const formRef = useRef(null);
	let [newMortgageAmount, setNewMortgageAmount] = useState("")
	let [mortgageTermEntered, setMortgageTermEntered] = useState([])
	let [interestRateEntered, setInterestRateEntered] = useState([])


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

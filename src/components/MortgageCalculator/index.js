"use client";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import "./style.scss";

const MortgageCalculator = ({ ...props }) => {
	const formRef = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(formRef.current);
		const data = Object.fromEntries(formData.entries());
		console.log(data);
	};
	return (
		<form
			className="mortgage-calculator  flex-md-row bg-white rounded-4 w-100"
			ref={formRef}
			onSubmit={handleSubmit}
		>
			<h1>Mortgage Calculator</h1>
			<a href="">clear</a>

				<div class="mb-3">
					<label for="basic-url" class="form-label">Mortgage Amount</label>
					<div class="input-group mb-3">
						<span class="input-group-text">$</span>
						<input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)"></input>
					</div>
				</div>

				<div class="mb-3">
					<label for="basic-url" class="form-label">Mortgage Term</label>
					<div class="input-group mb-3">
					<input type="text" class="form-control" aria-label="Amount (to the 	nearest dollar)"></input>
					<span class="input-group-text">Years</span>
					</div>
				</div>

				<div class="mb-3">
					<label for="basic-url" class="form-label">Interest Rate</label>
					<div class="input-group mb-3">
						<input type="text" class="form-control"  aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
						<span class="input-group-text" id="basic-addon2">%</span>
						</div>
				</div>

				<div class="form-check">
					<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"></input>
						<label class="form-check-label" for="exampleRadios1">Default radio
						</label>
				</div>
				<div class="form-check">
					<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"></input>
					<label class="form-check-label" for="exampleRadios2">Second default radio
					</label>
				</div>
			{/* TAKE IT AWAY! */}
		</form>
	);
};

export default MortgageCalculator;

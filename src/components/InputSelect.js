import React from "react";

const daysArray = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12,
	13,
	14,
	15,
	16,
	17,
	18,
	19,
	20,
	21,
	22,
	23,
	24,
	25,
	26,
	27,
	28,
	29,
	30,
	31,
];
const monthArray = [
	"Enero",
	"Febrero",
	"Marzo",
	"Abril",
	"Mayo",
	"Junio",
	"Julio",
	"Agosto",
	"Septiembre",
	"Octubre",
	"Noviembre",
	"Diciembre",
];
const yearArray = [];
for (let i = 1950; i < 2021; i++) {
	yearArray.push(i);
}

const InputSelect = (props) => {
	if (props.errorControl) {
		return (
			<>
				<div className="d-flex mt-2">
					<select id="year" onChange={props.handleInputChange}>
						<option></option>
						{yearArray.map((value) => {
							return <option value={value}>{value}</option>;
						})}
					</select>
					<select id="month" onChange={props.handleInputChange}>
						<option></option>
						{monthArray.map((value) => {
							return <option value={value}>{value}</option>;
						})}
					</select>
					<select id="day" onChange={props.handleInputChange}>
						<option></option>
						{daysArray.map((value) => {
							return <option value={value}>{value}</option>;
						})}
					</select>
				</div>
				<div>
					<label className="text-danger">{props.errorMessage}</label>
				</div>
			</>
		);
	} else
		return (
			<div className="d-flex mt-2">
				<select id="year" onChange={props.handleInputChange}>
					<option></option>
					{yearArray.map((value) => {
						return <option value={value}>{value}</option>;
					})}
				</select>
				<select id="month" onChange={props.handleInputChange}>
					<option></option>
					{monthArray.map((value) => {
						return <option value={value}>{value}</option>;
					})}
				</select>
				<select id="day" onChange={props.handleInputChange}>
					<option></option>
					{daysArray.map((value) => {
						return <option value={value}>{value}</option>;
					})}
				</select>
			</div>
		);
};

export { InputSelect };

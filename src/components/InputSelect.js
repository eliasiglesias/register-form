import React from "react";

const daysArray = [];
for (let i = 1; i < 32; i++) {
	daysArray.push(<option value={i}>{i}</option>);
}
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
	yearArray.push(<option value={i}>{i}</option>);
}

const InputSelect = (props) => {
	return (
		<>
			<div className="d-flex mt-2">
				<select id="year" onChange={props.handleInputChange}>
					<option>Año</option>
					{yearArray}
				</select>
				<select id="month" onChange={props.handleInputChange}>
					<option>Mes</option>
					{monthArray.map((value, index) => {
						return <option value={index + 1}>{value}</option>;
					})}
				</select>
				<select id="day" onChange={props.handleInputChange}>
					<option>Dia</option>
					{daysArray}
				</select>
			</div>
			{props.errorControl && (
				<div>
					<label className="text-danger">{props.errorMessage}</label>
				</div>
			)}
		</>
	);
};

export { InputSelect };

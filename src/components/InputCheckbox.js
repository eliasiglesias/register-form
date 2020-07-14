import React from "react";

const InputCheckbox = (props) => {
	return (
		<div className="mt-2 d-flex">
			<div className="form-check form-check-inline">
				<input
					className="form-check-input"
					type="radio"
					name="inlineRadioOptions"
					id="gender1"
					value="Hombre"
					onChange={props.handleInputChange}
				/>
				<label className="form-check-label" for="gender1">
					Hombre
				</label>
			</div>
			<div className="form-check form-check-inline">
				<input
					className="form-check-input"
					type="radio"
					name="inlineRadioOptions"
					id="gender2"
					value="Mujer"
					onChange={props.handleInputChange}
				/>
				<label className="form-check-label" for="gender2">
					Mujer
				</label>
			</div>
		</div>
	);
};

export { InputCheckbox };

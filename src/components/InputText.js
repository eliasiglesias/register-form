import React from "react";
import { Input } from "reactstrap";

const InputText = (props) => {
	if (props.errorControl) {
		return (
			<>
				<Input
					onChange={props.handleInputChange}
					className={props.className}
					placeholder={props.placeholder}
				/>
				<div className="">
					<label className="text-danger">{props.errorMessage}</label>
				</div>
			</>
		);
	} else {
		return (
			<Input
				onChange={props.handleInputChange}
				className={props.className}
				placeholder={props.placeholder}
			/>
		);
	}
};
export { InputText };

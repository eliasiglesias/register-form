import React from "react";
import { Button } from "reactstrap";

const ButtonSignUp = (props) => {
	return (
		<div className="d-flex justify-content-end pr-4 pt-2">
			<Button onClick={props.handleButtonClick} className="btn-success">
				Sign Up
			</Button>
		</div>
	);
};

export default ButtonSignUp;

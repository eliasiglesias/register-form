const checkErrors = (
	errorControlName,
	errorControlSurname,
	errorControlEmail,
	errorControlTelephone,
	errorControlGender,
	errorControlBirthDay
) => {
	if (
		errorControlName ||
		errorControlSurname ||
		errorControlEmail ||
		errorControlTelephone ||
		errorControlGender ||
		errorControlBirthDay
	) {
		return true;
	} else return false;
};

export { checkErrors };

const checkTelephone = (telephone) => {
	if (!isNaN(telephone) && telephone.length > 2) {
		return true;
	}
	return false;
};

export { checkTelephone };

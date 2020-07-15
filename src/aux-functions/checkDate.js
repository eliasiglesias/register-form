function checkDate(birthday) {
	var yearNum = parseInt(birthday.year, 10);
	var monthNum = parseInt(birthday.month, 10) - 1;
	var dayNum = parseInt(birthday.day, 10);
	if (yearNum < 1900 || yearNum > 2100) return false;
	var dateYear = new Date(yearNum, 1, 1); // Para tener el año a 4 dígitos
	var dateCheck = new Date(yearNum, monthNum, dayNum); // Paso a fmt fecha
	return dateYear.getFullYear() === dateCheck.getFullYear() &&
		monthNum === dateCheck.getMonth()
		? true
		: false;
}

export { checkDate };

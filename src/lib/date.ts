export function FormatData(isoDate: string) {
	const date = new Date(isoDate);

	if (Number.isNaN(date.getTime())) {
		throw new Error("data invalida");
	}

	const formattedDate = new Intl.DateTimeFormat("pt-br", {
		day: "2-digit",
		month: "short",
	}).format(date);

	const formattedTime = date.toLocaleTimeString("pt-br", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	});

	return `${formattedDate} ás ${formattedTime}`;
}

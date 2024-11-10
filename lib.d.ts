type dayRange = { start: Date, end: Date }

export default class DayRange {
	daysFromNow(offset: number): dayRange

	today: dayRange
	yesterday: dayRange
	tomorrow: dayRange
}
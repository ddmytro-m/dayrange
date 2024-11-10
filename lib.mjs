export default class DayRange {
	daysFromNow(offset) {
		if (typeof offset !== "number") throw new TypeError(`Unknown type: '${typeof offset}'. Expected type: 'number'`)
		if (!Number.isInteger(offset)) throw new Error("Day offset should be an integer")

		const dayInMilliseconds = 24 * 60 * 60 * 1000
		
		const now = Date.now()
		const startMilliseconds = (now - now % dayInMilliseconds) + (dayInMilliseconds * offset)
		const endMilliseconds = startMilliseconds + dayInMilliseconds - 1

		const start = new Date(startMilliseconds)
		const end = new Date(endMilliseconds)

		return { start, end }
	}

	get today() {
		return this.daysFromNow(0)
	}
	get yesterday() {
		return this.daysFromNow(-1)
	}
	get tomorrow() {
		return this.daysFromNow(1)
	}
}
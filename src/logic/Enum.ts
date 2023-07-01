function Enum<T extends string[]>(...values: T) {
	type TValues = T[number]
	return Object.fromEntries(values.map(value => [value, value])) as { [key in TValues]: key };
}

export default Enum;
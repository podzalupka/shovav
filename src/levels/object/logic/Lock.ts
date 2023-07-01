export function lock<T>(target: T) {
	const _key = Symbol('key')

	const locked = {

		unlock(key: any) {
			if (key !== _key) throw new Error('Incorrect Key');

			return target
		}
	}

	return [locked, _key] as const
}
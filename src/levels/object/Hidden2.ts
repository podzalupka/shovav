import Level from "../../logic/Level";

export default Level({

	tags: ['OBJECT'],

	create(win) {
		const hidden = Symbol('hidden')
		return {
			[hidden]: {
				win
			}
		}
	}

});
import Level from "../../logic/Level";

export default Level({

	tags: ['OBJECT'],

	create(win) {
		return {
			hidden: {
				win
			}
		}
	}

});
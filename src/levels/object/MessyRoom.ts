import Level from "../../logic/Level";

export default Level({

	tags: ['OBJECT'],

	// todo: add locks 
	create(win) {
		return {
			bed: {

				below: {
					chocolate: undefined,
					tissue: undefined,
					treasureChest: {
						goldenApple: undefined

					},
				},
				above: {},
			},
			chair: {},
			shelf: {},
			closet: {},
			table: {},
		}
	}

});
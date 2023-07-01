import Level from "../../logic/Level";
import { lock } from "./logic/Lock";

export default Level({

	tags: ['OBJECT'],

	create(win) {
		const [chest, key] = lock({ win })

		return {
			key,
			chest
		}
	}

});
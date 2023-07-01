import Enum from "./Enum";

const LevelTags = Enum(
	// subjects
	'OBJECT',
	'ARRAY',
	'FUNCTION',
	'GENERATOR',
	'REGEX',
	'PROXY',

	// difficulty
	'EASY',
	'NORMAL',
	'HARD',
)

export type LevelTag = keyof typeof LevelTags;

export default LevelTags;
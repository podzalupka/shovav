import { LevelData } from "../logic/Level";
import objectLevels from "./object";

export type LevelGroup = { id: string, levels: LevelData[] }

export default [
	{ id: 'objects', levels: objectLevels },
	{ id: 'array', levels: [] },
] satisfies LevelGroup[];
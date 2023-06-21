import { LevelFactory } from "../logic/Level";
import objectLevels from "./object";

export type LevelGroup = { id: string, levels: LevelFactory[] }

export default [
    { id: 'objects', levels: objectLevels },
    { id: 'array', levels: [] },
] satisfies LevelGroup[];
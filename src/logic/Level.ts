import { LevelTag } from "./LevelTags";

export type WinFunction = () => void;
export type LevelFactory = (win: WinFunction) => any;

export type LevelData = {
	tags?: LevelTag[],
	create: LevelFactory,
}

export default function Level(levelData: LevelData) {
	return levelData;
}
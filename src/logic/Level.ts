export type WinFunction = () => void;
export type LevelFactory = (win: WinFunction) => any;

export default function Level(levelFactory: LevelFactory) {
    return levelFactory;
}
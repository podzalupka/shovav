import { useEffect, useState } from 'react';
import { LevelGroup } from '../levels';

declare global {
	interface Window {
		level: any;
	}
}

const LevelLoader = ({ levels: levelGroups }: { levels: LevelGroup[] }) => {
	const [selectedLevelIndex, setSelectedLevelIndex] = useState(0);
	const levels = levelGroups.flatMap((group) =>
		group.levels.map((level) => ({ group, level }))
	);
	const selectedLevelEntry = levels[selectedLevelIndex];

	const win = () => {
		const hasFinishedAllLevels = selectedLevelIndex + 1 >= levels.length;
		alert(`You completed level ${selectedLevelIndex + 1} 🎉`);

		if (hasFinishedAllLevels) {
			alert(`You completed all the levels! 🤩😎`);
			return;
		}

		setSelectedLevelIndex((prev) => prev + 1);
	};

	useEffect(() => {
		const LevelDefinition = selectedLevelEntry.level;

		window.level = LevelDefinition.create(win);

		return () => {
			window.level = undefined;
		};
	}, [selectedLevelEntry]);

	useEffect(() => {
		if (import.meta.env.DEV) {
			(window as any).setSelectedLevel = (level: number) =>
				setSelectedLevelIndex(level - 1);
		}
	}, []);

	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
			<span>LevelLoader</span>
			<span>
				Level {selectedLevelIndex + 1} ({selectedLevelEntry.group.id})
			</span>
		</div>
	);
};

export default LevelLoader;

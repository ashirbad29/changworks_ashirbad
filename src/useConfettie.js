import confetti from 'canvas-confetti';

const useConfetti = () => () => {
	// confetti({ useWorker: true, })
	confetti({
		particleCount: 100,
		angle: 60,
		spread: 55,
		origin: { x: 0 },
	});
	// and launch a few from the right edge
	confetti({
		particleCount: 100,
		angle: 120,
		spread: 55,
		origin: { x: 1 },
	});
};

export default useConfetti;

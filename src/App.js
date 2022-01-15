import './App.css';
import useConfetti from './useConfettie';
import { HotKeys } from 'react-hotkeys';

function App() {
	const startConfetti = useConfetti();

	const keyMap = {
		CHANGWORKS: ['c', 'h', 'a', 'n', 'g', 'w', 'o', 'r', 'k', 's'].join(' '),
	};

	const handlers = {
		CHANGWORKS: () => {
			startConfetti();
		},
	};

	return (
		<HotKeys keyMap={keyMap} handlers={handlers}>
			<div className='App'>
				<div className='content'>
					Type <code>changworks</code>
				</div>
			</div>
		</HotKeys>
	);
}

export default App;

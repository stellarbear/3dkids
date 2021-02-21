import React, {createContext, useContext, useState} from 'react';
import {Mock} from './components/Mock';
import { Modal } from './components/Modal';
import { Scroll } from './components/Scroll';
import { Welcome } from './Slides';
import { Classes } from './Slides/Classes';
import { Sketches } from './Slides/Sketches';
import { Study } from './Slides/Study';
import { Workshop } from './Slides/Workshop';

export interface IApp {
	loaded: boolean;
}

const AppContext = createContext({} as IApp);

const delay = 2500;
export const App: React.FC = () => {
	const [onLoad, setOnLoad] = useState(false);
	const [minimum, setMinimum] = useState(false);

	React.useEffect(() => {
		const onLoad = () => setOnLoad(true)
		const id = setTimeout(() => setMinimum(true), delay);
		
		window.addEventListener('load', onLoad);
		return () => {
			window.removeEventListener('load', onLoad)
			clearTimeout(id)
		}
	}, []);

	const loaded = onLoad && minimum;

	return (
		<AppContext.Provider value={{loaded}}>
			<Mock/>
			<Modal>
				<Scroll>
					{[
						["О нас", <Welcome />],
						["Курсы", <Study />],
						["Об обучении", <Classes />],
						["Проекты", <Sketches />],
						["Мастерская", <Workshop />],
					]}
				</Scroll>
			</Modal>
		</AppContext.Provider>
	)
}

export const useApp = () => useContext(AppContext);
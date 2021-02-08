import React from 'react';
import { Hidden } from './components/Hidden';
import { Modal } from './components/Modal';
import { Scroll } from './components/Scroll';
import { Welcome } from './Slides';
import { Classes } from './Slides/Classes';
import { Mobile } from './Slides/Mobile';
import { Sketches } from './Slides/Sketches';
import { Study } from './Slides/Study';
import { Workshop } from './Slides/Workshop';

export const App: React.FC = () => {
	
	return (
		<>
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
		</>
	)
}
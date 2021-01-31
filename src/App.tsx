import React from 'react';
import { Slide } from './components';
import { Modal } from './components/Modal';
import { Scroll } from './components/Scroll';
import { Welcome } from './Slides';
import { Classes } from './Slides/Classes';
import { Sketches } from './Slides/Sketches';
import { Study } from './Slides/Study';
import { Workshop } from './Slides/Workshop';

export const App: React.FC = () => {

	return (
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
	)
}
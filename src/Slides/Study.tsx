import React from "react";
import { Image } from "../components/Image";
import { Title } from "../components/Title";
import { Label } from "../components/Label";
import { Col, Row } from "../components/Flex";
import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { Carousel } from "../components/Carousel";
import { Hidden } from "../components/Hidden";
import { Divider } from "../components/Divider";
import { Mount } from "../components/Mount";

const content = [
	[
		"Моделирование",
		"thumb_model",
		`   <b>Моделирование</b> станет отличным стартом для ребенка в знакомстве с миром 3D. На наших занятиях мы изучаем программу <b>Tinkercad</b> - это простой и понятный <b>графический редактор</b>, разработанный компанией <b>Autodesk</b> специально для обучения детей.`,
		`Во время обучения нас ждет:`,
		`-знакомство с основными понятиями 3D-графики;
-изучение инструментов моделирования;
-работа с фотограмметрией (сканирование предметов);  
-выполнение увлекательных проектов для закрепления изученного.`,
	],
	[
		"3D‑печать",
		"thumb_3d_print",
		`   Курс по <b>3D-печати</b> на практике научит ребенка работе с самым <b>быстрым</b>, <b>простым</b> и <b>экологически чистым</b> способом производства. Это направление подарит новую возможность самовыражения через создание собственных <b>уникальных поделок</b>.`,
		`Во время обучения нас ждет:`,
		`-знакомство с устройством 3D-принтера;
-подготовка моделей к печати (слайсинг);
-запуск нашей первой 3D-печати;
-выполнение проектов, создание подарков и игрушек.`,
	],
	[
		"Кинопроизводство",
		"thumb_film_making",
		`   <b>Кинопроизводство</b> - это курс, который нацелен на <b>практическую работу</b> детей с <b>кинооборудованием</b> и <b>дополненной реальностью</b>. 
    Все это дает ребенку отличную возможность прикоснуться к передовым технологиям, использующимся как на <b>телевидении</b>, так и в <b>кино</b>.`,

		`Во время обучения нас ждет:`,
		`-знакомство с основными понятиями кинопроизводства;
-изучение принципов работы с камерой;
-работа с хромакеем и освещением;
-использование дополненной реальности для проведения трансляций.`,
	],
	[
		"VR‑разработка",
		"thumb_vr",
		`   <b>Разработка VR-локаций</b> - это уникальный способ презентации собственных <b>проектов</b>! Поэтому мы подготовили курс, который на практике <b>научит</b> ребенка создавать с помощью <b>Unreal Engine 4</b> собственные виртуальные миры, писать для них логику, а так же познакомит со всеми перспективными <b>сферами</b> их применения.`,
		`Во время обучения нас ждет:`,
		`-изучение существующих сфер применения VR;
-знакомство с игровым движком (Unreal Engine 4);
-практическая работа с VR-оборудованием;
-подготовка уникальных виртуальных проектов к презентации.`,
	],
];

export const Study: React.FC = () => {
	const [index, setIndex] = React.useState(0);

	const renderImage = (icon: string) => (
		<Hidden less="sm">
			<Image src={icon} alt="" style={{ 
				maxHeight: 200, 
				marginTop: -16,
				marginBottom: 16
			}} />
		</Hidden>
	);

	const renderText = (text: string[]) => (
		<Row>
			<Hidden less="md">
				<div style={{minWidth: "10%"}}/>
			</Hidden>
			<Col s={8}>
				<Label asHtml>{text[0]}</Label>
				<Label style={{ textDecoration: "underline", marginLeft: 20 }}>
					<b>{text[1]}</b>
				</Label>
				<Label asHtml>{text[2]}</Label>
			</Col>
		</Row>
	);

	return (
		<div style={{ color: "white" }}>
			<Image responsive src={`study${index}`} alt="slide background" fullScreen />
			<Section>
				<Container size="md">
					<Col s={8} m={8}>
						<Title style={{width: "75%"}}>Какие дисциплины мы&nbsp;преподаем?</Title>
						<Divider style={{ marginBottom: 8, width: "75%"}} />
						<Mount>
							<Carousel
								arrows
								infinite
								onChange={setIndex}
								titles={content.map((c) => c[0].toUpperCase())}
							>
								{content.map(([, icon, ...text], index) => (
									<Row m={[0, 8]} s={32} key={index} justify="center">\
										<>
											{renderText(text)}
											{renderImage(icon)}
										</>
									</Row>
								))}
							</Carousel>
						</Mount>
						<Hidden less="md">
							<Image className="image-sticker" style={{
								position: "absolute",
								bottom: "32%", left: "11%",
								zoom: 0.85,
							}} src={`course_number${index + 1}`} alt="" />
						</Hidden>
						<Hidden less="md">
							<Image className="image-sticker" style={{
								position: "absolute",
								bottom: "46%",
								left: "10%",
								transform: "rotate(20deg)",
								zoom: 1.2,
							}} src={`arrow_2_3_4_5`} alt="" />
						</Hidden>
					</Col>
				</Container>
			</Section>
		</div>
	);
};

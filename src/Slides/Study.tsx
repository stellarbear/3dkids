import React from "react";
import { Image } from "../components/Image";
import { Title } from "../components/Title";
import { Label } from "../components/Label";
import { Col, Row } from "../components/Flex";
import { Container } from "../components/Container";
import { PlayButton } from "../components/PlayButton";
import { Section } from "../components/Section";
import { Carousel } from "../components/Carousel";
import { Hidden } from "../components/Hidden";
import { Divider } from "../components/Divider";

const content = [
  [
    "Моделирование",
    "thumb_model",
    `   Моделирование станет отличным стартом для ребенка в знакомстве с миром 3D. На наших занятиях мы изучаем программу Tinkercad - это простой и понятный графический редактор, разработанный компанией Autodesk специально для обучения детей.`,
    `Во время обучения нас ждет:`,
    `-знакомство с основными понятиями 3D-графики;
-изучение инструментов моделирования;
-работа с фотограмметрией (сканирование предметов);  
-выполнение увлекательных проектов для закрепления изученного.`,
  ],
  [
    "3D-печать",
    "thumb_3d_print",
    `   Курс по 3D-печати на практике научит ребенка работе с самым быстрым, простым и экологически чистым способом производства. Это направление подарит новую возможность самовыражения через создание собственных уникальных поделок.`,
    `Во время обучения нас ждет:`,
    `-знакомство с устройством 3D-принтера;
-подготовка моделей к печати (слайсинг);
-запуск нашей первой 3D-печати;
-выполнение проектов, создание подарков и игрушек.`,
  ],
  [
    "Кинопроизводство",
    "thumb_film_making",
    `   Кинопроизводство - это курс, который нацелен на практическую работу детей с кинооборудованием и дополненной реальностью. 
    Все это дает ребенку отличную возможность прикоснуться к  передовым технологиям, использующимся как на телевидении, так и в кино.`,

    `Во время обучения нас ждет:`,
    `-знакомство с основными понятиями кинопроизводства;
-изучение принципов работы с камерой;
-работа с хромакеем и освещением;
-использование дополненной реальности для проведения трансляций.`,
  ],
  [
    "VR-разработка",
    "thumb_vr",
    `   Разработка VR-локаций - это уникальный способ презентации собственных проектов! Поэтому мы подготовили курс, который на практике научит ребенка создавать с помощью Unreal Engine 4 собственные виртуальные миры, писать для них логику, а так же познакомит со всеми перспективными сферами их применения.`,

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
      <Image src={icon} alt="" style={{ maxHeight: 240 }} />
    </Hidden>
  );

  const renderText = (text: string[]) => (
    <Col s={8}>
      <Label>{text[0]}</Label>
      <Label style={{ textDecoration: "underline", marginLeft: 20 }}>
        {text[1]}
      </Label>
      <Label>{text[2]}</Label>
    </Col>
  );

  return (
    <div style={{ color: "white" }}>
      <Image src={`study${index}`} alt="slide background" fullScreen />
      <Section>
        <Container size="md">
          <Col s={8} m={8}>
            <Title>Какие дисциплины мы&nbsp;изучаем?</Title>
            <Divider style={{ marginBottom: 16 }} />
            <Carousel
              arrows
              infinite
              onChange={setIndex}
              titles={content.map((c) => c[0].toUpperCase())}
            >
              {content.map(([, icon, ...text], index) => (
                <Row m={8} s={32} key={index} justify="center">
                  {index % 2 ? (
                    <>
                      {renderImage(icon)}
                      {renderText(text)}
                    </>
                  ) : (
                    <>
                      {renderText(text)}
                      {renderImage(icon)}
                    </>
                  )}
                </Row>
              ))}
            </Carousel>
          </Col>
        </Container>
      </Section>
    </div>
  );
};

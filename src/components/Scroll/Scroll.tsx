import * as React from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import { Hidden } from '../Hidden';
import { Slide } from '../Slide';
import { NavDesktop } from './NavDesktop';
import { NavMobile } from './NavMobile';

interface IProps {
    children: [string, JSX.Element][]
}

export const Scroll: React.FC<IProps> = (props) => {
    const { children } = props;
    const [touch] = React.useState({last: 0})
    const [scrollState, setScrollState] = React.useState({up: false, down: false});
    const itemsRef = React.useRef<(HTMLDivElement | null)[]>([]);
    const [active, setActive] = React.useState(0);

    const [windowSize] = useWindowSize();

    const titles = React.useMemo(() => children.map(c => c[0]), []);
    const content = React.useMemo(() => children.map(c => c[1]), []);
    const offsets = itemsRef.current.map(c => c?.offsetTop || 0);

    React.useEffect(() => {
        const {up, down} = scrollState;

        if (up) {
            setActive(active => active > 0 ? active - 1 : 0);
        } else if (down) {
            const count = content.length - 1;
            setActive(active => active < count ? (active + 1) : count);
        }
    }, [scrollState]);

    console.log(active, JSON.stringify(scrollState));

    React.useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }, [])

    React.useEffect(() => {
        window.scrollTo({top: offsets[active], behavior: "smooth"}) 
    }, [active])

    React.useEffect(() => {
        let scrolling = false;
        let timer: NodeJS.Timer;

        const onScroll = (event: WheelEvent) => {
            if (!scrolling) {
                if (event.deltaY >= 0) {
                    setScrollState({down: true, up: false})
                } else {
                    setScrollState({down: false, up: true})
                }

                scrolling = true;
            }

            clearTimeout(timer) 
            
            timer = setTimeout(() => {
                scrolling = false;
            }, 50)
        }

        const onTouchEnd = (event: TouchEvent) => {
            const curr = event.changedTouches[0].clientY;
            
            if (Math.abs(curr - touch.last) < 50) {
                return;
            }

            if (curr < touch.last) {
                setScrollState({down: true, up: false})
            } else {
                setScrollState({down: false, up: true})
            }
        }

        const onTouchStart = (event: TouchEvent) => {
            touch.last = event.touches[0].clientY;
        }

        window.addEventListener('wheel', onScroll);
        window.addEventListener('touchend', onTouchEnd);
        window.addEventListener('touchstart', onTouchStart);
        return () => {
            window.removeEventListener('wheel', onScroll);
            window.removeEventListener('touchend', onTouchEnd);
            window.removeEventListener('touchstart', onTouchStart);
        }
    }, [windowSize]);

    const onClick = (index: number) => {
        setActive(index);
        itemsRef.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <>
            <Hidden less="sm">
                <NavDesktop
                    titles={titles}
                    active={active}
                    onClick={onClick}
                />
            </Hidden>
            <Hidden more="sm">
                <NavMobile
                    titles={titles}
                    active={active}
                    onClick={onClick}
                />
            </Hidden>
            {
                React.Children.map(content, (child, index) => (
                    <div
                        key={index}
                        ref={el => itemsRef.current[index] = el}>
                        <Slide>
                            {child}
                        </Slide>
                    </div>
                ))
            }
        </>
    )
}
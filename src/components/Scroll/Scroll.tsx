import * as React from 'react';
import { useDebounce } from '../../hooks/useDebounce';
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
    const [prevScrollState, setPrevScrollState] = React.useState(0);
    const [scrollState, setScrollState, forceSetScrollState] = useDebounce(256, 0);
    const itemsRef = React.useRef<(HTMLDivElement | null)[]>([]);
    const [active, setActive] = React.useState(0);

    const [windowSize] = useWindowSize();

    const titles = React.useMemo(() => children.map(c => c[0]), []);
    const content = React.useMemo(() => children.map(c => c[1]), []);

    React.useEffect(() => {
        if (prevScrollState === scrollState) {
            return
        }

        const offsets = itemsRef.current.map(c => c?.offsetTop || 0);

        for (let i = offsets.length - 1; i >= 0; i--) {
            if (scrollState > offsets[i]) {
                if (scrollState > prevScrollState) {
                    setPrevScrollState(scrollState);
                    window.scrollTo({top: offsets[i + 1], behavior: "smooth"}) 
                } else {
                    setPrevScrollState(offsets[i]);
                    window.scrollTo({top: offsets[i], behavior: "smooth"}) 
                }
                return;
            }
        }
    }, [scrollState])

    React.useEffect(() => {
        const offsets = itemsRef.current.map(c => c?.offsetTop || 0);

        const onScroll = () => {
            const src = window.scrollY;
            setScrollState(src);

            for (let i = 1; i < offsets.length; i++) {
                if (src < offsets[i] + 0 * (window.innerHeight / 3)) {
                    setActive(i - 1);
                    return;
                }
            }

            setActive(offsets.length - 1);
        }

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [windowSize]);

    const onClick = (index: number) => 
        itemsRef.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });

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
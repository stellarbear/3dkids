import * as React from 'react';
import { ClickAway } from '../ClickAway';
import { Row } from '../Flex';

interface IModal {
    call: (content: React.ReactNode) => void
}

const ModalContext = React.createContext({} as IModal);
const { Provider } = ModalContext;

export const Modal: React.FC = (props) => {
    const { children } = props;
    const [isOpened, setOpen] = React.useState(false);
    const [state, setState] = React.useState<React.ReactNode | null>(null);

    const call = (node: React.ReactNode) => {
        setOpen(true);
        setState(node);
    }

    const close = () => {
        setState(null);
        setOpen(false);
    }

    return (
        <>
            <Provider value={{
                call
            }}>
                {children}
            </Provider>
            <ModalContent opened={isOpened} onClose={close}>
                {state}
            </ModalContent>
        </>
    )
}

interface IProps {
    opened: boolean
    onClose: () => void
}

const ModalContent: React.FC<IProps> = (props) => {
    const { opened, children, onClose } = props;

    return (
        <ClickAway
            opened={opened}
            onClick={onClose}
        >
            <Row align="center" justify="center" style={{ height: "100%" }}>
                {children}
            </Row>
        </ClickAway>
    )
}

export const useModal = () => React.useContext(ModalContext);
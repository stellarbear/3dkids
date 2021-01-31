import { debug } from 'console';
import * as React from 'react';
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

    console.log(isOpened)

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
        <div style={{
            position: "fixed",
            left: opened ? 0 : "50%",
            top: opened ? 0 : "50%",
            width: opened ? "100vw" : "0",
            height: opened ? "100vh" : "0",
            transition: "all 0.2s"
        }} onClick={onClose}>
            <Row align="center" justify="center" style={{height: "100%"}}>
                {children}
            </Row>
        </div>
    )
}

export const useModal = () => React.useContext(ModalContext);
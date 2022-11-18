import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StylesToModal = styled.div`
    .modal-paper {
        z-index: 999;
        background: white;
        position: relative;
        margin: 5rem auto;
        border-radius: 3px;
        max-width: 500px;
        padding: 2rem;
    }
    
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1040;
        width: 100vw;
        height: 100vh;
        background-color: #000;
        opacity: .5;
    }
    
    .modal-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1050;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        outline: 0;
        border-radius: 10px;
    }
`;

const ModalHeader = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const ModalCloseButton = styled.button`
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: 15px;
    width: 30px;
    height: 30px;
    background: ${props => props.theme.color['primary'].base}; 
    border: 0px;
    color: #fff;
    font-size: 25px;
    font-weight: 600;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    &:hover {
        background: ${props => props.theme.color['primary'].lighter};
    }
`;

const ModalCross = styled.span`
    position: absolute;
    left: 1px;
    top: -2px;
    margin-top: 0;
    margin-left: 0;
    width: 30px;
    height: 30px;
`;

interface Props {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    style?: any;
}

/**
    Modal Dialog

    Stateless components and controlled component
    
const {isOpen, toggle} = useModalDialog();

<button onClick={toggle}>Show Modal</button>
<ModalDialog
        isOpen={isOpen}
        onClose={toggle}
      >
      <p>Contenido 1</p>
</ModalDialog>

 */
const ModalDialog: React.FC<Props> = ({ isOpen, onClose, children, style }) => {

    return isOpen ? ReactDOM.createPortal(
        <React.Fragment>
            <StylesToModal>
            <div className="modal-overlay" />
            <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
                <div className="modal-paper">
                    <ModalHeader>
                        <ModalCloseButton type="button"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={onClose}>
                            <ModalCross className="modal-crux" aria-hidden="true">&times;</ModalCross>
                        </ModalCloseButton>
                    </ModalHeader>
                    {children}
                </div>
            </div>
            </StylesToModal>
        </React.Fragment>, document.body
    ) : null
};

export default ModalDialog;


import { CenteringContainer } from '../elements/centering-container';
import ModalDialog from './modal-dialog';
import useModalDialog from './use-modal-dialog';


function ModalDialogDemo() {
    const { isDialogOpen, toggle } = useModalDialog()

    return (

        <div>
            <h2>ModalDialog</h2>
            <CenteringContainer>

                <button onClick={toggle}>Show Modal</button>
                <ModalDialog
                    isOpen={isDialogOpen}
                    onClose={toggle}
                >
                    <p>Modal dialog content...</p>
                </ModalDialog>
            </CenteringContainer>

        </div>

    )
}

export default ModalDialogDemo
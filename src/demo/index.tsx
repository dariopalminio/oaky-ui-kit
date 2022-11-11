
import AlertsDemo from './alert-demo';
import ButtonQuantityDemo from './button-quantity-demo';
import ButtonDemo from './button-demo';
import ModalDialogDemo from './modal-dialog-demo';
import IconButtonDemo from './icon-button-demo';
import ImgCarouselDemo from './img-carousel-demo';
import ProgressDemo from './circular-progress-demo';
import RadioButtonListDemo from './radio-button-list-demo';
import SelectListDemo from './select-list-demo';
import SelectOptsDemo from './select-opts-demo';
import TextFieldDemo from './text-field-demo';
import './demo.css'

function Demo() {

    return (

        <div>
            <h1>it-simple-react-ui</h1>

            <p>UI Kit with react, typescript, styled-components and CSS</p>

            <AlertsDemo />

            <ButtonDemo />

            <ButtonQuantityDemo />

            <IconButtonDemo />

            <ImgCarouselDemo />

            <ModalDialogDemo />

            <ProgressDemo />

            <RadioButtonListDemo />

            <SelectListDemo />

            <SelectOptsDemo />

            <TextFieldDemo />
        </div>

    )
}

export default Demo
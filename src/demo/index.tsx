
import AlertsDemo from '../ui-kit/alert/demo';
import ButtonQuantityDemo from '../ui-kit/button-quantity/demo';
import ButtonDemo from '../ui-kit/button/demo';
import ModalDialogDemo from '../ui-kit/dialog/demo';
import IconButtonDemo from '../ui-kit/icon-button/demo';
import ImgCarouselDemo from '../ui-kit/img-carousel/demo';
import ProgressDemo from '../ui-kit/progress/demo';
import RadioButtonListDemo from '../ui-kit/select-list-radio-button/demo';
import SelectListDemo from '../ui-kit/select-list/demo';
import SelectOptsDemo from '../ui-kit/select-opts/demo';
import '../ui-kit/style/normalize.css'
import TextFieldDemo from '../ui-kit/text-field/demo';
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
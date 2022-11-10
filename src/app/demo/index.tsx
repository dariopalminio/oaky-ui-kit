
import AlertsDemo from '../ui-kit/alert/demo';
import ButtonDemo from '../ui-kit/button/demo';
import IconButtonDemo from '../ui-kit/icon-button/demo';
import ProgressDemo from '../ui-kit/progress/demo';
import '../ui-kit/style/normalize.css'
import './demo.css'

function Demo() {

    return (

        <div>
            <h1>it-simple-react-ui</h1>

            <p>UI Kit with react, typescript, styled-components and CSS</p>
            
            <ButtonDemo />

            <IconButtonDemo />

            <AlertsDemo/>

            <ProgressDemo/>
        </div>

    )
}

export default Demo
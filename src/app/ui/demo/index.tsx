
import { Button } from '../button';
import '../style/normalize.css'
import './demo.css'

function Demo() {

    const handleClickOpen = () => {
        alert("OK!");
    };

    return (

        <div>
            <h1>Vite + React</h1>

            <Button type="button" onClick={handleClickOpen} style={{ marginTop: "15px" }}>
                Click me
            </Button>

        </div>

    )
}

export default Demo
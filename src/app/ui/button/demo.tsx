
import { Button } from './button';

function ButtonDemo() {

    const handleClickOpen = () => {
        alert("OK!");
    };

    return (

        <div>
            <h1>Button</h1>

            <Button type="button" onClick={handleClickOpen} style={{ marginTop: "15px" }} styleType={"default"}>
                Click me
            </Button>
            &nbsp;&nbsp;
            <Button type="button" onClick={handleClickOpen} style={{ marginTop: "15px" }} styleType={"primary"}>
                Click me
            </Button>
            &nbsp;&nbsp;
            <Button type="button" onClick={handleClickOpen} style={{ marginTop: "15px" }} styleType={"secondary"}>
                Click me
            </Button>
            &nbsp;&nbsp;
            <Button type="button" onClick={handleClickOpen} style={{ marginTop: "15px" }} styleType={"danger"}>
                Click me
            </Button>

        </div>

    )
}

export default ButtonDemo
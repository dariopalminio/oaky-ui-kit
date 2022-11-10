
import { Button } from './button'

function ButtonDemo() {

    const handleClickOpen = () => {
        alert("OK!");
    };

    return (

        <div>
            <h1>Button</h1>

            <Button type="button" onClick={handleClickOpen} style={{ marginTop: "15px" }} styleType={"disabled"}>
            disabled
            </Button>
            &nbsp;&nbsp;
            <Button type="button" onClick={handleClickOpen} style={{ marginTop: "15px" }} styleType={"primary"}>
            primary
            </Button>
            &nbsp;&nbsp;
            <Button type="button" onClick={handleClickOpen} style={{ marginTop: "15px" }} styleType={"secondary"}>
            secondary
            </Button>
            &nbsp;&nbsp;
            <Button type="button" onClick={handleClickOpen} style={{ marginTop: "15px" }} styleType={"danger"}>
            danger
            </Button>

        </div>

    )
}

export default ButtonDemo
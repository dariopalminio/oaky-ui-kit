
import { CenteringContainer } from '../ui-kit/elements/centering-container';
import Button from '../ui-kit/button/button'
import PreviousNextButtons from '../ui-kit/button/previous-next-buttons';

function ButtonDemo() {

    const handleClickOpen = () => {
        alert("OK!");
    };

    const handlePrevious = () => {
        //previous
    };

    const handleNext = (): void => {
        //next
    };
    
    return (

        <div>
            <h2>Button</h2>
            <CenteringContainer>
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
            </CenteringContainer>
            <h2>PreviousNextButtons</h2>

            <PreviousNextButtons labelPrevious={'Previous'} labelNext={'Next'}
                handlePrevious={() => handlePrevious()} handleNext={() => handleNext()} />

        </div>

    )
}

export default ButtonDemo
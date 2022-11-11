import CircularProgress from "../ui-kit/progress/circular-progress";

function ProgressDemo() {

    const handleClick = () => {
        alert("OK!");
    };

    return (

        <div>
            <h2>CircularProgress</h2>

            <CircularProgress>Loading...</CircularProgress>

        </div>

    )
}

export default ProgressDemo
import IconButton from "./icon-button";



function IconButtonDemo() {

    const handleClick = () => {
        alert("OK!");
    };

    return (

        <div>
            <h1>IconButton</h1>

            <IconButton
            onClick={() => handleClick()}>
            X
          </IconButton>

        </div>

    )
}

export default IconButtonDemo
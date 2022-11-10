import IconButton from "./icon-button";



function IconButtonDemo() {

    const handleClick = () => {
        alert("OK!");
    };

    return (

        <div>
            <h2>IconButton</h2>

            <IconButton
            onClick={() => handleClick()}>
            X
          </IconButton>

        </div>

    )
}

export default IconButtonDemo
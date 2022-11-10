import { useState } from "react";
import Alert from "./alert"
import useAlertPopup from "./alert-popup-hook";
import AlertPopup from "./alert-popup"


function AlertsDemo() {
    const {show, toggle} = useAlertPopup();

    return (

        <div>
            <h2>Alert</h2>

            <Alert severity="info">{"info"}</Alert>
            <Alert severity="success">{"success"}</Alert>
            <Alert severity="warning">{"warning"}</Alert>
            <Alert severity="error">{"error"}</Alert>

            <h2>AlertPopup</h2>

            <button onClick={() => toggle()}>Show alert popup</button>
            {show && (<AlertPopup severity="info" toggle={() => toggle()}>
                information
            </AlertPopup>)
            }

        </div>

    )
}

export default AlertsDemo
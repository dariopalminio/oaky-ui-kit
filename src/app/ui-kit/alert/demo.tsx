import Alert from "./alert"



function AlertsDemo() {


    return (

        <div>
            <h1>Alert</h1>

            <Alert severity="info">{"info"}</Alert>
            <Alert severity="success">{"success"}</Alert>
            <Alert severity="warning">{"warning"}</Alert>
            <Alert severity="error">{"error"}</Alert>

        </div>

    )
}

export default AlertsDemo
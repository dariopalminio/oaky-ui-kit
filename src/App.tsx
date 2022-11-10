import { ThemeProvider } from "styled-components"
import Demo from './app/demo';
import Themes from "./app/ui-kit/style/theme/themes";

function App() {


  return (
    <div className="App">
      <ThemeProvider theme={Themes}>

        <Demo />

      </ThemeProvider>
    </div>
  )
}

export default App

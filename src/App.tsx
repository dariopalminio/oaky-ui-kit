import { ThemeProvider } from "styled-components"
import Demo from './demo';
import Themes from "./ui-kit/theme/themes";


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

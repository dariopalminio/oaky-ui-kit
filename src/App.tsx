import { ThemeProvider } from "styled-components"
import Demo from './app/ui/demo';
import Themes from "./app/ui/style/theme/themes";

function App() {

  return (
    <div className="App">
      <ThemeProvider theme={Themes.primary}>

        <Demo />

      </ThemeProvider>
    </div>
  )
}

export default App

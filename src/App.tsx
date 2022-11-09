import { ThemeProvider } from "styled-components"
import Themes from './app/ui/common/theme/themes'
import Demo from './app/ui/demo';

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

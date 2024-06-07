import { CgNotes } from 'react-icons/cg'
import './App.css'
import GlobalStyles from './styles/globalStyles'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/themes'
import Note from './components/Note'
import SearchCep from './components/SearchCep'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <section>
    <GlobalStyles/>
            <header className='header-container cl-border'>
                <div className='dark-mode'>
                <CgNotes/>
                <h1>Bloco de Notas</h1>
                </div>
                <div className='dark-mode'>
                  {isDarkTheme ? <><h5>Dark</h5><MdDarkMode onClick={() => setIsDarkTheme(false)}/></>
                  : <><h5>Light</h5><MdLightMode onClick={() => setIsDarkTheme(true)}/></>}
                </div>
            </header>
            <div className='app'>
              <SearchCep/>
              <Note/>
            </div>
        </section>
    </ThemeProvider>
  )
}

export default App

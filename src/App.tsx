import './App.css'
import Note from './components/Note'
import SearchCep from './components/SearchCep'
import Calculator from './components/Calculator'
import Header from './components/Header'

function App() {
  return (
      <section>
        <Header/>
            <div className='app'>
              <div className='skill-container'>
                <SearchCep/>
                <Calculator/>
              </div>
              <Note/>
            </div>
        </section>
  )
}

export default App

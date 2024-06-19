import './App.css'
import Note from './components/Note'
import SearchCep from './components/SearchCep'
import Calculator from './components/Calculator'
import Header from './components/Layout'
import TodoList from './components/Todo'

function App() {
  return (
      <section>
        <Header>
          <div className='note-container'>
            <div className='utils-container'>
              <SearchCep/>
              <TodoList/>
            </div>
            <Note/>
          </div>
          <div className='utils-container'>
            <Calculator/>
          </div>
        </Header>
        </section>
  )
}

export default App

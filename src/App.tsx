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
            <TodoList/>
            <Note/>
          </div>
          <div className='utils-container'>
            <Calculator/>
            <SearchCep/>
          </div>
        </Header>
        </section>
  )
}

export default App

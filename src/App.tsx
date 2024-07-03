import './App.css'
import Header from './components/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Home'
import LayoutTables from './components/Layout/_layout_tables'
import TableInternet from './Pages/Tables/__internet'
import TableTv from './Pages/Tables/__clarotv'


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header/>}>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/tabelas' element={<LayoutTables/>}>
                <Route path='/tabelas/internet' element={<TableInternet/>}/>
                <Route path='/tabelas/claro-tv' element={<TableTv/>}/>
                <Route path='/tabelas/claro-movel' element={<h1>INTERNET</h1>}/>
                <Route path='/tabelas/claro-fixo' element={<h1>INTERNET</h1>}/>
              </Route>
            </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App

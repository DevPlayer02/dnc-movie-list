import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './views/Home/Home'
import MovieDetails from './views/MovieDetails/MovieDetails'


function App() {
  const [searchValue, setSearchValue] = useState("")

  return (
    <div className="App" style={{backgroundColor: "#303030"}}>
      <Header onSubmit={( inputValue ) => setSearchValue(inputValue)}/>
      <Routes>
        <Route path='/' element={<Home searchValueProp={searchValue}/>} />
        <Route path='/movie/:id' element={<MovieDetails />}/>
      </Routes>
    </div>
  )
}

export default App

import { useState } from 'react'
import ListOfGifs from './components/listOfGifs/listOfGifs'
import './App.css'

function App() {

  // Estado de valores finales de busqueda
  const [searchValues, setSearchValues] = useState({
    word: '',
    rating: ''
  })
  
  // Estado que controla los valores del formulario
  const [formValues, setFormValues] = useState({
    word: '',
    rating: ''
  })

  const sendSearchForm = (e) => {
    e.preventDefault()

    setSearchValues(formValues)
  }

  const toggleFormValues = (e) => {
    e.preventDefault()

    const {name, value} = e.target

    setFormValues((prevSearch) => ({
      ...prevSearch,
      [name]: value
    }))
  }

  return (
    <main>
      <nav>
        <form className='search-form' onSubmit={sendSearchForm}>
          <input type="text" className='search-form__input' name='word' onChange={toggleFormValues} value={formValues['word']}/>
          <select name="rating" id="" value={formValues['rating']} onChange={toggleFormValues}>
            <option value="g">g</option>
            <option value="pg">pg</option>
            <option value="pg-13">pg-13</option>
            <option value="r">r</option>
          </select>
          <button className='search-form__button'>Buscar</button>
        </form>
      </nav>
      <ListOfGifs search={searchValues}/>
    </main>
  )
}

export default App

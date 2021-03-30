import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './components/recipe/Recipe';
import Spinner from './components/spinner/Spinner';
import Footer from './components/ui/Footer';

const App = () => {
  const APP_ID = process.env.REACT_APP_API_ID;
  const APP_KEY = process.env.REACT_APP_API_KEY;

  const [recipes,setRecipes] = useState([]);
  const [query,setQuery] = useState('Turkey');
  const [isLoading,setIsLoading] = useState(true)

  //Since api allows us to send 10 req per minute we should only send req when we click button.
  const [isBtnClicked, setIsBtnClicked] = useState(false)

  useEffect(()=>{
    const fetchRecipes= async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()

    setRecipes(data.hits)
    setIsLoading(false)
    }
    fetchRecipes()
    
  }, [isBtnClicked]) // eslint-disable-line react-hooks/exhaustive-deps
  
  const updateSearch= (e) => {
    setQuery(e.target.value)
  }

  const getSearch = e =>{
    e.preventDefault();
    setIsBtnClicked(!isBtnClicked ? true : false);
    setIsLoading(true)
    setTimeout(function(e){setQuery('')},10) 
  }

  return (
    <div className="App">
    <form className='search-form'>
      <input onChange={updateSearch} onClick={(e)=>e.target.value === 'Turkey' ? e.target.value='' :null} 
        value={query} placeholder='Search recipes' className='search-bar' type='text' spellCheck='false'/>
      <button onClick={getSearch} className='search-btn' type='submit'>Search</button>
    </form>

    {isLoading ? <Spinner /> :  <div className='eachRecipe'>
    {recipes.map((recipe,index)=>(
      <Recipe 
        key = {index} 
        label = {recipe.recipe.label} 
        calories = {recipe.recipe.calories} 
        img = {recipe.recipe.image} 
        ingredients = {recipe.recipe.ingredients}
      />
    ))}
    </div> }
      <Footer />
    </div>
  );
}

export default App;

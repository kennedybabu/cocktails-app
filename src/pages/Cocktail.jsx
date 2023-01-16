import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useParams } from "react-router-dom"
import { fetchSingleCocktail } from '../redux/features/cocktailSlice'



const Cocktail = () => {
  const {cocktails, loading} = useSelector((state) => ({...state.app}))
  const [modifiedCocktail, setModifiedCocktail] = useState([])
  const {id} = useParams()
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchSingleCocktail(id))
  }, [id])


  useEffect(() => {
    if(cocktails) {
      const {
        strDrink:name,
        strGlass:glass,
        strDrinkThumb: image,
        strCategory: category,
        strIntsructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5

       } = cocktails[0] 

       const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5]

       const newCocktail = {
        name,
        image, category,glass, instructions, ingredients 
       }
       setModifiedCocktail(newCocktail)
    } else {
      setModifiedCocktail(null)
    }
  }, [id, cocktails])

  if(!modifiedCocktail) {
    return <p>No cocktail to display</p>
  } else {
    const {name, image,glass, info,  category, instructions, ingredients} = modifiedCocktail
    return (
      <>
        {loading  ? <p>loading...</p> : (
          <div className='w-[400px] mx-auto'>
              <Link to='/'>
                  go back
              </Link>
              <h2>{name}</h2>
              <div>
                  <img src={image} alt={name} className='w-[300px]' />
              </div>
              <div>
                <p>Name: {name}</p>
                <p>Category: {category}</p>
                <p>Info: {info}</p>
                <p>Glass: {glass}</p>
                <p>Instructions: {instructions}</p>
               
                {ingredients && ingredients.map((item,index) => {
                    return item ? <span key={index}>{item}</span>:null
                })}
              </div>
          </div>
        )}
      </>
    )
  }
}

export default Cocktail
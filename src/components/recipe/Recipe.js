import React from 'react'
import style from './recipe.module.css'

const Recipe = ({label,calories,img,ingredients}) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.heading}>{label}</h1>
      <ul>
      {ingredients.map(ingredient => (
        <li className={style.lis}>{ingredient.text}</li>
      ))}
      </ul>
      <p className={style.lis}>{calories.toFixed(2)} Calories</p>
      <img src={img} className={style.imgRadius} alt='' />

    </div>
  )
}

export default Recipe

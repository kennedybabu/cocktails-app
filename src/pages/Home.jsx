import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchInput from '../components/SearchInput'

const Home = () => {
  return (
     <div className='pt-[100px]'> 
        <SearchInput />
        <CocktailList />
    </div>
  )
}

export default Home
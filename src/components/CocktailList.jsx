import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCocktails } from '../redux/features/cocktailSlice'
import { Link } from 'react-router-dom'


const CocktailList = () => {
    const {cocktails, loading} = useSelector((state) => ({...state.app}))
    const [modifiedCocktail, setModifiedCocktail] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCocktails())
    }, [])


    useEffect(() =>{
        if(cocktails){
            const newCocktails = cocktails.map((item) => {
                const {idDrink, strDrink,strAlcoholic, strDrinkThumb,strGlass } = item
                return {
                    id: idDrink,
                    name:strDrink,
                    image: strDrinkThumb,
                    info: strAlcoholic,
                    glass: strGlass
                }
            })
            setModifiedCocktail(newCocktails)
        } else {
            setModifiedCocktail([])
        }
    },[cocktails])

    if(loading){
        return (
            <div className='w-full h-screen flex items-center justify-center'>
                <p>loading...</p>
            </div>
        )
    }
  return (
    <div className='w-full h-screen grid grid-cols-1 md:grid-cols-3 gap-4 md:px-[80px]'>
        {modifiedCocktail.map((item) => {
            const {id, name, image, glass, info} = item
            return (
                <div className='basis-1'>
                    <img src={image} alt={name} />
                    <div className='w-full text-left'>
                        <p>{name}</p>
                        <p>{info}</p>
                        <small>{glass}</small>
                        <Link to={`/cocktail/${id}`}>
                            Details
                        </Link>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default CocktailList
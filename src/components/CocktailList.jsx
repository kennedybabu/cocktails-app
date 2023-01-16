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
                <div className='basis-1 shadow p-2 w-[350px]'>
                    <img className='rounded-sm' src={image} alt={name} />
                    <div className='w-full text-left'>
                        <h3>{name}</h3>
                        <p>{info}</p>
                        <p>{glass}</p>
                        <Link to={`/cocktail/${id}`}>
                            <button className='px-2 text-white rounded-md py-1 bg-blue-400'>deatils</button>
                        </Link>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default CocktailList
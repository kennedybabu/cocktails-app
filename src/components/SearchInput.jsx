import React, {useRef} from 'react'

const SearchInput = () => {
    const searchValue = useRef()
  return (
    <div className='w-full h-[100px] flex  items-center'>
        <form className='w-[60%] mx-auto'>
            <input className='border p-2 shadow w-full' type='text' name='name' id='name' ref={searchValue} placeholder='cocktail name'/> 
        </form>
    </div>
  )
}

export default SearchInput
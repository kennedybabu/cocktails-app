import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

export const fetchCocktails = createAsyncThunk('cocktails/fetchCocktails', async() => {
    return fetch(
        'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
        ).then((res) => res.json())
})


export const fetchSingleCocktail = createAsyncThunk('cocktails/fetchSingleCocktail', async({id}) => {
    return fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${id}`
        ).then((res) => res.json())
})


const cocktailSlice = createSlice({
    name:'cocktails',
    initialState: {
        cocktails:[],
        cocktail:[],
        loading:false,
        error:null
    },
    extraReducers: {
        [fetchCocktails.pending]:(state, action) => {
            state.loading = true
        },
        [fetchCocktails.fulfilled]:(state, action) => {
            state.loading = false
            state.cocktails = action.payload.drinks
        },
        [fetchCocktails.rejected]: (state, action) => {
            state.error = action.payload
            state.loading = false
        },
        [fetchSingleCocktail.pending]:(state, action) => {
            state.loading = true
        },
        [fetchSingleCocktail.fulfilled]:(state, action) => {
            state.loading = false
            state.cocktail = action.payload.drinks
        },
        [fetchSingleCocktail.rejected]: (state, action) => {
            state.error = action.payload
            state.loading = false
        }
    }
})


export default cocktailSlice.reducer
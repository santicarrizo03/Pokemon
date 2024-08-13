import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_TYPES = "GET_TYPES"


export const getPokemons = () => {
  return async (dispatch) => {
    try {
      let url = "http://localhost:3001/pokemons";
      let json = await axios.get(url);
      return dispatch({
        type: GET_POKEMONS,
        payload:json.data
      })
    } catch (err) {
      console.log(err);
    }
  }
}

export const getTypes = () => {
  return async (dispatch) => {
    try {
      let url = "http://localhost:3001/types"
      let json = await axios.get(url);
      return dispatch({
        type: GET_TYPES,
        payload: json.data
      })
    } catch (error) {
      console.log(error);
    }
  }
}
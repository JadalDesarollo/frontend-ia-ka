import { Dispatch } from "redux"

export const AddToCart = (id: number) => async (dispatch: Dispatch) => {
    dispatch({
        type: "ADD_TO_CART",
        payload: id
    })
}

export const ProductReduxData = (id:number) => async (dispatch: Dispatch) => {
    dispatch({
        type: "PRODUCT",
        payload: id
    })
}
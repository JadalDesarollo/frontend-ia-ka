const PODUCTDATA: any = []

const data: any = PODUCTDATA

interface Action {
    type: string;
    payload: string;
}

export default function reducer(state = data, action: Action) {
    const { type, payload } = action;
    switch (type) {
        case "ADD_TO_CART":
            state = PODUCTDATA.filter((idx) => {
                return idx.id == payload
            })
            return [...state]
            break;
        case "PRODUCT":
            state = PODUCTDATA.filter((idx) => {
                return idx.id == payload
            })
            return state
            break;
        default:
    }
}
//action Creator 
export function EditNumberMin (newNumber){
    return {
        type: 'NUM_MIN_EDIT',
        payload: newNumber
    }
}

export const insert = (array, action) =>{
    return [
      ...array.slice(0, action.index),
      action.item,
      ...array.slice(action.index)
    ]
  }

export const update = (array, action) => {
    return array.map((item, index) => {
        if (index !== action.index) {      
          return item
        }
    
        return {
          ...item,
          ...action.item
        }
      })
}

export const removeItem= (array, action) => {
    return array.filter((item, index) => index !== action.index)
}

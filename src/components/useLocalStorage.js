// Reference:
// https://www.youtube.com/watch?v=6ThXsUwLWvc&ab_channel=WebDevSimplified
import {useState, useEffect} from "react"

function getSavedValue(key, initalValue){
    const saveValue = JSON.parse(localStorage.getItem(key))
    if(saveValue) return saveValue;
    if(initalValue instanceof Function) return initalValue();
    return initalValue
}

export default function useLocalStorage(key, initialValue) {

    const [value, setValue] = useState( () => getSavedValue(key, initialValue) )

    /*
    const [value, setValue] = useState(() => getSavedValue(key, initialValue)
      const jsonValue = localStorage.getItem(key)
      if (jsonValue != null) return JSON.parse(jsonValue)
      return initialValue
    })
    */
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
  
    return [value, setValue]
  }
import { func } from "prop-types"
import React, {useState, useEffect} from "react"

const AppContext = React.createContext()

function AppContextProvider(props) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    
   
    function toggleFavorite(id) {
        const updatedArray = allPhotos.map(photo => photo.id === id ? 
            {...photo, isFavorite: !photo.isFavorite} : photo)
        setAllPhotos(updatedArray)
    }

    function addToCart(image) {
        setCartItems(prevCartItems => [...prevCartItems, image])
    }
   
    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    function emptyCart() {
        setCartItems([])
    }

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
        .then(res => res.json())
        .then(data => setAllPhotos(data))
    }, [])

   

    return (
        <AppContext.Provider value={{allPhotos, toggleFavorite, addToCart, cartItems, removeFromCart, emptyCart}}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContext, AppContextProvider}
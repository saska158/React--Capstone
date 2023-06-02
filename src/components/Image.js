import React, {useState, useContext} from "react"
import { AppContext } from "../appContext"
import PropTypes from "prop-types"


function Image({className, photo}) {
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(AppContext)
     
    const heartIcon = photo.isFavorite && <i className="ri-heart-fill favorite" 
                                              onClick={() => toggleFavorite(photo.id)}></i> ||
                      hovered && <i class="ri-heart-line favorite" onClick={() => toggleFavorite(photo.id)}></i>
     

    function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.id === photo.id)
        if(alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(photo.id)}></i>
        } else if(hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(photo)}></i>
        }
    }

    return (
        <div 
          className={`${className} image-container`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}>
            <img src={photo.url} className="image-grid"/>
            {heartIcon}
            {cartIcon()}
        </div>
    )
}

/*<i className="ri-shopping-cart-fill cart"></i>*/

Image.propTypes = {
    className: PropTypes.string,
    photo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image

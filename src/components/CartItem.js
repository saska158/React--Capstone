import React, {useState, useContext} from "react"
import { AppContext } from "../appContext"

function CartItem({item}) {
    const [hovered, setHovered] = useState(false)
    const {removeFromCart} = useContext(AppContext)

    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item">
        <i 
          className={iconClassName} 
          onClick={() => removeFromCart(item.id)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
        </i>
        <img src={item.url} width="130px" />
        <p>$5.99</p>
    </div>
    )
}

export default CartItem
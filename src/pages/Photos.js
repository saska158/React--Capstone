import React, {useContext} from "react"
import {getClass} from "../utils"
import { AppContext } from "../appContext"
import Image from "../components/Image"

function Photos() {
    const {allPhotos} = useContext(AppContext) 
 
    const allPhotosElements = allPhotos.map((photo, i) => <Image key={photo
    .id} photo={photo} className={getClass(i)} />)
 
    return (
        <main className="photos">
            {allPhotosElements}
        </main>
    )
}

export default Photos
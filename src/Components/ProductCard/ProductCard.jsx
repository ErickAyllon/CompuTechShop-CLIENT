import {React} from 'react'
import {styles} from './CardProducto.modules.css'

export default function CardProducto({name, price, image, id, description}){
    return (
        <div>
           <h3>{name}</h3>
           <h3>{price}</h3> 
           <h3>{id}</h3> 
           <h3>{description}</h3> 
           <img src={image} alt=""/>
        </div>
    )
}
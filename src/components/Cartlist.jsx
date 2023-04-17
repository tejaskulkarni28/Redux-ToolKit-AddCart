import React, { useState } from "react"
import "../data/products.json"
import data from "../data/products.json"
import { useDispatch } from "react-redux"
import { addCartSlice } from "../Slices/addToCart"
const Cartlist = ()=>{
    const products = data.products
    const dispatch = useDispatch()
    const [checkedProductsObj, setCheckedProductsObj] = useState([])
    const handleSubmit = (checkedProductsObj)=>{
        // here I will dispatch data to the Redux
        dispatch(addCartSlice(checkedProductsObj))
    }
    return(
        <div className="cartlist-container">
            <div className="cartlist-content">
                <h1>Add to cart</h1>
                    {
                        // mapping products 
                        products.map((i)=>{
                            return(
                                <p>{i.name}
                                <input type="checkbox" onChange={(event)=>{
                                    if(event.target.checked){
                                        setCheckedProductsObj([...checkedProductsObj,{
                                            id:i.id,
                                            name:i.name
                                        }])
                                    }
                                    else{
                                        setCheckedProductsObj(checkedProductsObj.filter((prods)=> i.id !== prods.id))
                                    }
                                }}/>
                                </p>
                            )

                        })
                  
                    }
                    <button  onClick={()=>handleSubmit(checkedProductsObj)} >add to cart</button>
            </div>
        </div>
    )
}

export default Cartlist;
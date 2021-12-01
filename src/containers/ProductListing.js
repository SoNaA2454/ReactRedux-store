import React , {useEffect}from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";


const ProductListing =() =>{

    const products = useSelector((state)=>state);
    const dispatch = useDispatch();

    const fetchProducts = async() =>{
        const responce = await axios.get("https://api.spacexdata.com/v3/launches").catch((err)=>{
            console.log("Err", err);
        });
        dispatch(setProducts(responce.data));
    };
    
    useEffect(()=>{
        fetchProducts();
    },[]);

    console.log("Products...",products);
  
    
    return ( 
        <>
        
        <div className="ui  container">
            <ProductComponent/>
        </div>
        </>
   
    )
}

export default ProductListing;
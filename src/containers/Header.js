
import React ,{useEffect}from 'react';
import {setProducts}  from '../redux/actions/productActions';
import axios from "axios";
import { useDispatch} from "react-redux";

const Header =  () =>{
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

    return (
        <div className="ui relative menu">
            <div className="ui container center">
            <div className="ui search">
                <div className="ui icon input">
                    <input type="text" 
                    placeholder="search Details" 
                    className="prompt"
                    onChange={fetchProducts} />
                    <i className="search icon"></i>
                </div>
            </div>
            </div>
        </div>
    )
};

export default Header;

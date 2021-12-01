import React from "react";
import {  useSelector} from "react-redux";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'justify',
    color: theme.palette.text.secondary,
  }));
  

const ProductComponent =() =>{
    const products = useSelector((state)=>state.allProducts.products);

    
    const renderList = products.map((product)=> {

        const {flight_number,  mission_name,upcoming, launch_year,
          launch_date,
          rocket_id,
          rocket_name,
          rocket_type,
          launch_success,
          launch_failure}=product;

        return(
          <>
          <Grid container spacing={3}>
            <Grid item xs>
               <Item>
               {flight_number} 
               {mission_name} 
               {upcoming} 
               {launch_year}
                {launch_date}
               {rocket_id}           
               {rocket_name}
               {rocket_type}
               {launch_success}
              {launch_failure}
              </Item>
            </Grid>
              
          </Grid>
          </>
        );
    });

    return (
        <> 
            {renderList}
        </>
    )
   
}
export default ProductComponent;
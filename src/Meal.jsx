import React from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';


function Meal(){
    var [food,setFood] = React.useState([])
    React.useEffect(function(){
      axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res)=>{
        console.log(res.data)
        var items = res.data.meals
        setFood(items)
    })
    
},[])
    return (
        <div>
            {
                food.map((a)=>{
                    return <Stack mt={4} >
                            <Card sx={{ maxWidth: 230 }} >
                                <CardMedia
                                sx={{ height: 140 }}
                                image={a.strMealThumb}
                                />
                                <Typography gutterBottom variant="h5" component="div">
                                {a.strMeal}
                                </Typography>
                            </Card>
                        </Stack>
                })
            }

            
        </div>
        
   )
    
    
}
export default Meal;
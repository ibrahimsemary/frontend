import React from 'react'
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';




const MyCard = ({title,pic}) => {
    return(
        <div className='ui container'>
            <Card className='my-card'>
                <img src = {pic} className = "card-img"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                </CardContent>
            </Card>
        
        
        </div>
    )
}
export default MyCard
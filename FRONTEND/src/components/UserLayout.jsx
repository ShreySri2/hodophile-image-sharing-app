import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';

function UserLayout(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={props.image}
          alt={props.name}
        />
        <CardContent>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default UserLayout

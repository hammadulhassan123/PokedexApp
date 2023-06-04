// Card.jsx
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function PokemonCard({ name, image, types, attack, hp }) {
  const typeHandler = () => {
    if (types[1]) {
      return types[0].type.name + " | " + types[1].type.name;
    }
    return types[0].type.name;
  };

  return (
    <Card sx={{ maxWidth: 240 }} style={{ margin: '5px', backgroundColor: '#4169E1' }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt="Pokemon" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <br />
          <Typography gutterBottom variant="bold" component="div">
            {typeHandler()}
          </Typography>
          <Typography variant="bold" color="text.secondary">
            Attack: {attack}
          </Typography>
            <br />
          <Typography variant="bold" color="text.secondary">
            HP: {hp}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

import React from 'react';
import { Box, Card, CardMedia, Grid, Typography } from '@mui/material';
import { characterDetails, IData } from '../../../tsBreakingBad/src/App';

const CardsContainer:React.FC<IData>=({data})=> {
  return (
    <Box m={3}>
    <Grid container spacing={4}>
      {data &&
        data?.map((character:characterDetails,i:React.Key)=>{
        return  <Grid container item  xs={2} key={i}>
          <Card variant='outlined' data-testid="card"> 
            <Typography align='center' m={1} data-testid="characterName">
              {character.name}
            </Typography>
            <CardMedia
                data-testid="characterImg"
                component="img"
                height="294"
                image={character.img}
                alt="image not found"
            />
          </Card>
        </Grid>
      })
      }
    </Grid>
    </Box>
  )
}

export { CardsContainer }

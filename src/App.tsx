import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';
import {CardsContainer} from './component/cardsContainer';
import  { InputFrom } from './component/InputForm';

export type characterDetails={
  appearance?: Number[],
  birthday?: string,
  img: string,
  name: string,
  nickname?: string,
  occupation?: string[],
  portrayed?: string,
  status?: string
}
export interface IData{
    data:characterDetails[]
}
const App = ()=> {
  const {
    data: charactersDetails
  } = useQuery(
    "characters",
    () => axios.get(`https://www.breakingbadapi.com/api/characters`).then((res) => res.data),
    {
      retry: 3,
    }
  );
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (searchString:string) => {
    let value = searchString.toLowerCase();
    let result = [];
    console.log(value);
    result = charactersDetails?.filter((data:characterDetails) => {
      return data.name.toLowerCase().includes(value);
    });
    setFilteredData(result);
  };

  return (<>
   <Box m={1.5}>
   <Grid container alignItems="center">
      <Grid item  xs={8}>
        <Typography variant="h3">Breaking Bad</Typography>
      </Grid>
      <Grid item  xs={3}>
        <InputFrom handleSearch={handleSearch} handleResetSearch={()=>setFilteredData(charactersDetails)}/>
      </Grid>
    </Grid>
   </Box>
   {filteredData.length>0?     <CardsContainer data={filteredData}/>:    <CardsContainer data={charactersDetails}/>}
  </>
  )
}

export default App

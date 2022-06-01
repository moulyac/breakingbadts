import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

interface IFromValue{
    search: string
}

const schema = yup
  .object({
    search: yup.string().required("search character is required")
  })
  .required();

interface IInput {
    handleSearch: (searchString:string)=>void;
    handleResetSearch: ()=>void
}  

export const InputFrom:React.FC<IInput> = ({handleSearch, handleResetSearch})=>{
    const {
       handleSubmit,
        formState: { errors },
        control,
        reset
      } = useForm<IFromValue>({ resolver: yupResolver(schema) });
      
    const onSubmit:SubmitHandler<IFromValue> = (data)=>{
        handleSearch(data.search)
    }
    const handleReset = ()=>{
        reset()
        handleResetSearch()
    }
    return<>
    <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container alignItems="center" justifyContent="space-around">
            <Grid item>
            <Controller
                name="search"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                    // placeholder="search character"
                    variant="outlined"
                    type="text"
                    label="search character"
                    value={value}
                    onChange={onChange}
                    // error={!!error}
                    // helperText={error ? error.message : null}
                />
                )}
                // rules={{ required: 'First name required' }}
            />
            {errors.search?.message && <Typography color="red">{errors.search.message}</Typography>}
            </Grid>
            <Button name="submit" type="submit">Submit</Button>
            <Button onClick={handleReset} >Reset</Button>
        </Grid>
    </form>
    </>
}

// export { InputFrom }
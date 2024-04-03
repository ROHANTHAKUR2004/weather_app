import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import ForecastDataState from "../../Interfaces/ForecastDataState";
import axiosinstance from "../../Config/axiosInstance";


const initialState : ForecastDataState = {
    status : 'default',
    data :  undefined,
}


export const fetchData = createAsyncThunk('data/fetcghdata',  async() => {
    try {
        const response =  await axiosinstance.get(`forecast.json?key=995967ca3cd04f8f92a32058240204&days=7&aqi=yes&q=Bhopal`)
       console.log(response);
       return response;
    }
     catch (error) {
       console.log(error) 
    }
});


const forecastSlice = createSlice({
    name : 'forecast',
    initialState ,
    reducers : {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, ( state , action )=>{
            if(!action.payload) return ;
        })

    }
});


export default forecastSlice.reducer;
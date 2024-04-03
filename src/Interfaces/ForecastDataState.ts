import ForecastData from "./ForecastData"
export default interface ForecastDataState {
    status : 'default' | 'loading' | 'success' | 'Failure',
    data : ForecastData  

}
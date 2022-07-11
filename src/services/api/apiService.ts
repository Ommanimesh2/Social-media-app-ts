import { axiosClient } from "./axios";

export function getData(){
return axiosClient('/search')
}
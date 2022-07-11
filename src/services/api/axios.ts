import axios from 'axios'
import { BASE_URL } from '../../constants/baseUrl'
export  const axiosClient= (endpoint:string) =>{

    axios({
        'method':'GET',
        'url':`${BASE_URL}/${endpoint}`,
        'headers': {
            
            'x-api-key': "3bea204f-d8c8-450b-8f2f-cd8bac3e8129",
        },
    })
}

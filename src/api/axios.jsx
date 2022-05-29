import axios from 'axios'
export  const getData= () =>
    axios({
        'method':'GET',
        'url':'https://api.thecatapi.com/v1/images/search',
        'headers': {

            'x-api-key': "3bea204f-d8c8-450b-8f2f-cd8bac3e8129"
        },
    })

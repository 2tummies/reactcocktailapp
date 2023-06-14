For the API, a new key for each user must be added. The key can be obtained from the api-ninjas site.

The layout of the api .js file is as follows:
--------------------------------------
import axios from 'axios'

const KEY = '{your API key goes here}'

export default axios.create({
    baseURL: 'https://api.api-ninjas.com/v1',
    headers: {
        'X-Api-Key': KEY
    }
})
--------------------------------------
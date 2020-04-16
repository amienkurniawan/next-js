import Axios from 'axios'
import Cookies from 'js-cookie'

const headers = () => {
    let token = Cookies.getJSON('jwt');
    if (token) {
        return { headers: { 'authorization': `Bearer ${token}` } }
    }
    return undefined;
}

export const authHeaders = async () => {
    return await Axios.get('/api/v1/secret', headers()).then(response => response.data)
}
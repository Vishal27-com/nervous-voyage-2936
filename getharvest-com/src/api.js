import axios from 'axios';
export function postUserDetails(data){
    return axios.post('http://localhost:5000/user_details',data);
}
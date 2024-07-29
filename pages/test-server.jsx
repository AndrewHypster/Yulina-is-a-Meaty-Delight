import axios from 'axios';

export default function TestServer () {
  axios.post('/api/hello', { key: 'value' })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
}
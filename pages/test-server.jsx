import axios from 'axios';

export default function TestServer () {
  axios.post('/api/tg-bot', { chatid: 622243013, text: '**Нове** замовлення' })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
}
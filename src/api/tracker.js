import axios from 'axios';
import ENV from '../../env';

export default axios.create({
  baseURL: ENV().baseURL
});

import axios from 'axios';
import config from '../components/Config';

const accessKey = config.access_key;

export default axios.create({
	naseURL: 'https://api.unsplash.com',
	headers:{
				Authorization: 'Client-ID ' + accessKey
			}
});
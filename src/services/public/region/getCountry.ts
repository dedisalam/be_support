import axios from 'axios';
import { DOMAIN } from '@config';

const getCountry = async () => {
  try {
    const Get = await axios.get(`${DOMAIN.COUNTRIES}/v2/country/IDN?format=json`);
    const result = Get.data[1];
    return result;
  } catch (error) {
    return error;
  }
};

export default getCountry;

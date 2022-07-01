import axios from 'axios';
import { DOMAIN } from '@config';

const getCities = async id => {
  try {
    const Get = await axios.get(`${DOMAIN.INDONESIA}/data-indonesia/kabupaten/${id}.json`);
    const result = Get.data;
    return result;
  } catch (error) {
    return error;
  }
};

export default getCities;

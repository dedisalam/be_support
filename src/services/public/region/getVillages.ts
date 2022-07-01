import axios from 'axios';
import { DOMAIN } from '@config';

const getVillages = async id => {
  try {
    const Get = await axios.get(`${DOMAIN.INDONESIA}/data-indonesia/kelurahan/${id}.json`);
    const result = Get.data;
    return result;
  } catch (error) {
    return error;
  }
};

export default getVillages;

import axios from 'axios';
import { DOMAIN } from '@config';

const getProvinces = async () => {
  try {
    const Get = await axios.get(`${DOMAIN.INDONESIA}/data-indonesia/provinsi.json`);
    const result = Get.data;
    return result;
  } catch (error) {
    return error;
  }
};

export default getProvinces;

import { DOMAIN } from "@config";
import axios from "axios";

const getSubDistricts = async (id) => {
  try {
    const Get = await axios.get(
      `${DOMAIN.INDONESIA}/data-indonesia/kecamatan/${id}.json`,
    );
    const result = Get.data;
    return result;
  } catch (error) {
    return error;
  }
};

export default getSubDistricts;

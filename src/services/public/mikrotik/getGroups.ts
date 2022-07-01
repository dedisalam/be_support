import axios from 'axios';
import DomParser from 'dom-parser';
import { DOMAIN } from '@config';

const getGroups = async () => {
  try {
    const Get = await axios.get(`${DOMAIN.MIKROTIK}/products/group/interfaces`);
    const parser = new DomParser();
    const dom = parser.parseFromString(Get.data);

    const body = dom.getElementsByTagName('body')[0];
    const sidebar = body.getElementById('sidebar');
    const categories = sidebar.getElementsByClassName('categories')[0];
    const result = categories
      .getElementsByTagName('a')
      .map(a => {
        const link = a.getAttribute('href').replace('/products/group/', '');
        return {
          title: a.innerHTML,
          links: `/public/mikrotik/products/${link}`,
        };
      })
      .filter(a => a.title === 'Wireless for home and office' || a.title === 'Ethernet routers' || a.title === 'RouterBOARD');
    return result;
  } catch (error) {
    return error;
  }
};

export default getGroups;

/* eslint-disable no-console */
import axios from 'axios';
import { html2json } from 'html2json';

const Domain = 'https://mikrotik.com';

const getProduct = async group => {
  let links;
  if (group) {
    links = `${Domain}/products/group/${group}`;
  } else {
    links = `${Domain}/products`;
  }
  try {
    const get = await axios.get(links);
    const Root = html2json(get.data);
    const body = Root.child[0].child[3];
    const content = body.child[3].child[5];
    const page = content.child[5].child[1];
    const productList = page.child[3];
    const catalog = [];
    productList.child.forEach(async product => {
      if (product.tag === 'div') {
        const productImg = product.child[1].child[1].child[0].attr['data-src'];
        const productDesc = product.child[3];
        const title = productDesc.child[1].child[0].child[0].text;
        const linkDetail = productDesc.child[1].child[0].attr.href;
        const description = productDesc.child[3].child[0].text;
        catalog.push({
          title,
          description,
          productImg,
          linkDetail,
        });
      }
    });
    return catalog;
  } catch (error) {
    return error;
  }
};

const getDetail = async link => {
  try {
    const page2Get = await axios.get(`${Domain}${link}`);
    const page2Root = html2json(page2Get.data);
    const page2body = page2Root.child[0].child[3];
    const page2content = page2body.child[3].child[5];
    const page2page = page2content.child[7].child[1].child[5].child[13];
    const spesification = page2page.child[1];
    const spesifikasi = {};
    const isi = [];
    spesification.child.forEach(spec => {
      if (spec.tag === 'table') {
        const tbody = spec.child[3];
        const test1 = {};
        tbody.child.forEach(tr => {
          if (tr.tag === 'tr') {
            const title = tr.child[1].child[0].text.toLowerCase().replace(/\s+/g, '_');
            if (tr.child[1].child[0].text === 'Operating System') {
              const value = tr.child[3].child[1].child[0].text.replace(/\s+$/, '');
              Object.assign(test1, {
                [title]: value,
              });
            } else {
              const value = tr.child[3].child[0].text.replace(/\s+$/, '');
              Object.assign(test1, {
                [title]: value,
              });
            }
          }
        });
        isi.push(test1);
      }
      if (spec.tag === 'ul') {
        const ul = [];
        spec.child.forEach(async li => {
          if (li.tag === 'li') {
            const text = li.child[1].child[3].text.replace(/\t/g, '').replace(/\n/g, '');
            const includedPart = {
              link: li.child[1].attr.href,
              text,
            };
            ul.push(includedPart);
          }
        });
        isi.push(ul);
      }
    });
    spesification.child.forEach(spec => {
      if (spec.tag === 'h2') {
        const title = spec.child[0].text.toLowerCase().replace(/\s+$/, '').replace(/&amp;/g, 'and').replace(/\s+/g, '_');

        // eslint-disable-next-line prefer-destructuring
        spesifikasi[title] = isi[0];
        isi.shift();
      }
    });
    return spesifikasi;
  } catch (error) {
    return error;
  }
};

const Mikrotik = async () => {
  console.log(await getProduct('wireless-for-home-and-office'));
};

export default Mikrotik;

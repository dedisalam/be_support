/* eslint-disable no-console */
import axios from 'axios';
import { logger } from '@utils';
import { createSubDistrict createVillage createCity createCountry createProvince } from '@services';

function Region() {
  setTimeout(async () => {
    const getData = async (wilayah, idParent) => {
      let url;
      if (wilayah === 'provinsi') {
        url = `https://ibnux.github.io/data-indonesia/${wilayah}.json`;
      } else {
        url = `https://ibnux.github.io/data-indonesia/${wilayah}/${idParent}.json`;
      }
      try {
        return await axios.get(url);
      } catch (error) {
        logger.error(error);
      }
      return null;
    };

    const Province = {
      data: [
        { id: 12, nama: 'SUMATERA UTARA' },
        { id: 31, nama: 'DKI JAKARTA' },
        { id: 32, nama: 'JAWA BARAT' },
      ],
    };
    try {
      await createCountry({ id: 360, name: 'INDONESIA' });
      // const Province = await getData('provinsi', 0);
      Province.data.forEach(async prov => {
        try {
          await createProvince({ id: prov.id, name: prov.nama.toUpperCase(), CountryId: 360 });
          const Kabupaten = await getData('kabupaten', prov.id);
          Kabupaten.data.forEach(async kab => {
            try {
              await createCity({ id: kab.id, name: kab.nama.toUpperCase(), ProvinceId: prov.id });
              const SubDistrict = await getData('kecamatan', kab.id);
              SubDistrict.data.forEach(async kec => {
                try {
                  await createSubDistrict({ id: kec.id, name: kec.nama.toUpperCase(), CityId: kab.id });
                  const Village = await getData('kelurahan', kec.id);
                  Village.data.forEach(async kel => {
                    try {
                      await createVillage({ id: kel.id, name: kel.nama.toUpperCase(), SubDistrictId: kec.id });
                      //   console.log(`${kel.nama}, ${kec.nama}, ${kab.nama}, ${prov.nama}`);
                    } catch (error) {
                      console.log(error);
                    }
                  });
                } catch (error) {
                  console.log(error);
                }
              });
            } catch (error) {
              console.log(error);
            }
          });
        } catch (error) {
          console.log(error);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, 10000);
}

export default Region;

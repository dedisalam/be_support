/* eslint-disable no-console */
import axios from 'axios';
import { logger } from '@utils';
import { createKecamatanService, createKelurahanService, createKotaKabService, createNegaraService, createProvinsiService } from '@services';

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

    const Provinsi = {
      data: [
        { id: 12, nama: 'SUMATERA UTARA' },
        { id: 31, nama: 'DKI JAKARTA' },
        { id: 32, nama: 'JAWA BARAT' },
      ],
    };
    try {
      await createNegaraService({ id: 360, name: 'INDONESIA' });
      // const Provinsi = await getData('provinsi', 0);
      Provinsi.data.forEach(async prov => {
        try {
          await createProvinsiService({ id: prov.id, name: prov.nama.toUpperCase(), NegaraId: 360 });
          const Kabupaten = await getData('kabupaten', prov.id);
          Kabupaten.data.forEach(async kab => {
            try {
              await createKotaKabService({ id: kab.id, name: kab.nama.toUpperCase(), ProvinsiId: prov.id });
              const Kecamatan = await getData('kecamatan', kab.id);
              Kecamatan.data.forEach(async kec => {
                try {
                  await createKecamatanService({ id: kec.id, name: kec.nama.toUpperCase(), KotaKabId: kab.id });
                  const Kelurahan = await getData('kelurahan', kec.id);
                  Kelurahan.data.forEach(async kel => {
                    try {
                      await createKelurahanService({ id: kel.id, name: kel.nama.toUpperCase(), KecamatanId: kec.id });
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

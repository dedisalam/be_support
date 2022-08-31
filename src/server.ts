import App from '@app';
import IndexRoute from '@routes/index';
import AuthRoute from '@routes/admin/auth';
import UserRoute from '@routes/admin/user';
import CountryRoute from '@routes/region/country';
import ProvinceRoute from '@routes/region/province';
import CityRoute from '@routes/region/city';
import SubdistrictRoute from '@routes/region/subdistrict';
import VillageRoute from '@routes/region/village';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([
  new IndexRoute(),

  new AuthRoute(),
  new UserRoute(),

  new CountryRoute(),
  new ProvinceRoute(),
  new CityRoute(),
  new SubdistrictRoute(),
  new VillageRoute(),
]);

app.listen();

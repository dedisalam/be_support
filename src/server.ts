import App from '@app';
import IndexRoute from '@routes/index.route';
import AuthRoute from '@routes/admin/auth.route';
import UserRoute from '@routes/admin/user.route';
import CountryRoute from '@routes/region/country.route';
import ProvinceRoute from '@routes/region/province.route';
import CityRoute from '@routes/region/city.route';
import SubdistrictRoute from '@routes/region/subdistrict.route';
import VillageRoute from '@routes/region/village.route';
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

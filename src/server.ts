import App from '@app';
import AuthRoute from '@routes/admin/auth';
import IndexRoute from '@routes';
import UsersRoute from '@routes/admin/user';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute()]);

app.listen();

import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
import { createRoles } from './libs/initialSetup';

import authRoutes from './routes/auth.routes';
import imageRoutes from './routes/image.routes';
import userRoutes from './routes/user.routes';

const app = express();
createRoles();

app.set('pkg', pkg);

app.use(express.json());
app.use(morgan('dev'));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', (req, res) => {
	res.json({
		name: app.get('pkg').name,
		author: app.get('pkg').author,
		description: app.get('pkg').description,
		version: app.get('pkg').version,
	});
});

app.use('/api/auth', authRoutes);
app.use('/api/images', imageRoutes);
app.use('/api/users', userRoutes);

export default app;

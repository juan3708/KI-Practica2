import express, {json, urlencoded} from 'express';
import morgan from 'morgan';
import cargoRoutes from '../src/routes/cargo';

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//middlewares
app.use(morgan('dev'));
app.use(urlencoded({
    extended: true
}));
app.use(json());

//routes
app.use('/api/cargo', cargoRoutes);

export default app;
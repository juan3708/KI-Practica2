import express, {json, urlencoded} from 'express';
import morgan from 'morgan';
import cargoRoutes from '../src/routes/cargo';
import categoriaRoutes from '../src/routes/categoria';
import rolRoutes from '../src/routes/rol';
import tecnologiaRoutes from '../src/routes/tecnologia';
import textoRoutes from '../src/routes/texto';
import soluciones_serviciosRoutes from '../src/routes/soluciones_servicios';
import noticiaRoutes from '../src/routes/noticia';
import avisoRoutes from '../src/routes/aviso';
import postulanteRoutes from '../src/routes/postulante';
import bitacoraRoutes from '../src/routes/bitacora';
import UsuarioRoutes from '../src/routes/usuario';



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
app.use('/api/categoria', categoriaRoutes);
app.use('/api/rol', rolRoutes);
app.use('/api/tecnologia', tecnologiaRoutes);
app.use('/api/texto', textoRoutes);
app.use('/api/soluciones_servicios', soluciones_serviciosRoutes);
app.use('/api/noticia', noticiaRoutes);
app.use('/api/aviso', avisoRoutes);
app.use('/api/postulante', postulanteRoutes);
app.use('/api/bitacora', bitacoraRoutes);
app.use('/api/usuario', UsuarioRoutes);

export default app;
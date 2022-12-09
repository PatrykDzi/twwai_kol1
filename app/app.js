import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import routes from './REST/routes';
import config from '../config';

const app = express();
app.use(express.static(__dirname + '/public'));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit: '2048kb'}));

app.use(cors());

routes(app);
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);


app.listen(config.config.port, function () {
    console.info(`Server is running at ${config.config.port}`)
});
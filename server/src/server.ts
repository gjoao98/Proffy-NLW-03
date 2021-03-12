import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// Corpo (Request Body): 
    // Dados para criação ou atualização de um registro
// Route params: 
    // Identificar qual recurso quero atualizar ou deletar
// Query params: 
    // Paginação, filtros, ordenação

app.use(routes);

app.listen(3333);

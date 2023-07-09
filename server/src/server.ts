import 'dotenv/config';

import fastify from 'fastify';
import { privateRoutes } from './routes.private';

const app = fastify();



app.get('/public', () => {
  return 'Hello World!';
});

app.register(privateRoutes);

app.listen({
  port: 3333,
}).then(() => {
  console.log(`Serve starting`);
});


//NONE
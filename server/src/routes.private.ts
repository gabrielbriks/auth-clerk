import { clerkClient, clerkPlugin, getAuth } from '@clerk/fastify';
import { FastifyInstance } from "fastify";

//Lembre-se que todo Plugin no Nestify deve ser assincrono
export async function privateRoutes(app: FastifyInstance) {

  //O registro do Clerk aqui apenas adiciona as informações do usuario na rota
  app.register(clerkPlugin);

  app.get('/private', async (request, reply) => {

    //Validar se o user está mesmo logado
    const { userId } = getAuth(request);
    
    if(!userId){
      return reply.status(403).send('Unauthenticated');
    }

    //Pegando os dados do usuário
    const user = await clerkClient.users.getUser(userId);
    
    
    return user;
  })
}
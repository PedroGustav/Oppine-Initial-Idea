import Router from 'express';
import CreateUserService from '../services/User/CreateUserService';
import DeleteUserService from '../services/User/DeleteUserService';
import ListAllUsersService from '../services/User/ListAllUsersService';


export const usersRoutes = Router();


//-------------Listagem de usuários---------------//
usersRoutes.get('/', async (request, response) => {
    
    const listUsers = new ListAllUsersService();

    const users = await listUsers.execute();

    return response.status(200).json(users);

});


//-------------Criação de usuário ---------------//
usersRoutes.post('/', async (request, response) => {

    const { name, username, email, password } = request.body;

    

    const createUser = new CreateUserService();

    const user = await createUser.execute({
        name,
        username,
        email,
        password,
    });


    return response.status(201).json(user);
})


//-------------Deleção de usuário----------------//
usersRoutes.delete('/:id', async (request, response) => {

    const { id } = request.params;

    const deleteUser = new DeleteUserService();

    const message = await deleteUser.execute({id});

    return response.status(200).json(message);
});
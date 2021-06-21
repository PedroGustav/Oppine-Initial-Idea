import Router from 'express';
import AuthenticadedUserService from '../services/User/AuthenticatedUserService';


export const sessionsRoutes = Router();


sessionsRoutes.post('/user', async(request, response) => {

    const { email, password } = request.body;
    
    const authenticatedUser = new AuthenticadedUserService();

    const { user, token } = await authenticatedUser.execute({
        email,
        password,
    });

    return response.json({
        user:{
            id: user.id,
            name: user.name,
            email: user.email,
            username: user.username,
        },
        token,
    });
});


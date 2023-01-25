'use strict'

const User = use('App/Models/User'); // impoetar el modelo

class UserController {
    async login({ request, auth }) {
        const { email, password } = request.all();
        // Generar un token
        const token = await auth.attempt(email, password)
        return token;
    }


   async store({ request }){
        const { email, password } = request.all();
        console.log(email, password);

        const user = await User.create({
            email,
            password,
            username: email // igualando el email para no poner username q viene en el modelo User x defecto
        });
          return user;

    };
}

module.exports = UserController

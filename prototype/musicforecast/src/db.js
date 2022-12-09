const mongo = require('./mongo');
const userSchema = require('./schemas/UserSchema');

export const connectDB = async (user) => {
    await mongo().then(async (mongoose) => {
        try {
            console.log('connected to mongodb');

            await userSchema(user).save();
        } finally {
            mongoose.connection.close();
        }
    })
}


export function createUser(first, last, em, pass) {
    const user = {
        firstName: first,
        lastName: last,
        email: em,
        password: pass,
        mode: 'Correlated', 
        theme: 'Light'
    }

    connectDB(user);
}


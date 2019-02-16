const env = process.env.NODE_ENV || 'Development';

export default {
    isDev: env === 'Development',
    isTest: env === 'Testing',
    port: 8000,
    dataBaseUrl: 'mongodb+srv://Admin:12345678m@project-g3bag.gcp.mongodb.net/DataBase?retryWrites=true',
    secrets: {
        jwt: "kjb32kjkjbskjabskjbad",
        jwtExp: '100d'
    }
}
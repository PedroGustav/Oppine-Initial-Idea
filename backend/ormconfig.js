module.exports = {
    type: "postgres",
    host: process.env.NODE_HOST_DEVELOPMENT,
    port: 5432,
    username: process.env.NODE_DATABASE_USER,
    password:process.env.NODE_DATABASE_PASSWORD,
    database:process.env.NODE_DATABASE,
    entities:[
        "./src/modules/**/infra/typeorm/entities/*.ts"
    ],
    migrations:[
        "./src/shared/infra/typeorm/migrations/*.ts"
    ],
    cli: {
        migrationsDir: "./src/shared/infra/typeorm/migrations"
    }
}
const app = require('./app');
const dotenv = require('dotenv');
const server = require('http').createServer(app);
dotenv.config();

process.on('uncaughtException', err => {
    console.log(err.name, err.message);
    console.log('UNCAUGHT EXCEPTION! Shutting down...');
    process.exit(1);
});

//Now listen to this port
server.listen(process.env.PORT);

server.on('error', (err) => {
    console.error(err);
});

server.on('listening', async () => {

    console.info(`Driver Online`);

});

process.on('unhandledRejection', err => {
    console.log(err.name, err.message);
    console.log('UNHANDLED REJECTION! Shutting down...');
    server.close(() => {
        process.exit(1);
    })
});

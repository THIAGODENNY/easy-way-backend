module.exports = {
    MONGO_URI = encodeURI(
        `mongodb://${username}:${password}@prontuario-online-shard-00-00-747fe.mongodb.net:27017,prontuario-online-shard-00-01-747fe.mongodb.net:27017,prontuario-online-shard-00-02-747fe.mongodb.net:27017/test?ssl=true&replicaSet=prontuario-online-shard-0&authSource=admin&retryWrites=true&w=majority`
    )
}
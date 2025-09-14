import {createClient} from "redis";

const RedisClient = createClient({
    url:process.env.REDIS_URL,
    socket:{
        tls:true,
        rejectUnauthorized:false
    },

});

RedisClient.on("error",(err)=>console.error("Redis Client Error:",err));
export default RedisClient;
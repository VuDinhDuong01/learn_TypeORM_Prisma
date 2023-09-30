const db= require('../models/connectDatabase/connect')

const restaurantServices={
    getRestaurant:async()=>{
        const response = await db.query("select * from restaurants")
        return {
            message:"get all restaurants successfully",
            data:response.rows
        }
    },
    getOneRestaurant:async(id)=>{
        // query có 2 cách
        const response = await db.query("select * from restaurants where id=$1",[id]) 
        // cách 2 
        // const response = await db.query(`select * from restaurants where id=${id}`) 
        return {
            message :"get restaurant successfully",
            data:response.rows[0] 
        }
    },

    createRestaurant:async({name ,location , price_range})=>{
        await db.query("INSERT INTO restaurants(name,location,price_range) values($1,$2,$3)",[name , location , price_range])
        return {
            message:"create restaurant successfully"
        }
    },

    deleteRestaurant:async(id)=>{
        await db.query("DELETE FROM restaurants WHERE id=$1",[id])
        return {
            message:"delete restaurant successfully"
        }
    },

    updateRestaurant:async({id, name , location , price_range})=>{
        await db.query("UPDATE restaurants SET name=$1, location=$2, price_range=$3 WHERE id=$4",[name , location , price_range,id]);
        return {
            message:"update restaurant successfully"
        }
    }
    
}
module.exports = restaurantServices
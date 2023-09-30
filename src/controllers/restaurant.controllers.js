const restaurantServices = require("../services/restaurant.services")

const restaurantControllers={
    getRestaurant:async(req,res,next)=>{
        try{
            const result = await restaurantServices.getRestaurant()
            return res.json(result)
        }catch(err){
            console.log(err)
        }
        
    },
    getOneRestaurant:async(req, res, next)=>{
        try{
            const {id}= req.params
            const result = await restaurantServices.getOneRestaurant(id)
            return res.json(result)
        }catch(err){
            console.log(err)
        }
    },

    createRestaurant:async(req,res,next)=>{
        try{
            const {name , location, price_range} = req.body
            const result= await restaurantServices.createRestaurant({name , location, price_range})
            return res.json(result)
        }catch(err){
            console.log(err)
        }
    },
    deleteRestaurant:async(req, res, next)=>{
        try{
            const {id}= req.params
            const result= await restaurantServices.deleteRestaurant(id)
            return res.json(result)
        }catch(err){
            console.log(err)
        }
    },
    updateRestaurant:async(req, res, next)=>{
        try{
            const {id}= req.params
            const {name , location, price_range}= req.body
            const result= await restaurantServices.updateRestaurant({id, name, location, price_range})
            return res.json(result)
            
        }catch(err){
            console.log(err)
        }
    },
    
}
module.exports= restaurantControllers
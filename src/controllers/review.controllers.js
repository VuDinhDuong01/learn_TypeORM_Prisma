const reviewServices = require("../services/review.services")

const reviewController={
    getAllReviews:async(req, res, next) =>{
        try{
            const result= await reviewServices.getAllReviews()
            return res.json(result)
        }
        catch(err){
            console.log(err)
        }
    },
    getReviews:async(req, res, next) =>{
       
        try{
            const {id_review}= req.body
            const result  = await reviewServices.getReviews(id_review)
            return res.json(result)
        }catch(err){
            console.log(err)
        }
    },
    createReview:async (req, res, next) =>{
        try{
            const {user_name , review , start,id_review_restaurant}= req.body
            const result = await reviewServices.createReview({id_review_restaurant,user_name , review , start})
            return res.json(result)
        }catch(err){
            console.log(err)
        }
    }
}
module.exports=reviewController
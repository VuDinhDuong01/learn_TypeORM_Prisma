const routeRestaurant = require('./restaurent.routes')
const routeReview=require('./review.routes')
const routeUser= require('./user.routes')
const routePost = require("./post.routes")
const routeComment = require("./comment.routes")
const route=(app)=>{
    app.use('/api/v1/',routeRestaurant)
    app.use('/api/v1/',routeReview)
    app.use('/api/v1/',routeUser)
    app.use('/api/v1/',routePost)
    app.use('/api/v1/',routeComment)
}
module.exports= route
const userServices = require("../services/user.services")

const userController = {
    createUser: async (req, res, next) => {
        try {
            const { email, password, name } = req.body
            const result = await userServices.createUser({ email, password, name })
            return res.json(result)
        } catch (err) {
            console.log(err)
        }
    },
    getAllUser:async(req, res) => {
        try{
            const result = await userServices.getAllUsers()
            return res.json(result)
        }catch(err) {
            console.log(err)
        }
    },
    getUser:async(req, res) => {
        try{
            const {id}= req.params
            const result = await userServices.getUser(id)
            return res.json(result)
        }catch(err) {
            console.log(err)
        }
    },
    updateUser: async (req, res, next) => {
      
        try {
            const { id } = req.params
            const { email, password, name } = req.body
            const result = await userServices.updateUser({ id, email, password, name })
            return res.json(result)
        } catch (err) {
            console.log(err)
        }
    },
    deleteUser:async(req, res, next) => {
        try{
            const {id}= req.params
            const result = await userServices.deleteUser(id)
            return res.json(result)
        }catch(err) {
            console.log(err)
        }
    }
}

module.exports = userController
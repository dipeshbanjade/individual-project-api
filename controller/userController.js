class userController {
     
    async  loginUser(req, res){
       return res.status(200).json({
          status : "success",
          message : "User logged in successfully"
       });
    }

    async registerUser(req, res){

    }

    async getUserDetails(req, res, userId){

    }

    async updateUserDetails(req, res, userId){

    }

    
}
export default new userController();
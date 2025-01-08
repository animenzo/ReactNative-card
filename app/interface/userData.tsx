interface userData{
    userId:String,
    name: {
      firstname: String,
      lastname: String
    },
    age:Number,
    email:String,
    
    phone:String,
    isActive: Boolean,
    GSTNumber: String,
    photo: String,
    createAt: String,
    updatedAt: String

}

interface address{
    address?: {
        city: String,
        state: String,
        pincode: String
      }
}



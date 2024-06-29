import mongoose from 'mongoose';
const jobSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please Provide job title"],
        minLength:[3,"job title must contain at least 3 characters"],
        maxLength:[50,"job title can not exceed 50 characters"],
    },
    description:{
        type:String,
        required:[true,"Please Provide job description"],
        minLength:[50,"job description must contain at least 50 characters"],
        maxLength:[350,"job description can not exceed 350 characters"],

    },
    category:{
        type:String,
        required:[true," job Category is required"],
       
    },
    country:{
        type:String,
        required:[true," job country is required"],
       
    },
    city:{
        type:String,
        required:[true," job city is required"],
       
    },
    location:{
        type:String,
        required:[true,"please provide exact location"],
        minLength:[50,"job location must contain at least 50 characters"],
       
    },
    fixedSalary:{
        type:Number,
        minLength:[4,"Fixed Salary must contain at least 4 digits"],
        maxLength:[9,"Fixed Salary can not exceed 9 digits"],
    },
    salaryFrom:{
        type:Number,
        minLength:[4,"Salary From must contain at least 4 digits"],
        maxLength:[9,"Salary From can not exceed 9 digits"],
   
    },
    salaryto:{
        type:Number,
        minLength:[4,"Salaryto must contain at least 4 digits"],
        maxLength:[9,"SalaryTo can not exceed 9 digits"],
   
    },
    expired:{
        type:Boolean,
        default:false
    },
    jobPostedOn:{
        type:Date,
        default:Date.now,
    },
    postedBy:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true,
    },

});
export const Job=mongoose.model("Job",jobSchema);
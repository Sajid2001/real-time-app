const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    source:{
        id:{
            type:String,
        },
        name:{
            type:String,
            required:true
        }
    },
    author:{
        type:String,
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    url:{
        type:String,
        required:true
    },
    urlToImage:{
        type:String,
    },
    publishedAt:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
})

const NewsSchema = new mongoose.Schema({
    city:{
        type: String,
        required:true,
        min: 6,
        max:255
    },
    articles: [
        ArticleSchema
    ],
    timestamp: {
        type: Date,
        default: Date.now,
        expires: '12h', 
    },
    
});

const NewsModel = mongoose.model("News", NewsSchema);
module.exports = NewsModel;
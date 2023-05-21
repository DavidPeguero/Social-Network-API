const { Schema, model} = require('mongoose');
const reactionSchema = require('./Reaction.js')

//Thought Schema
const thoughtSchema = new Schema(
    {
        thoughtText : { 
            type : String,
            required : true,
            minLength : 1,
            maxLength: 280
        },
        createdAt : {
            type : Date,
            default : Date.now()
        },
        reactions : [reactionSchema]
    }
)

const Thought = model('thought', thoughtSchema);

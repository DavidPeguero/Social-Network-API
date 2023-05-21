const { Schema, ObjectId } = require('mongoose');

//Reaction Schema 
const reactionSchema = Schema(
    {
        reactionId : {
            type : Schema.Types.ObjectId,
            default : new ObjectId();
        },
        reactionBody : {
            type : String,
            required : true,
            maxLength : 280
        },
        username : {
            type : String,
            required : true,
        },
        createdAt : {
            type : Date,
            default : Date.now()
        }
    }
)
var mongoose = require('mongoose');

module.exports = mongoose.model('Task', {
    name: {
        type: String,
        default: ''
    },
    date : {
        type : Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
});
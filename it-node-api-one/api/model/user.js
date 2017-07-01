var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    name: {
        type: String,
        default: '',
        require : true
    },
    email : {
        type : String,
        default: '',
        require : true
    },
    phone : {
        type : String,
        default: '',
        require : true
    },
    nickname : {
        type : String,
        default: '',
        require : true
    }
});
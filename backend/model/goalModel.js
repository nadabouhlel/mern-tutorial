const mongoose = require('mongoose')


const goalShema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a text value'],
      },
    },
    {
      timestamps: true,
    }
  )
module.exports = mongoose.model('Goal', goalShema )
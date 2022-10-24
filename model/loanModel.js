const mongoose = require('mongoose');

const loansSchema = new mongoose.Schema(
  {
    customerName: {
        type: String,
        required: [true, 'Provide a name for the customer'],
        unique: true,
        maxlength: [20, 'Length for the name cannot be more than 20 characters']
    },
    phoneNumber:{
        type: Number,
        required: [true, 'Provide a phoneNumber'],
        unique: true,
        minlength: [10, 'Please enter a phone number with 10 digits'],
        maxlength: [10, 'Please enter a phone number with 10 digits']
    },
    address:{
        type: String,
        required: [true, 'Provide an address']
    },
    loanAmount:{
        type: Number,
        required: [true, 'Provide the loanAmount']
    },
    interest:{
        type: Number,
        required: [true, 'Provide the interest']
    },
    loanTermYears:{
        type: Number,
        required: [true, 'Provide the loanTermYears']
    },
    loanType:{
        type: String,
        unique : false,
        required: [true, 'Provide the loantype']
    },
    description:{
        type: String,
        required: [true, 'Provide the description'],
        trim: true,
        maxlength: [50, 'Provide a description not more then 50 characters']
    }   
});
const Loans = mongoose.model('Loans', loansSchema);

module.exports = Loans;
//** code  END
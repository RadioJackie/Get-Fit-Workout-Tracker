const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

  date: {
    type: Date,
    default: Date.now
  },
  
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;

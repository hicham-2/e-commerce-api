const mongoose = require('mongoose');

const promoSchema = new mongoose.Schema({
  description: String,
  discount_rate: Number,
  start_date: Date,
  end_date: Date,
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  // Other relevant fields
});

promoSchema.pre("save", async function (next) {
  //   if (!this.isModified("userId")) return next();
  try {
    const count = await PromoMongo.countDocuments();
    this.promoID = count + 1;
    next();
  } catch (error) {
    next(error);
  }
});

const PromoMongo = mongoose.model("Promo", promoSchema);
module.exports =  PromoMongo;

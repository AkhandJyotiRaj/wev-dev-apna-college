const mongoose = require('mongoose');
const {Schema} = mongoose;

main()
    .then(() => console.log('Connections successful'))
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const orderSchema = new Schema({
    item: String,
    price: Number,
});

const customerSchema = new Schema({
    name: String,
    order: [{
        type: Schema.Types.ObjectId,
        ref: "Order"
    },
    ],
});

customerSchema.pre("findOneAndDelete", async () => {
    console.log("pre MIDDLEWARE");
});

customerSchema.post("findOneAndDelete", async (customer) => {
    if (customer && customer.order && customer.order.length) {
        const res = await Order.deleteMany({ _id: { $in: customer.order } });
        console.log(res);
    }
});

  
const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// const addCustomers = async () => {
//     let cust1 = new Customer({
//         name: "Rahul Kumar",
//     });

//     let order1 = await Order.findOne({ item: "Chips" });
//     let order2 = await Order.findOne({ item: "Cholcalte" });
//     cust1.order.push(order1, order2);

//     let result = await cust1.save();
//     console.log(result);
// };

// addCustomers();

// const addOrders = async () => {
//     let res = await Order.insertMany([
//         { item: "Somasa", price: 14 },
//         { item: "Chips", price: 100 },
//         { item: "Cholcalte", price: 40 }
//     ]);
//     console.log(res);
// };

// addOrders();

const addCust = async () => {
    let newCust = new Customer({
        name: "Rand Arjun",
    });

    let newOrder = new Order({
        item: "Lund",
        price: 100,
    });

    newCust.order.push(newOrder);

    await newCust.save();
    await newOrder.save();

    console.log("Added new custoner");


}


const delCust = async () => {
    let result = await Customer.findByIdAndDelete('68d3ca87148860dc21c77447');
    console.log(result);
};


delCust();
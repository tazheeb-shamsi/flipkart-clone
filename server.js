import Express  from "express";
import dotenv from 'dotenv';
import cors from "cors";
import bodyParser from "body-parser";
import {v4 as uuid} from "uuid";

//!components
import Connection from "./DataBase/db.js"
import DefaultData from "./default.js";
import Router from "./routes/route.js";
 

const app = Express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router)

   const PORT = process.env.PORT || 8080;
   
   const USERNAME = process.env.DB_USERNAME;
   const PASSWORD = process.env.DB_PASSWORD;

   const URL = process.env.MONGODB_URI || `mongodb://${USERNAME}:${PASSWORD}@ac-teu8ckn-shard-00-00.lt3zvo6.mongodb.net:27017,ac-teu8ckn-shard-00-01.lt3zvo6.mongodb.net:27017,ac-teu8ckn-shard-00-02.lt3zvo6.mongodb.net:27017/FLIPKART-CLONE?ssl=true&replicaSet=atlas-vagxjd-shard-0&authSource=admin&retryWrites=true&w=majority`;
 

Connection(URL);

if (process.env.NODE_ENV === 'production'){
   app.use(Express.static('frontend/build'));
}

app.listen(PORT, ()=>console.log(`PORT ${PORT}:  Connected Successfully `));

DefaultData();

export let paytmMerchantKey= process.env.PAYTM_MERCHANT_KEY;
export let paytmParams= {};
paytmParams['MID'] = process.env.PAYTM_MID;
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID'] = uuid();
paytmParams['CUSTOMER_ID'] = process.env.PATYM_CUSTOMER_ID;
paytmParams['TXN_AMOUNT'] = 100;
paytmParams['CALLBACK_URL'] = 'callback';
paytmParams['EMAIL'] = 'abc@example.com';
paytmParams['MOBILE_NO'] = '7894561230';
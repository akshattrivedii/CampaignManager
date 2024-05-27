// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/LG', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;


// Define campaign schema
const campaignSchema = new mongoose.Schema({
  subject: String,
  preheader: String, 
  // images:   [{
  //   data: Buffer,
  // }],
  content: String, 
  cta:  Number,
  type: String,
});



app.use(bodyParser.json());

app.use(cors());

// Endpoint to add a new campaign
app.post('/api/campaigns', async (req, res) => {
  try {
    const { campaignName } = req.body;
    console.log(campaignName)
    const Campaign = mongoose.model(campaignName , campaignSchema);
    console.log("campaign created")
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/api/campaigns/:name', async(req , res)=> {
  try{
    console.log(req.body)
    const { subject, preheader, content, cta, type} = req.body;
    const Campaign = mongoose.model(req.params.name , campaignSchema);
    const campaign = new Campaign({
      subject: subject ,
      preheader: preheader , 
      // images: img, 
      content: content, 
      CTA: cta,
      type: type, 
      });
    await campaign.save();
    res.status(201).send(campaign);
  }
  catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
})

app.get('/api/viewcampaign/:name/:type', async(req , res) => {
  
    const CampaignModel = mongoose.model(req.params.name, campaignSchema);
    CampaignModel.find({ type: req.params.type })
    .then((data) => {
      res.json(data)
    })
  .catch((err) => res.json(err));
})

app.get('/api/campaignList', async(req, res) => {
  try{
    const collections = await db.listCollections();
    console.log(collections);
    res.json(collections)
  }
  catch (error) {
    console.error(error);
  }
})

app.get('/api/campaigns',(req , res)=> {
  res.send(`hello`)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

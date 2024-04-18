// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/LG', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define campaign schema
const campaignSchema = new mongoose.Schema({
  campaignName: String,
});

const Campaign = mongoose.model('Campaigns collection', campaignSchema);

app.use(bodyParser.json());

// Endpoint to add a new campaign
app.post('/api/campaigns', async (req, res) => {
  try {
    const { campaignName } = req.body;
    const campaign = new Campaign({ campaignName });
    await campaign.save();
    res.status(201).send(campaign);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

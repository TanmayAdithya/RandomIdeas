const express = require('express');
const Idea = require('../models/Idea');
const router = express.Router();

// const ideas1 = [
//   { id: 1, text: 'Create a mobile app for tracking daily exercise routines' },
//   { id: 2, text: 'Start a blog sharing travel experiences and tips' },
//   { id: 3, text: 'Develop a web application for learning new languages' },
//   { id: 4, text: 'Build a smart home automation system using IoT devices' },
//   { id: 5, text: 'Launch a podcast discussing current events and trends' },
// ];

router.get('/', async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.json({ success: true, data: ideas });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

router.get('/:id', (req, res) => {
  const idea = ideas1.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: 'Resource not found' });
  }

  res.json({ success: true, data: idea });
});

router.post('/', async (req, res) => {
  const idea = new Idea({
    text: req.body.text,
  });

  try {
    const savedIdea = await idea.save();
    res.json({ success: true, data: savedIdea });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }

  res.json({ success: true, data: idea });
});

router.put('/:id', (req, res) => {
  const idea = ideas1.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: 'Resource not found' });
  }

  idea.text = req.body.text || idea.text;
  res.json({ success: true, data: idea });
});

router.delete('/:id', (req, res) => {
  const idea = ideas1.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: 'Resource not found' });
  }

  const index = ideas1.indexOf(idea);
  ideas1.splice(index, 1);

  res.json({ success: true, data: {} });
});

module.exports = router;

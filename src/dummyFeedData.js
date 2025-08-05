import boat from './assets/boat.png';
import nature from './assets/nature.png';

const posts = [
  {
    id: 1,
    username: 'Pavan',
    caption: 'Such an amazing trip!!!',
    image: boat,
    comments: [
      { user: 'Vikki', text: 'Wow bro 🔥' },
      { user: 'Guna', text: 'Looks awesome!' }
    ]
  },
  {
    id: 2,
    username: 'Vikki',
    caption: 'What a view 🌅',
    image: nature,
    comments: [
      { user: 'Pavan', text: 'Super shot!' }
    ]
  }
];

export default posts;
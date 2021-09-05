const { Post } = require('../models');

const postData = [{
        title: 'MVC',
        content: 'MVC structure is widely used in agile work environment',
        user_id: 1

    },
    {
        title: 'What are Websockets ?',
        content: 'A full duplex connection between client and server',
        user_id: 2
    },
    {
        title: 'Jquery Cheat sheets',
        content: 'Zero to Hero in Jquery in 30 days',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
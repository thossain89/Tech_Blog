const { User } = require('../models');

const userData = [{
        username: 'Tanvir',
        password: 'password1234'

    },
    {
        username: 'Hossain',
        password: 'password1234'
    },
    {
        username: 'Rana',
        password: 'password1234'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
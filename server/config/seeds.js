const db = require('./connection');
const { Course, Location, TeeTime, User } = require('../models');

db.once('open', async () => {
    await Location.deleteMany();

    const locations = await Location.insertMany([
        { name: 'Eastern Ontario'},
        { name: ' Central Ontario'},
        { name: ' Greater Toronto Area'},
        { name: 'Northern Ontario'},
        { name: 'Southwest Ontario'}
    ]);

    console.log('locations seeded');

    await Course.deleteMany();

    const courses = await Course.insertMany([

        {
            name: 'Upper Canada Golf Course',
            location: location[0]._id,
            par: 72,
            holes: 18,
            price: 55.00,
            cart_included: false,
            image:
        },
        {
            name: 'Smuggler\'s Glen Golf Course',
            location: location[0]._id,
            par: 72,
            holes: 18,
            price: 90.00,
            cart: true,
            image: 
        },
        {
            name: 'Iroquois Golf Club',
            location: location[0]._id,
            par: 72,
            holes: 18,
            price: 48.00,
            cart_included: false,
            image: 
        },
        {
            name: 'The Landings Golf Course',
            location: location[0]._id,
            par: 63,
            holes: 18,
            price: 39.00,
            cart_included: false,
            image: 
        },
        {
            name: 'Canadian Golf and COuntry Club',
            location: location[0]._id,
            par: 72,
            holes: 27,
            price: 52,
            cart_included: false,
            image: 
           
        },
        {
            name: 'Glengarry Golf and Country Club',
            location: location[0]._id,
            par: 72,
            holes: 18,
            price: 45.00,
            cart_included: false,
            image: 
        },
        {
            name: 'Mississippi Golf CLub',
            location: location[0]._id,
            par: 72,
            holes: 18,
            price: 60.00,
            cart_included: false,
            image: 
        },
        {
            name: 'Arnprior Golf Club',
            location: location[0]._id,
            par: 70,
            holes: 18,
            price: 40.00,
            cart_included: false,
            image: 
        },
        {
            name: 'Madawaska Golf Course',
            location: location[0]._id,
            par: 70,
            holes: 18,
            price: 35.00,
            cart_included: false,
            image: 
        },
        {
            name: 'Crooked Creek Golf Club',
            location: location[0]._id,
            par: 72,
            holes: 18,
            price: 46.00,
            cart_included: false,
            image:
        },
        {
            name: 'Loyalist Golf and COuntry Club',
            location: location[0]._id,
            par: 36,
            holes: 9,
            price: 39.00,
            cart_included: false,
            image: 
        },
        {
            name: 'Bay of Quinte Country Club',
            location: location[0]._id,
            par: 72,
            holes: 18,
            price: 75.00,
            cart_included: false,
            image:
        },
        {
            name: 'Trillium Wood Golf Club',
            location: location[0]._id,
            par: 72,
            holes: 18,
            price: 65.00,
            cart_included: false,
            image:
        },
        {
            name: 'Sheffield Greens Golf Club',
            location: location[0]._id,
            par: 34,
            holes: 9,
            price: 25.00,
            cart_included: false,
            image: 
        },
        {
            name: 'Brockville Country Club',
            location: location[0]._id,
            par: 71,
            holes: 18,
            price: 80.00,
            cart_included: false,
            image: 
        },
        {
            name: 'Calabogie Highlands Golf Resort',
            location: location[0]._id,
            par: 72,
            holes: 18,
            price: 40.00,
            cart_included: false,
            image:   
        },
        {
            name: 'Irish Hills Golf Club',
            location: location[0]._id,
            par: 71,
            holes: 27,
            price: 39.00,
            image:
        },
        {
            name: 'Casselview Golf and Country Club',
            location: location[0]._id,
            par: 72,
            holes: 18,
            price: 50.00,
            image: 
        },
        {
            name: 'Larchmere Golf Club',
            location: location[0]._id,
            par: 33,
            holes: 9,
            price: 30,
            image: 
        },
        {
            name: 'Byrnell Golf Club',
            location: location[1]._id,
            par: 30,
            holes: 9,
            price: 35.00,
            image: 
        },
        {
            name: 'Barry\'s Bay Golf Club',
            location: location[1]._id,
            par: 36,
            holes: 9,
            price: 35.00,
            image: 
        },
        {
            name: 'Duntroon Highlands',
            location: location[1]._id,
            par: 72,
            holes: 18,
            price: 60.00,
            image: 
        },
        {
            name: 'The Briars Golf Club',
            location: location[1]._id,
            par: 72,
            holes: 18,
            price: 75.00,
            image: 
        },
        {
            name: 'Monterra Golf',
            location: location[1]._id,
            par: 72,
            holes: 18,
            price: 80.00,
            image: 
        },
        {
            name: 'Batteaux Creek Golf Club',
            location: location[1]._id,
            par: 72,
            holes: 18,
            price: 70.00,
            image: 
        },
        {
            name: 'Tangle Creek',
            location: location[1]._id,
            par: 72,
            holes: 18,
            price: 70.00,
            image:
        },
        {
            name: 'Settlers\' Ghost Golf Club',
            location: location[1]._id,
            par: 72,
            holes: 18,
            price: 60.00,
            image: 
        },
        {
            name: 'Black Bear Ridge',
            location: location[1]._id,
            par: 72,
            holes: 27,
            price: 65.00,
            image: 
        },
        {
            name: 'Hockley Valley Resort',
            location: location[1]._id,
            par: 71,
            holes: 18,
            price: 100.00,
            image: 
        },
        {
            name: 'Timber Ridge Golf Course',
            location: location[1]._id,
            par: 72,
            holes: 18,
            price: 55.00,
            image: 
        },
        {
            name: 'Innisbrook',
            location: location[1]._id,
            par: 64,
            holes: 18,
            price: 50.00,
            image: 
        },
        {
            name: 'Brooklea Golf Club',
            location: location[1]._id,
            par: 72,
            holes: 27,
            price: 50.00,
            image:
        },
        {
            name: 'Roundel Glen Golf Course',
            location: location[1]._id,
            par: 72,
            holes: 18,
            price: 45.00,
            image: 
        },
        {
            name: 'Woodington Lake Golf Club',
            location: location[1]._id,
            par: 72,
            holes: 36,
            price: 95.00,
            image:
        },
        {
            name: 'Braestone',
            location: location[1]._id,
            par: 71,
            holes: 18,
            price: 95.00,
            image:
        },
        {
            name: 'Nottawasaga Golf Course',
            location: location[1]._id,
            par: 72,
            holes: 27,
            price: 75.00,
            image: 
        },
        {
            name: 'The Club at Bond Head',
            location: location[2]._id,
            par: 72,
            holes: 36,
            price: 100.00,
            image:
        }
    ])
})


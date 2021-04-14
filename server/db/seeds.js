use hotel_bookings;
db.dropDatabase();

db.guests.insertMany([
    {
        name: "Jessica Day",
        email: "jess.day@yahoo.com",
        checkedIn: true
    },
    {
        name: "Schmitt",
        email: "shmitt@schmitt.com",
        checkedIn: false
    },
    {
        name: "Nick Miller",
        email: "nick.miller@gmail.com",
        checkedIn: false
    }
])
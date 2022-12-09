const users = [
    {
        id: 1,
        name: 'Michal',
        email: 'testowyUzytkownik1@test.pl',
        password: 'admin'
    },
    {
        id: 2,
        name: 'Michal',
        email: 'testowyUzytkownik2@test.pl',
        password: 'admin'
    },
    {
        id: 3,
        name: 'Michal',
        email: 'testowyUzytkownik3@test.pl',
        password: 'admin'
    },
    {
        id: 4,
        name: 'Michal',
        email: 'testowyUzytkownik4@test.pl',
        password: 'admin'
    },
    {
        id: 5,
        name: 'Michal',
        email: 'testowyUzytkownik5@test.pl',
        password: 'admin'
    },
    {
        id: 6,
        name: 'Michal',
        email: 'testowyUzytkownik6@test.pl',
        password: 'admin'
    },
    {
        id: 7,
        name: 'Michal',
        email: 'testowyUzytkownik7@test.pl',
        password: 'admin'
    },

];
const chart=[{
        labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
        datasets: [{
            data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
            label: "Africa",
            borderColor: "#3e95cd",
            fill: false
        },

        {
        data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
        label: "Asia",
        borderColor: "#8e5ea2",
        fill: false
        }]
    }];


const dataEndpoint = (router) => {
    router.get('/api/users', async (request, response, next) => {
        response.status(200).send({users: users});
    });
    router.get('/api/users/:id', async (request, response, next) => {
        console.log(request.params.id);
        response.status(200).send({users:users[request.params.id]});
    });
    router.get('/', (request, response) => {
        response.render(__dirname + '\\index.html', {})
    });
    router.get('/continents', (request, response) => {
        response.render(__dirname + '\\continents.html', {chart:chart})
    });

};

export default dataEndpoint;
module.exports = function () {
    return {
        navigation: [{
            url: "#header-top",
            label: 'Home'
        },{
            url: "#about",
            label: "About"
        },{
            url: "#portfolio",
            label: "Portfolio"
        },{
            url: "#footer",
            label: "Contact"
        }],
        portfolio: {
            filterLabels: {'cgvfx': 'CG/VFX', 'business-analysis': 'Business Analysis', 'dev': 'Development'},
            filters: ['cgvfx', 'business-analysis', 'dev'],
            items: [{
                category: ['cgvfx', 'dev'],
                categoryLabel: 'CG/VFX, Development',
                id: 'arcproductions',
                name: 'Arc Productions',
                date: '2008-2012',
                location: 'Toronto, Canada'
            },{
                category: ['business-analysis', 'dev'],
                categoryLabel: 'Business Analysis, Development',
                id: 'krae',
                name: 'K-Rae Transportation',
                image: 'images/krae-logo.jpg',
                date: 'ongoing since 2014',
                location: 'Streator, Illinois, USA'
            },{
                category: ['business-analysis', 'dev'],
                categoryLabel: 'Business Analysis, Development',
                id: 'bardel',
                name: 'Bardel Entertainment',
                image: 'images/bardel-logo.jpg',
                date: 'Oct 2014',
                location: 'Vancouver, Canada'
            },{
                category: ['cgvfx', 'business-analysis', 'dev'],
                categoryLabel: 'Business Analysis, Development, CG/VFX',
                id: 'toonbox',
                name: 'Toonbox Entertainment',
                date: '2012-2015',
                location: 'Toronto, Canada'
            },/*{
                category: ['dev'],
                categoryLabel: 'Development',
                id: 'aol',
                name: 'AOL Canada',
                date: '2007-2008',
                location: 'Toronto, Canada'
            }*/]
        },
        testimonials: [{
            title: 'A gifted developer with great ideas',
            personName: 'Gareth Elliott',
            personTitle: 'Project Manager for Production, Starz Animation (now Arc Productions)',
            quote: "Dave's a gifted developer with great ideas who appreciates that the work he does is not just about the code he makes but how the end user interacts with the services he develops." +
		   "He really thinks ahead when building a system to make sure its set up in a way that makes it as easy and efficient as possible to develop and grow upon."
        },{
            title: 'A great resource',
            personName: 'Danny McFadden',
            personTitle: 'K-Rae Transportation',
            quote: "Dave has done a fantastic job supporting and updating our application. Our business model is a bit unique and the calculations and data tracking we need requires custom logic." +
                   "He's done a great job learning the ins and outs of our applications and has made valuable suggestions for changes we need. He is a great resource to us and we would highly recommend him!"
        }]
    };
};

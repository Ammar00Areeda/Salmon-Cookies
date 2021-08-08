let hours = ["6am ", '7am ', '8am', '9am', '10am', '11am', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];
let seattle = {
    location: 'Seattle',
    min: 23,
    max: 65,
    avgCookieSale: 6.3,
    cookiesPerHourArray: [],
    total: 0,

    randInt: function () {
        let range = seattle.max - seattle.min;
        let randomCount = Math.random() * range + seattle.min;
        return Math.ceil(randomCount);
    },

    sales: function () {
        for (let i = 0; i < hours.length; i++) {
            let numCookies = Math.ceil(seattle.randInt() * seattle.avgCookieSale);
            seattle.cookiesPerHourArray.push(numCookies);
            seattle.total += numCookies;
        }
    },

    render: function () {
        let container = document.getElementById('data');
        let h2 = document.createElement('h2');
        container.appendChild(h2);
        h2.textContent = 'Seattle' + " " + 'Store';
        container.appendChild(h2);
        let list = document.createElement('ul');
        container.appendChild(list);
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            listItem.textContent = hours[i] + ': ' + seattle.cookiesPerHourArray[i] + ' cookies';
            list.appendChild(listItem);
        }
        let listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + seattle.total + ' cookies';
        list.appendChild(listItem);


    },
}


seattle.sales();
seattle.render();








let tokyo = {
    location: 'tokyo',
    min: 23,
    max: 65,
    avgCookieSale: 6.3,
    cookiesPerHourArray: [],
    total: 0,

    randInt: function () {
        let range = tokyo.max - tokyo.min;
        let randomCount = Math.random() * range + tokyo.min;
        return Math.ceil(randomCount);
    },

    sales: function () {
        for (let i = 0; i < hours.length; i++) {
            let numCookies = Math.ceil(tokyo.randInt() * tokyo.avgCookieSale);
            tokyo.cookiesPerHourArray.push(numCookies);
            tokyo.total += numCookies;
        }
    },

    render: function () {
        let container = document.getElementById('data');
        let h2 = document.createElement('h2');
        container.appendChild(h2);
        h2.textContent = 'tokyo' + " " + 'Store';
        container.appendChild(h2);
        let list = document.createElement('ul');
        container.appendChild(list);
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            listItem.textContent = hours[i] + ': ' + tokyo.cookiesPerHourArray[i] + ' cookies';
            list.appendChild(listItem);
        }
        let listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + tokyo.total + ' cookies';
        list.appendChild(listItem);


    },
}


tokyo.sales();
tokyo.render();






let Dubai = {
    location: 'Dubai',
    min: 23,
    max: 65,
    avgCookieSale: 6.3,
    cookiesPerHourArray: [],
    total: 0,

    randInt: function () {
        let range = Dubai.max - Dubai.min;
        let randomCount = Math.random() * range + Dubai.min;
        return Math.ceil(randomCount);
    },

    sales: function () {
        for (let i = 0; i < hours.length; i++) {
            let numCookies = Math.ceil(Dubai.randInt() * Dubai.avgCookieSale);
            Dubai.cookiesPerHourArray.push(numCookies);
            Dubai.total += numCookies;
        }
    },

    render: function () {
        let container = document.getElementById('data');
        let h2 = document.createElement('h2');
        container.appendChild(h2);
        h2.textContent = 'Dubai' + " " + 'Store';
        container.appendChild(h2);
        let list = document.createElement('ul');
        container.appendChild(list);
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            listItem.textContent = hours[i] + ': ' + Dubai.cookiesPerHourArray[i] + ' cookies';
            list.appendChild(listItem);
        }
        let listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + Dubai.total + ' cookies';
        list.appendChild(listItem);


    },
}


Dubai.sales();
Dubai.render();





let paris = {
    location: 'paris',
    min: 23,
    max: 65,
    avgCookieSale: 6.3,
    cookiesPerHourArray: [],
    total: 0,

    randInt: function () {
        let range = paris.max - paris.min;
        let randomCount = Math.random() * range + paris.min;
        return Math.ceil(randomCount);
    },

    sales: function () {
        for (let i = 0; i < hours.length; i++) {
            let numCookies = Math.ceil(paris.randInt() * paris.avgCookieSale);
            paris.cookiesPerHourArray.push(numCookies);
            paris.total += numCookies;
        }
    },

    render: function () {
        let container = document.getElementById('data');
        let h2 = document.createElement('h2');
        container.appendChild(h2);
        h2.textContent = 'paris' + " " + 'Store';
        container.appendChild(h2);
        let list = document.createElement('ul');
        container.appendChild(list);
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            listItem.textContent = hours[i] + ': ' + paris.cookiesPerHourArray[i] + ' cookies';
            list.appendChild(listItem);
        }
        let listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + paris.total + ' cookies';
        list.appendChild(listItem);


    },
}


paris.sales();
paris.render();










let Lima = {
    location: 'Lima',
    min: 23,
    max: 65,
    avgCookieSale: 6.3,
    cookiesPerHourArray: [],
    total: 0,

    randInt: function () {
        let range = Lima.max - Lima.min;
        let randomCount = Math.random() * range + Lima.min;
        return Math.ceil(randomCount);
    },

    sales: function () {
        for (let i = 0; i < hours.length; i++) {
            let numCookies = Math.ceil(Lima.randInt() * Lima.avgCookieSale);
            Lima.cookiesPerHourArray.push(numCookies);
            Lima.total += numCookies;
        }
    },

    render: function () {
        let container = document.getElementById('data');
        let h2 = document.createElement('h2');
        container.appendChild(h2);
        h2.textContent = 'Lima' + " " + 'Store';
        container.appendChild(h2);
        let list = document.createElement('ul');
        container.appendChild(list);
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            listItem.textContent = hours[i] + ': ' + Lima.cookiesPerHourArray[i] + ' cookies';
            list.appendChild(listItem);
        }
        let listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + Lima.total + ' cookies';
        list.appendChild(listItem);


    },
}


Lima.sales();
Lima.render();













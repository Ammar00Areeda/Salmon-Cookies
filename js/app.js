let container = document.getElementById('container');
let tableEl = document.createElement('table');
container.appendChild(tableEl);
// let tableE2 = document.getElementById('ammar')
let hours = ["6am ", '7am ', '8am', '9am', '10am', '11am', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];
let shops = [];

function Branches(location, min, max, avgCookieSale) {

    this.location = location;
    this.minCust = min;
    this.maxCust = max;
    this.avgCookieSale = avgCookieSale;
    this.randNumOfCustomerHours = [];
    this.cookiesPerHourArray = [];
    this.total = 0;
    // this.randomCount = 0;
    shops.push(this);
}
Branches.prototype.randInt = function () {
    for (let i = 0; i <= hours.length; i++) {
        min = Math.ceil(this.minCust);
        max = Math.floor(this.maxCust);
        // this.randomCount = Math.floor(Math.random() * (max - min + 1) + min);
        this.randNumOfCustomerHours[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    // console.log(this.randomCount);
}

Branches.prototype.sales = function () {
    for (let i = 0; i < hours.length; i++) {

        let numCookies = Math.ceil(this.randNumOfCustomerHours[i] * this.avgCookieSale);
        // console.log(numCookies);

        this.cookiesPerHourArray.push(numCookies);
        this.total += numCookies;

    }
    console.log(this.total);
}





function creatTableHeader() {


    let trEl = document.createElement('tr')
    let tdEl = document.createElement('td')
    trEl.appendChild(tdEl);
    tdEl.textContent = " ";

    for (let i = 0; i < hours.length; i++) {
        let thEl = document.createElement('th');
        thEl.textContent = hours[i];
        trEl.appendChild(thEl);

    }
    let thEl = document.createElement('th');
    thEl.textContent = "Daily Location Total";
    trEl.appendChild(thEl);
    tableEl.appendChild(trEl);

}
creatTableHeader();

Branches.prototype.render = function () {
    let trEl = document.createElement('tr');

    let shopNameTd = document.createElement('td');
    trEl.appendChild(shopNameTd);
    shopNameTd.textContent = this.location;

    for (let i = 0; i < hours.length; i++) {
        let tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        tdEl.textContent = this.cookiesPerHourArray[i];
    }
    let tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = this.total;

    tableEl.appendChild(trEl);
}

let seattle = new Branches("seattle", 23, 65, 6.3);
let tokyo = new Branches("tokyo", 3, 24, 1.2);
let dubai = new Branches("dubai", 11, 38, 3.7);
let paris = new Branches("paris", 20, 38, 2.3);
let lima = new Branches("lima", 2, 16, 4.6,);

for (let i = 0; i < shops.length; i++) {
    shops[i].randInt();
    shops[i].sales();
    shops[i].render();



}
function createTableFoter() {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    let thEl = document.createElement('th')
    trEl.appendChild(thEl);
    thEl.textContent = 'Totals'

    let totalSales = 0;
    for (let i = 0; i < hours.length; i++) {
        let tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        let sum = 0;
        let currentShope = 0;
        for (let j = 0; j < shops.length; j++) {
            
             currentShope = shops[j];

            sum += currentShope.cookiesPerHourArray[j];

        }

tdEl.textContent = sum;
totalSales += sum;
    }

let tdEl = document.createElement('td');
trEl.appendChild(tdEl)
tdEl.textContent = totalSales;



}
createTableFoter();









































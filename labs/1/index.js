// Uppgift 1 & 2
let header = document.querySelector('h1').innerText = 'Fruits & Vegetables Corp';
document.querySelector('h1').style = "color:red";

// Uppgift 2
let vegetablesLink = document.querySelectorAll('li > a')[2];
vegetablesLink.innerText = 'Vegetables';
vegetablesLink.setAttribute('href', '#vegetables');

// Uppgift 3
let contact = document.getElementById('contact');
let about = document.getElementById('about');
let main = document.getElementById('main');
main.insertBefore(about, contact)

// Uppgift 4
let aboutHeader = document.createElement('h2');
let aboutHeaderTextNode = document.createTextNode('About');
aboutHeader.appendChild(aboutHeaderTextNode);
about.prepend(aboutHeader);
let contactHeader = document.createElement('h2');
let contactHeaderTextNode = document.createTextNode('Contact');
contactHeader.appendChild(contactHeaderTextNode);
contact.prepend(contactHeader);

// Uppgift 5
let paragraph = document.createElement('p');
let plainTextAbout = about.childNodes[1]
paragraph.appendChild(plainTextAbout);
about.appendChild(paragraph);

// Uppgift 6
let tableHeaders = document.querySelectorAll('thead > tr td');
let newTableHeadName = document.createElement('th');
let newContentTableHeadName = document.createTextNode('Name');
newTableHeadName.appendChild(newContentTableHeadName);
tableHeaders[0].parentNode.replaceChild(newTableHeadName, tableHeaders[0])

let newTableHeadEmail = document.createElement('th');
let newContentTableHeadEmail = document.createTextNode('Email');
newTableHeadEmail.appendChild(newContentTableHeadEmail);
tableHeaders[1].parentNode.replaceChild(newTableHeadEmail, tableHeaders[1])


// Uppgift 7
let head = document.querySelector('head');
let linkElement = this.document.createElement('link');
linkElement.setAttribute('rel', 'stylesheet');
linkElement.setAttribute('type', 'text/css');
linkElement.setAttribute('href', 'main.css');
head.appendChild(linkElement);

// Uppgift 8
let headTitle = document.querySelector('title').innerText = "Fruits & Vegetables Corp";

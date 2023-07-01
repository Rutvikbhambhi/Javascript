
// forEach
// map 
// filter
// reduce 
// sort 

const companies = [
    { name: "Google", category: "Product Based", start: 1981, end: 2004 },
    { name: "Amazon", category: "Product Based", start: 1992, end: 2008 },
    { name: "Paytm", category: "Product Based", start: 1999, end: 2007 },
    { name: "Coforge", category: "Service Based", start: 1989, end: 2010 },
    { name: "Mindtree", category: "Service Based", start: 1989, end: 2010 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 41, 22, 41, 52, 33, 55, 78, 64, 31];

// forEach

// for (let i = 0; i < companies.length; i++) {
//     console.log(companies);
// }

// companies.forEach(function (company, index) {
//     console.log(company);
// });

// companies.forEach((company, index) => (console.log(company.name)));


// filter 
for (let i = 0; i <= ages.length; i++) {
    if(ages[i]>=20){
        console.log(ages[i]);
    }
}
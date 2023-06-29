
// Callback
const data = [
    { name: "Rutvik", Profression: "Software Engineer" },
    { name: "Rahul", Profression: "Software Engineer" }
];

function getData() {
    setTimeout(() => {
        let output = "";
        data.forEach((data, index) => {
            output += `<li>${data.name}</li>`;
        })
        document.body.innerHTML = output
    }, 1000);
}

// function createdata(newdata, callback){
//     setTimeout(() => {
//         data.push(newdata);
//         callback();
//     }, 2000);
// }



// Promises
function createdata(newdata, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.push(newdata);
            let error = false;
            if (!error) {
                resolve();
            } else {
                reject("Not The Data");
            }
        }, 2000);
    })
}
// createdata({ name: "Rutvik", Profression: "Software Engineer" }, getData)
// createdata({ 
//     name: "Rutvik", 
//     Profression: "Software Engineer" 
// }).then(getData).catch(err => console.log(err));


// Async & Await
async function start() {
    await createdata({ name: "Rutvik", Profression: "Software Engineer" });
    getData();
}
start(); 

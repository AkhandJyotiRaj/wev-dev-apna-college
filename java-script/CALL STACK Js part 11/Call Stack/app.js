// let h1 = document.querySelector("h1");

// function colorDelay(color, delay,nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         nextColorChange();
//     }, delay);
// }

// colorDelay("blue", 1000, () => {
//     colorDelay("pnik", 1000, () => {
//             colorDelay("brown",1000)
//         })
// });


// function saveDb(data,success, failure) {
//     let internetspped = Math.floor(Math.random() * 10) + 1;
//     if (internetspped > 4) {
//         success();
//     } else {
//         failure();
//     }
// };

// saveDb(
//     "apna college", () => {
//         console.log("Data is saved here "   );
        
//     },
//     () => {
//         console.log("Your internet spped slow"); 
        
//     }
// );

function saveDb(data) {
    return new Promise((success, failure) => {
        let internetspped = Math.floor(Math.random() * 10) + 1;
        if (internetspped > 4) {
            success("sucees ho gya be");    
        } else {
            failure("faild ho gya lauru");
        }
    });
}
let requst = saveDb("apna college");
requst.then(() => {
    console.log("DATa 1 saved ");
    return saveDb("dsadfsfs");
})
    .then(() => {
        console.log("data 2 saved")
        return saveDb("hellow world");
    })
    .then(() => {
        console.log("data 3 saved")
    })
    .catch(() => {
        console.log("promise was rejected");
    })

let akhand = JSON('akhand : 43')

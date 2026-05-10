let n = 5;
function printt(n) {
    if (n == 0) {
        return;
    }
    console.log(n);
    n--;
    printt(n);
}
console.log("hloo world");
printt(n);

let a = 5;
let b = [5];

a == b ? console.log("equal") : console.log("not equal");
console.log(typeof b);
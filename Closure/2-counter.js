function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    }
}
const counter1 = createCounter();

console.log(counter1());
console.log(counter1());
console.log(counter1());

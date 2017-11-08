function f(input) {
    var a = 100;
    if (input) {
        var b = a + 1002010;
        return b;
    }
    return a;
}
f(true);
console.log(f(true));
console.log(f(false));

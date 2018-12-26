function findPrimes(start, end) { //выводит простые числа в промежутке от start до end
    let i = start;
    while (i <= end) {
        let count = 0;
        let div = 1;
        do {
            if (i % div === 0) {
                count++;
            }
            div++;
        } while (div <= i) ;
        if (count === 2 || i === 1) {
            console.log(i)
        }
        i++;
    }
}
findPrimes(0, 100);



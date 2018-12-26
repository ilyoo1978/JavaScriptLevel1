function oddOrEven(start, end) { // выводит числа в промежутке start,end и сообщает чет это или нечет
    let str;
    do {
        (start % 2 === 0)? str = ' - четное число': str = ' - нечетное число';
        if ( start === 0){str = ' - это ноль'}
        console.log(start + str);
        start++;
    }while (start <= end) ;
}
oddOrEven(11, -32);
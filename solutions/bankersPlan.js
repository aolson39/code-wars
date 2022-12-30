// DESCRIPTION:
// John has some amount of money of which he wants to deposit a part f0 to the bank at the beginning of year 1. He wants to withdraw each year for his living an amount c0.

// Here is his banker plan:

// deposit f0 at beginning of year 1
// his bank account has an interest rate of p percent per year, constant over the years
// John can withdraw each year c0, taking it whenever he wants in the year; he must take account of an inflation of i percent per year in order to keep his quality of living. i is supposed to stay constant over the years.
// all amounts f0..fn-1, c0..cn-1 are truncated by the bank to their integral part
// Given f0, p, c0, i the banker guarantees that John will be able to go on that way until the nth year.

// John wants to know if the banker's plan is right or wrong. Given parameters f0, p, c0, n, i build a function fortune which returns true if John can make a living until the nth year and false if it is not possible.

// Some cases:
// fortune(100000, 1, 2000, 15, 1) -> True
// fortune(100000, 1, 10000, 10, 1) -> True
// fortune(100000, 1, 9185, 12, 1) -> False

// For the last case you can find below the amounts of his account at the beginning of each year:
// 100000, 91815, 83457, 74923, 66211, 57318, 48241, 38977, 29523, 19877, 10035, -5
// f11 = -5 so he has no way to withdraw something for his living in year 12.

function fortune(f0, p, c0, n, i) {
    // subtract the yearly withdrawl adjusted for inflation from the  total account balance 
    // when expected years is 1, see if account balance is zero
    let total;
    while(n > 0){
        f0 = Math.floor(f0 + (f0 * (p/100)) - c0)
        c0 = Math.floor(c0 + (c0 * (i/100)))
        n--
        if(n == 1){
            total = f0;
        }
    }
    console.log(total >= 0 ? true : false);
    return total >= 0 ? true : false
}

fortune(100000, 1, 2000, 15, 1)//, true
fortune(100000, 1, 9185, 12, 1)//, false
fortune(100000000, 1, 100000, 50, 1)//, true
fortune(100000000, 1.5, 10000000, 50, 1)// false
fortune(100000000, 5, 1000000, 50, 1)//, true

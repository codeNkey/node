// 2,3,5,7,11,13,17,19....
// 소수는 1과 자기 자신을 제외한 모든 수로 나누어지지 않는다.
 
// const min = 2 // 시작 숫자
// const max = 10_000_000 //끝나는 숫자
let primes = [] // 소수이면 배열에 넣겠다.

function findPrime(start, range) {
    let isPrime = true;
    const end = start + range;
    for (let i = start; i < end; i++){ // 소수의 후보 탐색
        for (let j = 2; j < Math.sqrt(end); j++){ //해당값이 소수인지 판단하는 영역
            if (i !== j && i % j === 0){
                isPrime = false;
                break
            }
        }
        if (isPrime) {
            primes.push(i)
        }
        isPrime = true;
    }
}

module.exports = {findPrime, primes}
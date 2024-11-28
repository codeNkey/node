const {Worker, isMainThread, parentPort, workerData} = require('worker_threads')
const {findPrime, primes} = require('./prime')
// worker : 새로운 worker thread를 생성
// isMainThread : 현재 우리가 사용하는 thread가 메인 thread인지 확인(true/false)
// parentPort : 메인 thread와 다른 worker thread의 연결을 위해 사용 
// workerData : 메인 thread에서 worker로 전달되는 데이터 저장
findPrime(2, 1000)
console.log(primes.length)
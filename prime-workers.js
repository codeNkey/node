const {Worker, isMainThread, parentPort, workerData} = require('worker_threads')
let {findPrime, primes} = require('./prime')
// worker : 새로운 worker thread를 생성
// isMainThread : 현재 우리가 사용하는 thread가 메인 thread인지 확인(true/false)
// parentPort : 메인 thread와 다른 worker thread의 연결을 위해 사용 
// workerData : 메인 thread에서 worker로 전달되는 데이터 저장
// findPrime(2, 1000)
// console.log(primes.length)

// worker thread 사용
if (isMainThread) {
    const max = 20_000_000; // 우리가 찾는 소수의 범위값 
    const min = 2 // 우리가 찾는 소수의 시작값 
    const threadCount = 6 // 실제로 일을 처리할 worker threads 개수 
    const threads = new Set() // worker thread를 관리하고 추적하기 위한 객체 set은 중복을 허용하지 않는 배열
    const range = Math.floor((max-min) / threadCount)// 각 workers 처리할 숫자의 범위 나누기
    let start = min // 시작값 초기화 
    console.time('prime')
    for (let i = 0; i < threadCount; i++) {
        const wStart = start
        threads.add(new Worker(__filename, {workerData: {start: wStart, range}}))
        start += range
    }
    //이벤트 핸들러
    for (let worker of threads) {
        worker.on('error', (e) => {
            throw e;
        });
        worker.on('exit', () => {
            threads.delete(worker)
            if (threads.size === 0) {
                console.timeEnd('prime')
                console.log(primes.length)
            }
        })
        worker.on('message', (msg) => {
            primes = primes.concat(msg)
        })
    }

} else {
//각 워커들이 할일
findPrime(workerData.start, workerData.range)
parentPort.postMessage(primes);
}
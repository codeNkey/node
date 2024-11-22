const path = require('path')
const os = require('os')
// // 현재 경로 알려주는 함수
// console.log(process.cwd())
// // 프로세스 id
// console.log(process.pid)
// // Node 버전
// console.log(process.version)
// // cpu 아키텍쳐
// console.log(process.arch)
// // 운영체제
// console.log(process.platform)

// console.log(os.arch())
// console.log(os.platform())
// console.log(os.type())
// console.log(os.hostname())
// console.log(os.cpus())
// console.log(os.freemem() / (1000*1000*1000))
// console.log(os.totalmem() / (1000*1000*1000))

console.log(path.dirname('c:/projects/node/func.js'))
console.log(path.extname('c:/projects/node/func.js'))
console.log(path.basename('c:/projects/node/func.js'))
// 경로상 파일의 이름 반환(두번째 인수 : 제거할 확장자)
console.log(path.basename('c:/projects/node/func.js','.js'))
// path 경로를 만들어줌 
console.log(path.join('User', 'projects', 'func.js'))
// 현재 위치부터의 절대경로를 만들 때 사용
console.log(path.resolve('User', 'projects', 'func.js'))

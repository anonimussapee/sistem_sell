const link= 'https://www.youtube.com/watch?v=j1_JW7An2l0&list=RDMM&index=27'
const reduce=link.substring(link.lastIndexOf('watch?v=')+8)
const linkReady= reduce.substring(0,11)
console.log(linkReady)



const url= 'https://youtu.be/59Q_lhgGANc'
const reducer=url.substring(url.lastIndexOf('/')+1)
const urlReady= reducer.substring(0,11)
console.log(urlReady)
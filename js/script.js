function genRandNum () {
    let arr = [];

    function generateNum() {
      let randomNum = Math.floor(Math.random() * 100) + 1;
      if (arr.length === 100) return arr;
    
      if (arr.includes(randomNum)) {
        return generateNum();
      } 
      arr.push(randomNum);
      return arr.sort((a, b) => a - b);// для мануальной проверки
    }
    return generateNum;
}

const idGenerator = genRandNum(); 
let chek;

for (let i = 0; i <= 100; i++) {
  chek = idGenerator();  
}
  
console.log(chek);
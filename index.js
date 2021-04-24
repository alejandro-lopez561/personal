let num;
const decide = (...num) => {
    for (let i = 0; i < num.length; i++){
        if(num[i] > 0 && num[i] % 2 === 0){
            return "Par"
        } else if(num[i] > 0 && num[i] % 2 === 1){
            return 'Impar'
        } else {
            return "No aplica"
        }
    }
}

decide(1,2,3,4,5,6,7,8,9,10);



const p = document.querySelector('p');

p.addEventListener('click', (e) =>{
    e.target.style.backgroundColor = 'yellow'
})


//Generates all permutations of a string (contains duplicates)

/*
const tips_stringPermutations = str => {
    if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
    return str
      .split('')
      .reduce(
        (acc, letter, i) =>
          acc.concat(tips_stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),
        []
      );
  };
  
  console.log(tips_stringPermutations('xyz'));
  */
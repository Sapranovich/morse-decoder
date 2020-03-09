const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    'xxxxx': ' ',
};

function decode(expr) {

    let n=[];
    let array =[];
    expr= expr.split(' ').join('');
    if(expr.length%10===0){
      }else n = expr.length%10;
    array=expr.match(/.{10}/g);
    array=array.map(x=>x.match(/.{2}/g));
    
    for(let k=0; k<array.length; k++){
    for(let i=0; i<array[k].length; i++){
       switch (array[k][i]){
         case '**':
          array[k].splice(i,1,'x');
          break;
          case '10':
          array[k].splice(i,1,'.');
          break;
          case '11':
          array[k].splice(i,1,'-');
          break;
          case '00':
          array[k].splice(i,1,'');
          break;
       }
    }
    }
    let array2=[];
    for(let l=0;l<array.length; l++){
      array2+=MORSE_TABLE[array[l].reduce((sum, current) => sum + current)];
    }
    for(let z=0; z<n; z++){
      array2=array2+'0';
    };
    return array2;
}

module.exports = {
    decode
}
// WPU Coding Challenge
// 6/366
// https://www.codewars.com/kata/5556282156230d0e5e000089

function DNAtoRNA(dna) {
    let rna ='';
    for( let i = 0; i < dna.length; i++){
        rna += dna[i] === 'T' ? 'U' : dna[i];
        }
        return rna; 
      }
        // if(dna[i] === 'T'){
        // rna += 'U';
        // }
        // else{
        // rna += dna[i];
        // }

console.log(DNAtoRNA("CGAT"))
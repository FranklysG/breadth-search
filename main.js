var length = prompt('Infrome o tamanho da arvore []');

// Adiciona o numero digitado a uma posição do array
// TODO: poderia ser um push
var arr = [];
for (let i = 0; i < parseInt(length); i++) {
  arr[i] = prompt(`Numero da posição ${i}`); 
}
console.log(`Sua arvore: ${arr}`)

// Ordena vetor em ordem crecente
// TODO: poderia ser um sort
arr.forEach((_, index) => {  
  if(arr[index] > arr[index+1]){
    console.log('troca')
    let aux = arr[index+1];
    arr[index+1] = arr[index];
    arr[index] = aux
  }
});
console.log(`arr in order ${arr}`)

// Faz uma busca pelo numero pedido
// TODO: poderia ser um find
var search = prompt('Infrome um numero para realizar a busca');
var find = arr.map((item, index) => {
  if(item === search){
    console.log(`Numero encontrado: ${item}`);
    return 1;
  }
  return 0;
});

if(find.shift() === 0){
  console.log(`Numero ${search} não encontrado`);
} 
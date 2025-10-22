// 1 To 30 number
let number = 30;
for(let i = 1;i <= number;i++){
    console.log(i);
}

//  table of 27
 let num = 27;
 for(let i = 1; i<=10; i++){
    console.log(`${num} * ${i} = ${num * i}`);
 }

//  matrix 
let matrix = [
    [4,5,8],
    [8,2,5],
    [9,2,0]
]
for(let i = 0; i < matrix.length; i++){
    console.log(matrix[i].join("  "));
}

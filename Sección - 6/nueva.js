
let nota=70;
let notaLetra= '';

if (nota<=100 && nota>=90){
    notaLetra='A';
}
else if (nota<=89 && nota>=80){
    notaLetra='B';
}
else if (nota<=79 && nota>=70){
    notaLetra='C';
}
else if (nota<=69 && nota>=60){
    notaLetra='D';
}
else {
    notaLetra='F';
}
console.log(nota+' es igual a '+notaLetra);


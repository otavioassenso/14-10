console.log("Escolhe uma matéria: \n1 - Educação Física;  \n2 - Geografia; \n3 - Português; \n4 - Química.")

const materia = 4;

switch(materia){
    case 1:
        console.log("Top");
        break
    case 2:
        console.log("mais ou menos");
        break
    case 3:
        console.log("pessimo");
        break
    case 4:
        console.log("hard");
        break
    default:
        console.log("matéria indisponível");
}

const idade = 32

if (idade>=60){
    console.log("idoso");
} else if (idade >=18){
    console.log("Adulto");
} else if (idade>=14){
    console.log("Adolescente");
} else if (idade >=0){
    console.log("Criança")
} else {
    console.log("idade inválida")
}

const pontos = 965
const anosDeCliente = 10

if (pontos>=1000 && anosDeCliente){
    console.log("Diamante");
} else if (pontos >=500 && pontos <=999){
    console.log("Ouro");
} else if (pontos >=100 && pontos <=499){
    console.log("Prata");
} else if (pontos >=0 && pontos <=99){
    console.log("Bronze")
} else {
    console.log("Inválido")
}

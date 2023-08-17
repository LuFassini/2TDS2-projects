/*const companies = ["Apple","Google","Facebook"];

companies.forEach(company => {
    console.log(`Hey, ${company}!`);
});
*/

/*

const names = ["Whinds", "Freeway","Teste","Maria"];

names.forEach((name) => {
    console.log(`Hi,${name}!`);
});
*/

/*const numbers = [1,2,3,4,5,6,7,8,9,10];
 console.log(numbers);

 numbers.forEach((number,index) => {
    
    if (number % 2 == 0){
        console.log(number);
    }
});
*/

/*const numbers = [1,2,3,4,5,6,7,8,9,10];
 console.log(numbers);

 numbers.forEach((number,index) => {
    
    if (number % 2 == 0){
        console.log(`O número ${number} está na posição ${index} do array`);
    }
});
*/
/*
const cars = [
    {
        marca:"Ford",
        modelo:"Focus",
    },
    {
        marca:"BMW",
        modelo:"BMW Z4",
    },
    {
        marca:"Fiat",
        modelo:"Palio",
    },
    {
        marca:"Audi",
        modelo:"A3",
    },
];
cars.forEach((car) => {
    console.log(`Marca: ${car.marca} - Modelo: ${car.modelo}.`);
});
*/

class Car {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
}

class ListCar {
    constructor() {
        this.list = [];
    }

    addCar(car) {
        this.list.push(car);
    }
}

const listCar = new ListCar();

function butcar() {
    const brand = document.getElementById("brandInput").value;
    const model = document.getElementById("modelInput").value;

    const car = new Car(brand, model);

    listCar.addCar(car);

    document.getElementById("brandInput").value = "";
    document.getElementById("modelInput").value = "";

    listCar.list.forEach(car => {
        console.log(`
            Marca: ${car.marca}
            Modelo: ${car.modelo}
            `
        );
    })
}


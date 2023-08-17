//
class category {
    constructor (id,name){
        this.id = id;
        this.name = name;
        this.products = []; //varios produtos
    }
}

//Produto pertence a uma categoria => 1 por 1 
class Product {
    constructor(id,name,price,category){
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}
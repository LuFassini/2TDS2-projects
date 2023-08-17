//criaçao de categorias
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

//Serviço, validaçoes, consulta
class CategoryService {
    constructor(){  //n tem nada para adicionar 
        this.categories = [];
        this.nextCategoryId = 0;
    }
    
    addCategory(name){ 
        const id = this.nextCategoryId++;
        const category = new Category (id,name);
    }
}
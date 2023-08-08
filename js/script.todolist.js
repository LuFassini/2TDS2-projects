const posts = [];
let postindex = -1;

function savePost() {
    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const resume = document.getElementById("resume").value;
    const author = document.getElementById("author").value;
    const date = document.getElementById("date").value;

    if (title && category && resume && author && date){
        if (postindex == -1){
            storePost(title,category,resume,author,date);
            cleanFields();
            showPosts();
        } else {
            posts [postindex] = {
                title,
                category,
                resume,
                author,
                date,
            };
        }
        cleanFields();
        showPosts();
        postindex = -1;
    } else {
        alert ("Preencha todos os campos!");
    }
}

function cleanFields(){
    const title = document.getElementById("title").value = "";
    const category = document.getElementById("category").value = "";
    const resume = document.getElementById("resume").value = "";
    const author = document.getElementById("author").value = "";
    const date = document.getElementById("date").value = "";

}

function storePost (title,category,resume,author,date){
    const post = {
        title,
        category,
        resume,
        author,
        date,

    };
        posts.push(post);

        console.log(posts);
}

function showPosts(){
    document.getElementById("list").classList.remove("hidden");
    let showContent = "";

    posts.forEach ((post, index) => {
        showContent += `
        <div class="itemPost">
        <h2> ${post.title} </h2> 
        <p><strong> Categoria: </strong> ${post.category} </p>
        <p><strong> Resumo: </strong> ${post.resume} </p>
        <p><strong> Autor: </strong> ${post.author} </p>
        <p><strong> Data de publicação: </strong> ${post.date} </p>

        <button onclick="editPost(${index})"> Editar </button>
        <button onclick="removePost(${index})"> Excluir </button>

        </div>
        `;
    });

    document.getElementById("list").innerHTML = showContent;
}

function editPost(index){
    const post = posts[index];

    document.getElementById("title").value = post.title;
    document.getElementById("category").value = post.category;
    document.getElementById("resume").value = post.resume;
    document.getElementById("author").value = post.author;
    document.getElementById("date").value = post.date;

    postIndex = index;

}

function removePost(index){
     posts.slice(index,1);
     showPosts();

     if (posts.length == 0){
        document.getElementById("list").classList.add("hidden");
     }
}

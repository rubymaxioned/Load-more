var products = document.querySelector('.products'),
    loadBtn = document.querySelector(".button"),
    counter = 0,
    n = 6,
    output = "",
    l = 0;

    myFunction(counter,n);

    function myFunction(counter,n) {
    var p = fetch("https://jsonplaceholder.typicode.com/posts");
    p.then(function(response) {
        return response.json();
    }).then(function(value){
        products = value.slice(counter,n);
        result = "";
        l += products.length;

        for(let item of products){
            output += `
            <li class="first">
            <h2 class="title">${item.title}</h2>
            <p class="description">${item.body}</p>
            </li>
            `;  
        }
        var a = document.querySelector('.products');
        len = output.length;
        a.innerHTML = output;
    })
}

loadBtn.addEventListener('click',function(){
    counter += 6;
    n += 6;
    
    if(n>100){
    n = 100;
    loadBtn.classList.add('hide');
    }
    
    myFunction(counter,n);
})
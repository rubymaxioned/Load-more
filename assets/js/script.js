var products = document.querySelector('.products'),
    loadBtn = document.querySelector(".button"),
    counter = 0,
    n = 6,
    length = '',
    firstEle,
    val = '';

    myFunction();

    function myFunction() {
    var p = fetch("https://jsonplaceholder.typicode.com/posts");
    p.then(function(response) {
        return response.json();
    }).then(function(value){
        products = value.slice(counter,n);
        console.log(products);
        console.log(counter,n);
        output = "",
        len = products.length;
        console.log(len);
        
        for(let item of products){
            output += `
            <li class="first">
            <h2 class="title">${item.title}</h2>
            <p class="description">${item.body}</p>
            </li>
            `;  
        }
        var a = document.querySelector('.products');
        a.innerHTML = output;
    // var first = document.querySelectorAll('.first');

    // length = len;
    // firstEle = first;

    // for(i=0; i<len; i++){
    //     first[i].classList.add('hide');
    // }

    loadBtn.addEventListener('click',function(){
            counter += 6;
            n += 6;
            console.log("after");
            console.log(counter);
            console.log(n);
            // loadMoreFunction(counter,n,length,firstEle);
            myFunction(counter,n);
        })
        // console.log(counter);
    })

    // function loadMoreFunction(initial,last) {
    //     last = last < len ? last : len;   
    
    //     for (var i = initial; i < last; i++) {
    //     if (i === len - 4) {
    //         first[i].classList.add('hide');
    //         // loadBtn.classList.add('hide');
    //     } 
    
    //     // first[i].classList.remove('hide');
    //     // first[i].classList.add('active');
    // }   
    // }
}
    // loadBtn.addEventListener('click',function(){
    //     counter = counter + 6;
    //     n += 6;
    //     loadMoreFunction(counter,n,length,firstEle);
    // })


//using async
// var products = document.querySelector('.products'),
//     loadBtn = document.querySelector(".button"),
//     counter = 0,
//     n = 6,
//     length = '',
//     firstEle,
//     val = '';

// getText("https://jsonplaceholder.typicode.com/posts");

// async function getText(file) {
//     var x = await fetch(file),
//         products = await x.json(),
//         output = "",
//         len = products.length;
          
//     for(let item of products){
//         output += `
//         <li class="first">
//         <h2 class="title">${item.title}</h2>
//         <p class="description">${item.body}</p>
//         </li>
//         `;  
//     }

//     document.querySelector('.products').innerHTML = output;
//     var first = document.querySelectorAll('.first');

//     length = len;
//     firstEle = first;

//     for(i=0; i<len; i++){
//         first[i].classList.add('hide');
//     }

//     loadMoreFunction(counter,n,len,firstEle);
// }

// loadBtn.addEventListener('click',function(){
//     counter = counter + 6;
//     n += 6;
//     loadMoreFunction(counter,n,length,firstEle);
// })
    
// function loadMoreFunction(initial, last,len,first) {
//     last = last < len ? last : len;   

//     for (var i = initial; i < last; i++) {
//     if (i === len - 4) {
//         first[i].classList.add('hide');
//         loadBtn.classList.add('hide');
//     } 

//     first[i].classList.remove('hide');
//     first[i].classList.add('active');
// }

// }


//using XMLHttpRequest
// var loadBtn = document.querySelector(".button");
// var counter = 0;
// var n = 6;
// var length = '';
// let firstEle;
// var val = '';

// var http = new XMLHttpRequest();
// http.open('get','https://jsonplaceholder.typicode.com/posts',true);
// http.send();
// http.onload = function(){
//     if(this.readyState == 4 && this.status == 200) {
//         let products = JSON.parse(this.responseText);
//         let output = ""; 
//         var len = products.length;
        
//         for(let item of products){
//             output += `
//             <li class="first">
//             <h2 class="title">${item.title}</h2>
//             <p class="description">${item.body}</p>
//             </li>
//             `;
//         }
//         document.querySelector('.products').innerHTML = output;
//         var first = document.querySelectorAll('.first');
//     }
//     length = len;
//     firstEle = first;
//     console.log(len);
//     for(i=0; i<len; i++){
//         first[i].classList.add('hide');
//     }
//     loadMoreFunction(counter,n,len,firstEle);
// }

// loadBtn.addEventListener('click',function(){
//     counter = counter + 6;
//     n += 6;
//     loadMoreFunction(counter,n,length,firstEle);
// })

// function loadMoreFunction(initial, last,len,first) {
//     last = last < len ? last : len;   
//     for (var i = initial; i < last; i++) {
//     if (i === len - 4) {
//         first[i].classList.add('hide');
//         loadBtn.classList.add('hide');
//     } 
//     first[i].classList.remove('hide');
//     first[i].classList.add('active');
// }
// }
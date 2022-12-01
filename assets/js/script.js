var box = document.querySelector(".box");
var boxList = document.querySelectorAll(".box li");
var loadBtn = document.querySelector(".button");
var counter = 0;
var n = 6;
var len = boxList.length;
// console.log(len);


function loadMoreFunction(initial, last) {
    for(var i=initial; i<last; i++){
        boxList[i].classList.add('active');
    }
}

loadMoreFunction(counter, n);


loadBtn.addEventListener('click',function(){
    // console.log(counter);
    if(counter < len-6) {
        counter = counter + 6;
        n += 6;
        loadMoreFunction(counter, n);
        
    } else {  loadBtn.classList.add('hide'); }
})


// console.log(loadBtn);
// console.log(boxList);

// function loadMoreFunction(initial, last) {
//     for(var i=n; i>counter; i--){
//         boxList[i].classList.add('active');
//     }
// }

// loadMoreFunction(counter, n);

// loadBtn.addEventListener('click',function(){
//     if(counter < len) {
//         counter = counter + 6;
//         n += 6;
//         loadMoreFunction(counter, n);
       
//     } else {  loadBtn.classList.add('hide'); }
// })
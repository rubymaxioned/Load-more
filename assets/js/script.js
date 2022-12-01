var box = document.querySelector(".box");
var boxList = document.querySelectorAll(".box li");
var loadBtn = document.querySelector(".button");
var counter = 0;
var n = 6;
var len = boxList.length;
console.log(len);
// console.log(loadBtn);
// console.log(boxList);

function loadMoreFunction(initial, last) {
    for(var i=initial; i<last; i++){
        counter++;
        boxList[i].classList.add('active');
    }
}

loadMoreFunction(counter, n);


loadBtn.addEventListener('click',function(){
    // containerList.forEach(function(list){
    //     containerList[counter].classList.add('active');
    //     counter++;
    //     console.log(list);
    // })
    if(counter < len) {
        // counter = counter + 6;
        n += 6;
        loadMoreFunction(counter, n);
       
    } else {  loadBtn.classList.add('hide'); }
})
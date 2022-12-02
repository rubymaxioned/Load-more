var box = document.querySelector(".box");
var boxList = document.querySelectorAll(".box li");
var loadBtn = document.querySelector(".button");
var counter = 0;
var n = 6;
var len = boxList.length;
console.log(len);


function loadMoreFunction(initial, last) {
n = n < len ? n : len;   
for (var i = counter; i < n; i++) {
    if (i === len - 2) {
        loadBtn.classList.add('hide');
    }
    boxList[i].classList.add('active');

}
}
loadMoreFunction(counter, n);

loadBtn.addEventListener('click',function(){
                counter = counter + 6;
                n += 6;
                loadMoreFunction(counter, n);
})

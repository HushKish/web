function nightDayHandler(self){ 
    // self라는 매개변수 선언
    var target = document.querySelector('body');

    if(self.value == 'night'){
        target.style.backgroundColor = 'black';
        target.style.color = 'white'
        self.value = 'day'

        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
            alist[i].style.color = 'powderblue';
            i++;
        }
    }
    else{
        target.style.backgroundColor = 'white';
        target.style.color = 'black'
        self.value = 'night'

        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
            alist[i].style.color = 'blue';
            i++;
        }
    }
}
var coworker = {
    "programmer":"egoing",
    "designer":"leezche"
}
// for(var key in coworker){
//     document.write(key+':'+coworker[key]+'<br>');
// }//key가 배열의 index느낌
coworker.showAll = function(){
    for(var key in this){
        document.write(key+ ':' + this[key] + '<br>');
        
    }
}//showAll도 coworker객체에 포함되기에 출력이 되는 거임
coworker.showAll();
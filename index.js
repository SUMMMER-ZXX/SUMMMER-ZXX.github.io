//创造一个span标签对象，把创造的文本节点放进span标签对象，并把拥有文本的span标签放进每一个li中
var myNodelist = document.getElementsByTagName('LI');
for(var i=0;i<myNodelist.length;i++){
    var span = document.createElement('SPAN');      //与appendChild联合使用
    var txt = document.createTextNode('\u00D7');     //创造一个文本节点
    span.className = 'close';                       
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

//让所有的
var close = document.getElementsByClassName('close');
for(var i=0;i<close.length;i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = 'none';
    }
}

var list = document.querySelector('ul');
list.addEventListener('click',function(ev){
    if(ev.target.tagName === 'LI'){             //ev.target取得的是事件发生的对象,tagName返回元素标签的大写名称
        ev.target.classList.toggle('checked');
    }
},false)

function newElement(){
    var li = document.createElement('li');
    var inputValue = document.getElementById('myInput').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t)
    if(inputValue === ''){
        alert('You must write something!');
    }else{
        document.getElementById('myUL').appendChild(li);
    }
    document.getElementById('myInput').value = '';

    var span = document.createElement('SPAN');
    var txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);

    for(i=0;i<close.length;i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = 'none';
        }
    }
}
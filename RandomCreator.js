var types=document.querySelectorAll(".type");
var length=document.querySelector(".length-value");
var range=document.querySelector(".length");
var button=document.querySelector(".button");
var output=document.querySelector(".output");
var copy=document.querySelector(".copy");

range.addEventListener("input",updateRangeText);

function updateRangeText(){
    length.innerText=range.value;
}

function defaultRange(){
    range.value=50;
    length.innerText=range.value;
}
defaultRange();

const characters= [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', '"', "'", '<', '>', ',', '.', '?', '/', '\\', '|', '`', '~']
];

for(var i=0;i<types.length;i++){
    types[i].addEventListener("click",check);
}

function check(e){
    if(types[0].checked&&e.target!=types[0]){
        types[0].checked=false;
    }
    if(e.target==types[0]){
    for(var j=0;j<types.length;j++){
        if(types[j]!=e.target){
            types[j].checked=false;
        }
    }
    }
}

button.addEventListener("click",generate);


function allUnchecked(){
    for(var i=0;i<types.length;i++){
        if(types[i].checked){
            return true;
        }else{
            continue;
        }
}
}

function generate(){
    if(!allUnchecked()){
        output.innerText="select the type !";
        return ;
    }
    removePreviousOutput();
    for(var i=0;i<range.value;i++){
    var set=Math.round(Math.random()*3);
    if(types[set+1].checked==false&&types[0].checked==false){
        i-=1;
        continue;
    }
    var value=characters[set][Math.round(Math.random()*characters[set].length)];
    if(value==undefined){
        i-=1;
        continue;
    }
    output.innerText+=value;
    }
}

function removePreviousOutput(){
    output.innerText="";
}


button.addEventListener("click",transform);
function transform(){
    copy.classList.add("show");
}


copy.addEventListener("click",copyToClipBoard);
function copyToClipBoard(){
    navigator.clipboard.writeText(output.innerText);
}
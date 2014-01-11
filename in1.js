window.onload = function(){

function first(){
this.name = 'nitish'
}


function second(){
//this.name = 'hooda';
this.get_name();
}

second.prototype = new first();


second.prototype.get_name = function(){
console.log(this.name);
}

new second();



}
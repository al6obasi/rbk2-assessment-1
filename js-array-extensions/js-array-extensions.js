// your code here
var arrayNew =function () {
this.count =0;
this.storage =[];
}
arrayNew.prototype.add =function(value){
	this.storage.push(value);
	this.count ++;
}
arrayNew.prototype.remove =function(value){
	this.storage.pop(value);
	this.count -- ;
}
arrayNew.prototype.size=function(){
	return this.count;
}
arrayNew.prototype.returnFirst = function(){
	return this.storage[0];

}
arrayNew.prototype.returnLast = function(){
	return this.storage[this.count-1];
}
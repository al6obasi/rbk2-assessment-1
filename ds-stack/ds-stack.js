var Stack = function() {
	//your code is here
	var someInstance = {};
	someInstance.storage = [];
someInstance.add =function (value){
	this.storage.push(value);
}
someInstance.remove =function (){
	this.storage.pop();
}
	return someInstance;

};

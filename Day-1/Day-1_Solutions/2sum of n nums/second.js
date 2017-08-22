function total(){
	var num = 1, total=0;
	num = document.getElementById("num").value;
	//total = (num*(num+1))/2;
	for(var i=1;i<=num;i++){
		total = total+i;
	}
	document.getElementById("val").value = total;
	
	
}
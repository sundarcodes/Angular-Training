function factorial(){
	var fact=1, num=1,i;
	num = document.getElementById("num").value;
	 for(i=1;i<=num;i++){
		 fact = fact*i;
		 
		}
		document.getElementById("final").value = fact;
	
}
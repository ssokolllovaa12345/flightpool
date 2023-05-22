function checkkolvo() { 
	var elMsg = document.getElementById('checkk'); 
	var pass = document.getElementById('numberr').value;
	if (this.value <= 8 && this.value > 0)  { 
		 elMsg.textContent = ''; 
	} 
	else { 
		elMsg.textContent = 'Количество человек должно быть не менее 0 и не более 8';
	}
}
var elNumber = document.getElementById('numberr'); 
elNumber.onblur = checkkolvo;

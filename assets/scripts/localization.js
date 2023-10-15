/*************************************************************

localization.js

Contains localization related code

*************************************************************/

// REGISTRATION FORM CONSTANTS
let REG_FORM_VALIDATION_MESSAGE_NAME = "";
let REG_FORM_VALIDATION_MESSAGE_EMAIL = "";
let REG_FORM_VALIDATION_MESSAGE_EMAIL_SYNTAX = "";
let REG_FORM_VALIDATION_MESSAGE_AGE = "";
let REG_FORM_VALIDATION_MESSAGE_PRIVACY = "";

//What the html document language we have?
let langCode = document.getElementById("language_version").textContent;

if(langCode === "en"){
	//english version
	REG_FORM_VALIDATION_MESSAGE_NAME = "Name should be filled in";
	REG_FORM_VALIDATION_MESSAGE_EMAIL = "Email should be filled in";
	REG_FORM_VALIDATION_MESSAGE_EMAIL_SYNTAX = "Invalid email address format";
	REG_FORM_VALIDATION_MESSAGE_AGE = "You should be older than 18 years old";
	REG_FORM_VALIDATION_MESSAGE_PRIVACY = "You have to accept the Privacy Policy";
}
else{
	//by default using russian version
	REG_FORM_VALIDATION_MESSAGE_NAME = "Имя должно быть заполнено";
	REG_FORM_VALIDATION_MESSAGE_EMAIL = "Электронный адрес должен быть заполнен";
	REG_FORM_VALIDATION_MESSAGE_EMAIL_SYNTAX = "Некорректный формат электронного адреса";
	REG_FORM_VALIDATION_MESSAGE_AGE = "Тебе должно быть больше восемнадцати лет";
	REG_FORM_VALIDATION_MESSAGE_PRIVACY = "Нужно согласиться с условиями использования";
}
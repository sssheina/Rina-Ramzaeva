/*************************************************************

localization.js

Contains localization related code

*************************************************************/

// REGISTRATION FORM CONSTANTS
let REG_FORM_VALIDATION_MESSAGE_NAME = "";
let REG_FORM_VALIDATION_MESSAGE_EMAIL = "";
let REG_FORM_VALIDATION_MESSAGE_EMAIL_SYNTAX = "";

//What the html document language we have?
let langCode = document.getElementById("language_version").textContent;

if(langCode === "en"){
	//english version
	REG_FORM_VALIDATION_MESSAGE_NAME = "Name should be filled in";
	REG_FORM_VALIDATION_MESSAGE_EMAIL = "Email should be filled in";
	REG_FORM_VALIDATION_MESSAGE_EMAIL_SYNTAX = "Invalid email address format";
}
else{
	//by default using russian version
	REG_FORM_VALIDATION_MESSAGE_NAME = "Имя должно быть заполнено";
	REG_FORM_VALIDATION_MESSAGE_EMAIL = "Электронный адрес должен быть заполнен";
	REG_FORM_VALIDATION_MESSAGE_EMAIL_SYNTAX = "Некорректный формат электронного адреса";
}
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
let REG_FORM_THANKS_MODAL_CONTENT = "";
let REG_FORM_PRIVACY_MODAL_CONTENT = "";

//What the html document language we have?
let langCode = document.getElementById("language_version").textContent;

if(langCode === "en"){
	//english version
	REG_FORM_VALIDATION_MESSAGE_NAME = "Name should be filled in";
	REG_FORM_VALIDATION_MESSAGE_EMAIL = "Email should be filled in";
	REG_FORM_VALIDATION_MESSAGE_EMAIL_SYNTAX = "Invalid email address format";
	REG_FORM_VALIDATION_MESSAGE_AGE = "You should be older than 18 years old";
	REG_FORM_VALIDATION_MESSAGE_PRIVACY = "You have to accept the Privacy Policy";
	REG_FORM_THANKS_MODAL_CONTENT = `<h3>Thank you! <br>The request is submitted!</h3>
                            <p class="text">
                                I'll contact you soon to discuss the details.
                            </p>`;
	REG_FORM_PRIVACY_MODAL_CONTENT = "TODO: translate";
}
else{
	//by default using russian version
	REG_FORM_VALIDATION_MESSAGE_NAME = "Имя должно быть заполнено";
	REG_FORM_VALIDATION_MESSAGE_EMAIL = "Электронный адрес должен быть заполнен";
	REG_FORM_VALIDATION_MESSAGE_EMAIL_SYNTAX = "Некорректный формат электронного адреса";
	REG_FORM_VALIDATION_MESSAGE_AGE = "Тебе должно быть больше восемнадцати лет";
	REG_FORM_VALIDATION_MESSAGE_PRIVACY = "Нужно согласиться с условиями использования";
	REG_FORM_THANKS_MODAL_CONTENT = `<h3>Спасибо! <br>Заявка отправлена!</h3>
                            <p class="text">
                                Я свяжусь с тобой в ближайшее время для уточнения деталей и назначения времени
                                консультации.
                            </p>`;
	REG_FORM_PRIVACY_MODAL_CONTENT = `<h3 class="privacy-policy__title">Политика конфиденциальности</h3>
                        <p>Психолог Рина Рамзаева уважает вашу конфиденциальность и обязуется защищать ваши персональные
                            данные.
                            Данная политика конфиденциальности описывает порядок сбора, использования и защиты любой
                            информации,
                            полученной от вас.</p>
                        <h4>1. Сбор информации</h4>
                        <p>Я могу собирать личную идентификационную информацию, такую как ваше имя, адрес электронной
                            почты,
                            номер телефона, а также другую информацию, которую вы добровольно предоставляете мне через
                            мой веб-сайт,
                            онлайн-формы, платформы планирования или оплаты, электронную почту, по телефону или при
                            личной встрече. </p>
                        <h4>2. Использование информации</h4>
                        <p>Любая информация, которую я получаем от вас, используется исключительно для предоставления
                            консультационных
                            услуг, планирования встреч, обработки платежей, связи с вами и улучшения вашего опыта работы
                            с моей практикой.
                            Я никогда не буду продавать, сдавать в аренду, лизинг или иным образом передавать вашу
                            личную информацию
                            третьим лицам, за исключением случаев, предусмотренных законом.</p>
                        <h4>3. Записи клиента</h4>
                        <p>Записи консультационных сессий и записи, связанные с вашей терапией, являются
                            конфиденциальными и защищены
                            привилегией психолога и пациента. Эти записи будут храниться в надежном месте и
                            предоставляться вам только
                            по письменному запросу. Я не буду передавать ваши записи другим лицам, если вы не дадите на
                            это письменного
                            согласия, за исключением случаев, предусмотренных законом.</p>
                        <h4>4. Безопасное хранение</h4>
                        <p>Я принимаю меры по защите вашей информации, храня ее на защищенных серверах за брандмауэром.
                            Любые платежные
                            операции будут зашифрованы. Обращаю ваше внимание на то, что, хотя я прилагаю все усилия для
                            защиты
                            ваших данных, ни один сайт или цифровое хранилище не является на 100% безопасным.</p>
                        <h4>5. Изменения в данной политике </h4>
                        <p>Настоящая политика конфиденциальности может периодически обновляться с учетом изменений в
                            деловой практике.
                            Вы не будете получать уведомления об изменениях, поэтому периодически просматривайте эту
                            страницу.</p>
                        <h4>6. Контактная информация</h4>
                        <p>Если у вас возникли вопросы по поводу данной политики конфиденциальности или вы хотите
                            обсудить, как я
                            обрабатываю вашу личную информацию, свяжитесь сомной по адресу [адрес электронной почты и
                            номер телефона]".</p>`;
}
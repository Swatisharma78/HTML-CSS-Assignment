document.querySelector("#form").addEventListener("submit",formSubmit);
var formArr = JSON.parse(localStorage.getItem("studentDataBase")) || [];

function formSubmit(event){
    event.preventDefault();
    var name = document.querySelector("#name").value;
    var age = document.querySelector("#age").value;
    var gender = document.querySelector("#gender").value;
    var email = document.querySelector("#email").value;
    var phone = document.querySelector("#phone").value;

    var formObj = {
        formName:name,
        formAge:age,
        formGender:gender,
        formEmail:email,
        formPhn:phone,

    };

    formArr.push(formObj);
    localStorage.setItem("studentDataBase",JSON.stringify(formArr));


}
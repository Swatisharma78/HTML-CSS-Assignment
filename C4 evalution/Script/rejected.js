var rejected = JSON.parse(localStorage.getItem("rejected"));

rejected.map(function(elem){
    var row = document.createElement("tr");

    var col1=document.createElement("td");
    col1.innerText=elem.formName;

    var col2=document.createElement("td");
    col2.innerText=elem.formAge;

    var col3=document.createElement("td");
    col3.innerText=elem.formGender;

    var col4=document.createElement("td");
    col4.innerText=elem.formEmail;

    var col5=document.createElement("td");
    col5.innerText=elem.formPhn;

    row.append(col1,col2,col3,col4,col5);
    document.querySelector("#body").append(row);
})
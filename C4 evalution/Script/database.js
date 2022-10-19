var adminarr = JSON.parse(localStorage.getItem("studentDataBase"));
var admit = JSON.parse(localStorage.getItem("admitted")) || [];
var reject= JSON.parse(localStorage.getItem("rejected")) || [];



adminarr.map(function(elem){
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

    var col6=document.createElement("td");
    col6.innerHTML = "<button>Accepted</button>";
    col6.addEventListener("click",function(){
        admitted(elem);
    });
    
    var col7=document.createElement("td");
    col7.innerHTML = "<button>Rejected</button>";
    col7.addEventListener("click",function(){
            rejected(elem);    

        
    });

row.append(col1,col2,col3,col4,col5);
document.querySelector("#body").append(row);


});
function admitted(elem){
    
    admit.push(elem);
    localStorage.setItem("admitted",JSON.stringify(admit));
}
function rejected(elem){
    
    reject.push(elem);
    localStorage.setItem("rejected",JSON.stringify(reject));
}
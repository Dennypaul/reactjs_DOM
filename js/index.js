function jsonFile(file,callback){
    var ajaxCall=new XMLHttpRequest();
    ajaxCall.overrideMimeType("application/json");
    ajaxCall.open("GET",file,true);
    ajaxCall.onreadystatechange=function(){
        if(ajaxCall.readyState === 4 && ajaxCall.status =="200"){
            callback(ajaxCall.responseText);
        }
    }
    ajaxCall.send(null);
}

// call the function

jsonFile("data.json",function(text){
    var data=JSON.parse(text);
    details(data.details);

    
})

var body=document.querySelector("#root");
var main=document.createElement("section");
main.classList.add("container");
body.appendChild(main);

//creating article1

var art1=document.createElement("article");
art1.setAttribute("class","article1");
main.appendChild(art1);

//creating image

var img=document.createElement("img");
img.src="images/profile1.jpg";
img.alt="profile";
art1.appendChild(img);
 


function details(mydetails){

    var name=document.createElement("h1");
    name.textContent=mydetails.name;
    art1.appendChild(name);

    var rollno=document.createElement("h2");
    rollno.textContent=mydetails.rollno;
    art1.appendChild(rollno);

    var mobile=document.createElement("h2");
    mobile.textContent=mydetails.mobile;
    art1.appendChild(mobile);

    var email=document.createElement("h2");
    email.textContent=mydetails.email;
    art1.appendChild(email);

} 

// function arrdetails(mydata){
//     for(i in mydata){
//         var art1=document.createElement("artical");
//         art1.setAttribute("class","artical2");
//         main.appendChild(art1);

//         var img=document.createElement("ïmage");
//         img.src="images/profile1.jpg";
//         img.alt="profile";
//         alt1.appendChild(img);

//         var name=document.createElement("h4");
//         name.textContent=mydata.name;
//         art1.appendChild(name);

//         var rollno=document.createElement("h2");
//         rollno.textContent=mydata.rollno;
//         art1.appendChild(rollno);

//         var mobile=document.createElement("h2");
//         mobile.textContent=mydata.mobile;
//         alt1.appendChild(mobile

//         var email=document.createElement("h2");
//         email.textContent=mydata.email;
//         alt1.appendChild(email);    


//     }
// }
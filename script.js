var data1={image : "images.jpg",name : "Brahmanandam",designation : "Software Engineer"};
var data2={image : "photo 4.jpeg",name : "Brahmi",designation : "Software Developer"};
var isdata1 =true;
var displaydata;
var changingpic=function(){
   if(isdata1)
    {
        displaydata=data2;
        isdata1=false;
    }
    else{
        displaydata=data1;
        isdata1=true;
    }
    document.getElementById("myimage").src=displaydata.image;
    document.getElementById("title").innerHTML=displaydata.name;
    document.getElementById("mydesignation").innerHTML=displaydata.designation;
    

}

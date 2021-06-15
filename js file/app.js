 const title=document.querySelector("#title");
 const author=document.querySelector("#author");
 const year=document.querySelector("#year");
 const botton=document.querySelector(".btn");
 const booklist=document.querySelector('#book-list')


 botton.addEventListener("click",(e)=>{
     e.preventDefault();
    
if (title.value=='' && author.value == '' && year.value=='') {
    alert("Please type something this box")
}else{
    const newRow=document.createElement('tr');
    const newTitle=document.createElement('th');

    newTitle.innerHTML=title.value;
    newRow.appendChild(newTitle)
   
    const newAuthor=document.createElement('th');

    newAuthor.innerHTML=author.value;
    newRow.appendChild(newAuthor)
   
    const newYear=document.createElement('th');

    newYear.innerHTML=year.value;
    newRow.appendChild(newYear);
    booklist.appendChild(newRow);
}

 })
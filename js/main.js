var inputBookmarkName = document.getElementById("inputname");
var inputBookmarkUrl = document.getElementById("inputurl");

var v = `<i  class=" fa-solid fa-circle-exclamation "></i>  (must be a valid url)`
var n = `<i  class=" fa-solid fa-circle-exclamation "></i> (must contain at least 3 characters)`
var z = `<i class="fa-solid fa-circle-check "></i>`

var bookmarkContainer = [ ]

if (localStorage.getItem("bookmarkContent") !==null){
    bookmarkContainer=JSON.parse(localStorage.getItem("bookmarkContent"))
    bookmarkDisplay ()
}


function checkValidationUrl (){
    if(isValid(inputBookmarkUrl.value)){
        document.getElementById("notvalid").innerHTML = null;
        document.getElementById("valid").innerHTML = z;

    }
    else{
        document.getElementById("valid").innerHTML = null;

        document.getElementById("notvalid").innerHTML = v;
    }

}


function checkValidationName (){
    if(validateMinLength(inputBookmarkName.value)){
        document.getElementById("notvalid2").innerHTML = null;
        document.getElementById("valid2").innerHTML = z;

    }
    else{
        document.getElementById("valid2").innerHTML = null;

        document.getElementById("notvalid2").innerHTML = n;
    }

}





function addElements(){
    
    var bookmarkContent = {
        name : inputBookmarkName.value ,
        url : inputBookmarkUrl.value
    }

// if(nameRepeat ()){
    if(isValid(inputBookmarkUrl.value) &&  validateMinLength(inputBookmarkName.value) ){
        
        bookmarkContainer.push(bookmarkContent)
        
        
        localStorage.setItem( "bookmarkContent" , JSON.stringify(bookmarkContainer))
        bookmarkReset()
        
        bookmarkDisplay ()
        document.getElementById("valid2").innerHTML = null;
        document.getElementById("valid").innerHTML = null;
    }
// }
// else{

//     console.log("this name is taken")
// }

}

function bookmarkReset(){
    inputBookmarkName.value = null;
    inputBookmarkUrl.value = null;
}

function bookmarkDisplay (){


var x = "";

for( i=0 ;  i < bookmarkContainer.length ; i++ ){
x +=  `   <div class="table_content">
    <div class="row mx-auto">
      <h3 class="col-3 h3_1"> ${i+1}</h3>
      <h3 class="col-3 h3_2">${bookmarkContainer[i].name}</h3>
      <div class="col-3">
       <a target="_blank"href='${bookmarkContainer[i].url}' " type="button" class="visit_button btn">
  <i class="fa-solid fa-eye"></i> Visit
</a>
      </div>
      <div class="col-3">
        <button onclick="bookmarkDelete (${i})" type="button" class="delete_button btn">
          <i class="fa-solid fa-trash-can"></i> Delete
        </button>
      </div>
    </div>
  </div>  ` 

}

document.getElementById("Bookmarkresult").innerHTML= x ;

}

function bookmarkDelete (index){
    bookmarkContainer.splice( index ,  1  )
    localStorage.setItem( "bookmarkContent" , JSON.stringify(bookmarkContainer))
    bookmarkDisplay ()
}

function isValid(url) {
    const pattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-]*)*$/;
    return pattern.test(url);
}

function validateMinLength(name) {
    const regex = /^.{3,}$/;
    return regex.test(name); 
}

// function nameRepeat (){
//     for( i=0 ;  i < bookmarkContainer.length ; i++ ){
//         if(bookmarkContainer[i].includes(localStorage.getItem("bookmarkContent"))){

//             return false;

//         }
//         else{
//             return true;
//         }
//     }
// }
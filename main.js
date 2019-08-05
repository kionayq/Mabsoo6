$(document).ready(function () { //must always be here if you use JQuery


   $('#validate').click(function (){
    let codeInput =  $('#codeInput').val();

    console.log(codeInput)

    if (codeInput == 5421) {
        remove()
        $('.Jud3i').addClass( "d-block");   

    }
    if (codeInput == 6712) {
        remove()
        $('.3amer').addClass( "d-block");   

    }

    if (codeInput == 2457) {
        remove()
        $('.maram').addClass( "d-block");   

    }
});


   $('#delever').click(function (){
    remove()
    $('.done').addClass( "d-block");   
   
});

   $('#delever1').click(function (){
    remove()
    $('.done').addClass( "d-block");   
   
});


   $('#back').click(function (){
    remove()
    $('.login').addClass( "d-block");   
   
});

   $('#back1').click(function (){
    remove()
    $('.login').addClass( "d-block");   
   
});

   $('#back2').click(function (){
    remove()
    $('.login').addClass( "d-block");   
   
});


   $('#toTable').click(function (){
    remove()
    $('.table').addClass( "d-block");   
   
});





function remove() {

        //jud3i ----------------
        $('.Jud3i').removeClass( "d-block");  
        $('.Jud3i').removeClass( "d-none");  
        $('.Jud3i').addClass( "d-none");  


        //3amer -------------
    $('.3amer').removeClass( "d-block");  
    $('.3amer').removeClass( "d-none");  
    $('.3amer').addClass( "d-none");  

        //maram -------------
    $('.maram').removeClass( "d-block");  
    $('.maram').removeClass( "d-none");  
    $('.maram').addClass( "d-none");  

        //done -------------
    $('.done').removeClass( "d-block");  
    $('.done').removeClass( "d-none");  
    $('.done').addClass( "d-none");  

    //login ----------------
    $('.login').removeClass( "d-block");  
    $('.login').removeClass( "d-none");  
    $('.login').addClass( "d-none");  


    //table ----------------
    $('.table').removeClass( "d-block");  
    $('.table').removeClass( "d-none");  
    $('.table').addClass( "d-none");  




    $('.sucsses').removeClass( "d-block");  
    $('.table').removeClass( "d-block");  
 }

});
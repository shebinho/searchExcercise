//       MOJ PRIMER 

// $("#btnSearch").on("click",function(){
//     let inputVal = $("#checkEmail").val();
//     var firstPos = inputVal.indexOf("@");
//     var lastPos = inputVal.lastIndexOf(".");
//     if (firstPos<1 || lastPos<firstPos+2 || lastPos+2>=inputVal.length) {
//         alert("Not a valid e-mail address");
//         return false;
   

// }else{
//     alert("Your email is valid");
// }
// });

 //                  RISTE PRIMER 1

 // $(function(){
//     let logInBtn = $("#btnSearch").on("click",function(){
//         let inputVal = $("#checkEmail").val();
//         // let inputArray = inputVal.split("");
//         // let bool = false;
//         // for(leti = 0 ; i < inputArray.length; i++){
//         //     if(inputArray[i] === "@"){
//         //         bool = true;
//         //         break;
                
//         //     }
//         // }
//         if(bool){
//             console.log("valid email");
//         }else{
//             console.log("invalid email");
//         }
//     });

// });
//              RISTE PRIMER 2 

$(function(){
    let logInBtn = $("#btnSearch").on("click",function(){
        let inputVal = $("#checkEmail").val();
        
        let inputArray = [];
        let bool = false;
        for(let i = 0; i < inputVal.length; i++){
            inputArray.push(inputVal.slice(i,i+1));
        }
        for (let i =0; i < inputArray.length; i++){
            if(inputVal[i]==="@"){
                bool = true;
                break;
            }
        }
        if(bool){
            console.log("valid email");
        }
        else{
            console.log("invalid email");
        }
    });
});

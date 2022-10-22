//clear data
function pressAllClear(){
   document.getElementById('result').value=''
} 
//add data
function display(value){
    document.getElementById("result")
    .value +=value;
} 
// calculate the result // declare element greater than 1
function calculate(){
    if(result.value.length<1){
        document.getElementById('equalTo')='';
    }
  const operation = document.getElementById("result").value;
  const sum = eval (operation);
   document.getElementById("result").value=sum;
}  
//clear digit by digit
function pressClear(){
    document.getElementById('result').value= result.value.slice(0, -1);
 }

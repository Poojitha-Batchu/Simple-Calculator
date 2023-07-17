let input= document.getElementById('inputbox');
let output= document.getElementById('outputbox');
let buttons= document.querySelectorAll('button');

let string1= "";
let string2= "";
let arr= Array.from(buttons);
arr.forEach(button =>{
     button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            string2= ('= '+eval(string1));
            input.value= string2;
            output.value= string1;
        } else if(e.target.innerHTML == 'AC'){
            string1="";
            input.value="";
            output.value="";
        } else if(e.target.innerHTML== 'DEL'){
            string1= string1.substring(0,string1.length-1);
            input.value =string1;
        } else {
        string1+= e.target.innerHTML;
        input.value =string1;
    } })
})
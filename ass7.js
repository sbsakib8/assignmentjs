// 7. The <button> element should do something when someone clicks on it. Try to fix it!
let click = document.getElementsByClassName('click')[0];
click.style.background='green';
click.style.position= 'relative';
click.style.top = '20px';
click.style.width ='100px';
click.style.height ='50px';
click.style.border = '2px solid red';
click.style.borderRadius = '20px';


 let btn = addEventListener("click",()=>{
    let h1 =document.createElement('h1');
     document.body.appendChild(h1);
     h1.textContent ='hi hablu mama';
     h1.style.textAlign = 'center';
     h1.style.background = 'red';
     h1.style.border = '2px solid green';
     h1.style.borderRadius = '10px';
     
})

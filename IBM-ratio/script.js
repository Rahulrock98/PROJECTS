const forms = document.querySelector('form')

forms.addEventListener('submit', function(e){
    e.preventDefault()
   const height=  parseInt(document.querySelector('#height').value )  
   const weight=  parseInt(document.querySelector('#weight').value )  
   const results=  document.querySelector('#results')

if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML="please give a valid height ";
}
else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML="please give a valid weight ";
}else{
   const bmi= (weight/((height*height)/10000)).toFixed(2)
   results.innerHTML =`<span>${bmi}</span>`;
    if(bmi < 18.6){
        results.innerHTML = `You are Under Weight ${bmi}`
    } else if( bmi => 18.6 && bmi<=24.9 ){
        results.innerHTML=`You fit, keep Maintain ${bmi}`
    }else if ( bmi> 24.9){
        results.innerHTML = `You need to lose Your weight ${bmi}`
    }
}
})


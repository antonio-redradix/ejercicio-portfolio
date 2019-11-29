//import{a,b,c} from './numbers'
//import{n1,n2} from './numbers_and_letters'
export function main(){
    //console.log('Lorem ipsum')
    //console.log(a)
    //console.log(b)
    //console.log(c)
    //console.log(n1)

    let options=document.querySelectorAll(".option")
    console.log("aaaaa")
    console.log(options)
    options=[...options]
    for(let option of options){
        option.onclick=clicking
        option.onmouseenter=mouseenter
        option.onmouseout=mouseout
    }
   
}

function clicking(event){
    let option=document.querySelector(".option--selected")
    if(option!=null){
        console.log(option)
        option.className= "option"
    }
    if (event.target === this){
       
        event.target.classList.add("option--selected")
    }
    
}

function mouseenter(event){
    if (event.target === this){
        event.target.style.backgroundColor="gray"
    }
}

function mouseout(event){
    if (event.target === this){
    
        event.target.style.backgroundColor= "rgb(75, 65, 65)";
     
    }
}

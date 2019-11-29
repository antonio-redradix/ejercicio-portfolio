import menuitems from "./menuItems"
export function main(){
   menuitems.forEach((item,i,array) => {
       item.addEventListener("click",function(){
        array.forEach((elemremove) =>{
            elemremove.classList.remove("selected")
        }
        )
        item.classList.add("selected")
          
       })
    
   })
   
}
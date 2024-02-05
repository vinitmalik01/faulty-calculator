a=prompt("enter a : ")
b=prompt("enter b: ")
c=Math.random()
d=prompt("what work do u wanna do with these number: ")

if (c>.1) {
   if(d=="+"){
    console.log(a+b)
   }
   else if(d=="-"){
    console.log(a-b)
   }
   else if(d=="*"){
    console.log(a*b)
   }
   else if(d=="/"){
    console.log(a/b)
   }
   else if (d=="**"){
    console.log(a**b)
   }

} else {
    if(d=="+"){
        console.log(a-b)
       }
       else if(d=="-"){
        console.log(a+b)
       }
       else if(d=="*"){
        console.log(a/b)
       }
       else if(d=="/"){
        console.log(a**b)
       }
       else if (d=="**"){
        console.log(a*b)
       }
}

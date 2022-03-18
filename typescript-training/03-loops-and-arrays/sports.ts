let sports: string[] = ["cricket" , "golf", "tennis" , "swimming"];
/*
for (let index = 0; index < sports.length; index++) {
    console.log(sports[index]);
}
console.log(" ");*/

for(let temp of sports){
    if(temp == "cricket"){
        console.log(temp+" hatedddd");
    } else{
        console.log(temp);
    }
}
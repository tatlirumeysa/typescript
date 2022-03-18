let reviews: number[] = [5,5,4.5,2.1,3];


let total: number = 0;

for (let index = 0; index < reviews.length; index++) {
    console.log(reviews[index]);  
    total +=reviews[index]; 
}

let avarage: number = total / reviews.length;
console.log(  "here is avarage "+ avarage);
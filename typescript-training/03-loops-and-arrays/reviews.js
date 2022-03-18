var reviews = [5, 5, 4.5, 2.1, 3];
var total = 0;
for (var index = 0; index < reviews.length; index++) {
    console.log(reviews[index]);
    total += reviews[index];
}
var avarage = total / reviews.length;
console.log("here is avarage " + avarage);

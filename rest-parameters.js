function addAll(...numbers){
    let count  =0;
    for(let number of numbers){
        count += number;
    }
    return count;
}

const ans  = addAll(1,2,3,4,5,6);
console.log(ans);
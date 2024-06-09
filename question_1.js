function verify(arr, target) {
    let debut = 0;
    let sommeCourante = 0;

    for (let fin = 0; fin < arr.length; fin++) {
        sommeCourante += arr[fin];

        while (sommeCourante > target && debut <= fin) {
            sommeCourante -= arr[debut];
            debut++;
        }

        if (sommeCourante === target) {
            return true;
        }
    }

    return false;
}


const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(verify(arr, target));  // Output: true

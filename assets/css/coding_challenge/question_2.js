function transformerString(str) {
    const length = str.length;

    if (length % 15 === 0) {
        // Divisible par 15 : Inverser et remplacer par les codes ASCII
        let reversedStr = str.split('').reverse().join('');
        return reversedStr.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 5 === 0) {
        // Divisible par 5 : Remplacer par les codes ASCII
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        // Divisible par 3 : Inverser la chaîne
        return str.split('').reverse().join('');
    } else {
        // Si aucune condition n'est remplie, renvoyer la chaîne inchangée
        return str;
    }
}

// Exemple d'utilisation
console.log(transformerString("Hamburger")); // Output: "regrubmaH"
console.log(transformerString("Pizza"));     // Output: "80 105 122 122 97"
console.log(transformerString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"

// COMP 3123 Lab Test 1 - Question 1

function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
        if(Array.isArray(arr) && arr.length > 0) {
            const out = arr.filter(x => typeof(x) == 'string').map(x => x.toLowerCase());
            resolve(out);
        } else {
            reject('Error filtering array');
        }
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray).
    then(result => console.log(result)).
    catch(err => console.log(err));
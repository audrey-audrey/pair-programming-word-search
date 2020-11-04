//Pair Programming 04 Nov 20
//By:
// @audrey-audrey
// @CharlesP8412

const transpose = function (matrix) {

    let output = [];



    // Flip Array 90 degrees
    //Iterates VERTICAL
    for (let i = 0; i < matrix[0].length; i++) {

        output.push([])

        //Iterates HORIZONTAL 
        for (const array of matrix) {
            output[i].push(array[i]);
        }
    }
    return output;
};

const wordSearch = (letters, word) => {

    let result = false;
    //find in horizontal
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            result = true;
            console.log('Found horizontally: ', result);
            return result;
        }
    }

    // find in reversed array
    const reverse = letters.map(ls => ls.reverse().join(''))
    for (l of reverse) {
        if (l.includes(word)) {
            result = true;
            console.log('Found in reversed array ', result);
            return result;
        }
    }
    // transpose matrix letters
    let transLetters = transpose(letters);

    // find in vertical
    const verticalJoin = transLetters.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) {
            result = true;
            console.log('Found vertically: ', result);
            return result
        }
    }



    return result;
}

module.exports = wordSearch

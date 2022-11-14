
function findMatching (driversNames, name){
    return driversNames.filter(item => item.toUpperCase() === name.toUpperCase())
}

function fuzzyMatch(driversNames, letters){
    return driversNames.filter(function checkLetters(item){
        for (let i = 0; i < letters.length; i++)
            if (letters[i] === item[i]){
                return true
            } else {
                return false
            }
        })
    }



function matchName(driverObj, nameCheck){
    return driverObj.filter(item => item.name === nameCheck)
}










// function checkLetters(){
//     let i = 0;
//     while(i < letters.length){
//         if (letters[i] === driversNames.name[i]){
//             i++

//         } else {
//             return false
//         }
//         return true
//     }
// }

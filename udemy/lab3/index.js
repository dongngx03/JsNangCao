// // Bài 3.2: 
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// const checkDogs = (...dog) => {
//     //1.
//     const july = dog.slice(2, 3);
//     //2. 
//     const julyAndKante = [...july, ...dog.slice(5, 10)]
//     //3.
//     julyAndKante.map((e, index) => {
//         e >= 3 && console.log(`Chó số ${index + 1} là người lớn và ${e} tuổi`);
//         e < 3 && console.log(`chó số ${index + 1} vẫn là chó con`);
//     })
//     console.log(julyAndKante);
// }
// //4.
// checkDogs(...dogsJulia, ...dogsKate)

// // Bài 3.3: 

// const testData1 = [5, 2, 4, 1, 15, 8, 3];
// const testData2 = [16, 6, 10, 5, 6, 1, 4];


// const calcAverageHumanAge = (...dogAge) => {
//     const arrDogAge = [...dogAge]
//     //1. 
//     arrDogAge[0].map((e, index) => {
//         e <= 2 && console.log(`chó số ${index + 1} có tuổi theo người là ${e * 2} tuổi`);
//         e > 2 && console.log(`chó số ${index + 1} có tuổi theo người là ${16 + (e * 4)} tuổi`)
//     })
//     //2. 
//     console.log('------------------------------');
//     console.log('những chú chó trên 18 tuổi là :');
//     const dog18 = arrDogAge[0].map((e, index) => {
//         e > 2 && (e * 4) + 16 ? console.log(`chó số ${index + 1}`) : ""
//     })
//     console.log('------------------------------');
//     //3. 
//     console.log('Tuổi trung bình các chú chó theo con người là ');
//     const arrDogMan =
//         arrDogAge[0]
//             .filter(e => e > 2)
//             .map(e => e * 4 + 16)
//             .reduce((acc, cur) => acc + cur, 0);

//     console.log((arrDogMan / dog18.length).toFixed(1) + "tuổi");

// }

// calcAverageHumanAge(testData1);


// // Bài 3.4
// const dogs = [
//     { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//     { weight: 8, curFood: 200, owners: ['Matilda'] },
//     { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//     { weight: 32, curFood: 340, owners: ['Michael'] }
// ];

// //1. 

// // mức độ ăn nó nhiều hay ít 
// const dogOfQuantity = (dogs, ownerName) => {
//     const dogOfSarah = dogs.find(e => {
//         return e.owners.find(e => {
//             return e == `${ownerName}`
//         })
//     })

//     const { weight, curFood } = dogOfSarah
//     //weight ** 0.75 * 28

//     //2
//     const level = weight ** 0.75 * 28
//     level >= curFood
//         ? console.log(`Con chó của bà ${ownerName} đớp nhiều hơn cho phép`)
//         : console.log(`Con chó của bà ${ownerName} đớp tiết kiệm quá`);

//     //3
//     // list các chủ của chú cho ăn quá nhiều 
//     const eatALot =
//         dogs.filter(e => e['curFood'] >= e['weight'] ** 0.75 * 28)
//             .map(e => e['owners'])
//             .flat()
//             .join(' and ')
//         + "cho đớp nhiều"

//     // list các chủ cho chó đớp tiết kiệm 
//     const eatALittle =
//         dogs.filter(e => e['curFood'] < e['weight'] ** 0.75 * 28)
//             .map(e => e['owners'])
//             .flat()
//             .join(' and ')
//         + "cho đớp ít "
//     //4
//     const AllOwners = eatALot + " and " + eatALittle;
//     // => Matilda and Sarah and Johncho đớp nhiều and Alice and Bob and Michaelcho đớp ít 

//     //5. 
//     const eatEqualCurFood =
//         dogs.map(e => e.weight**0.75*28 === e.curFood )

//     //6. 
//     const EqualBetwen10  = 
//         dogs.map(e => e.weight**0.75*28 < e.curFood*0.1+ e.curFood && e.weight**0.75*28 > e.weight-e.weight*0.1);
//     //7 
//     const dogHoply = 
//         dogs.filter(e => e.weight**0.75*28 < e.curFood*0.1+ e.curFood && e.weight**0.75*28 > e.weight-e.weight*0.1);
//     //8 
//     for (let i = 0; i < dogs.length; i++) {
//         for (let j = 0; j < dogs.length; j++) {
//             if(dogs[i].curFood < dogs[j].curFood) {
//                 let temp = dogs[i];
//                 dogs[i] = dogs[j];
//                 dogs[j] = temp
//             }
            
//         }
//     }

//     console.log(dogs);
//     console.log(dogHoply)
//     console.log(EqualBetwen10);
//     console.log(eatEqualCurFood);
//     console.log(AllOwners);
//     console.log(eatALot);
//     console.log(eatALittle);
//     console.log(dogOfSarah);
// }

// dogOfQuantity(dogs, 'Sarah')

// int a = 0;

let a = 0;
    
for (let i = 0; i < 100; i++) {
    a = a + i; 
}

console.log(a);














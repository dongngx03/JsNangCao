// Bài 3.2: 
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = (...dog) => {
    //1.
    const july = dog.slice(2, 3);
    //2. 
    const julyAndKante = [...july, ...dog.slice(5, 10)]
    //3.
    julyAndKante.map((e, index) => {
        e >= 3 && console.log(`Chó số ${index + 1} là người lớn và ${e} tuổi`);
        e < 3 && console.log(`chó số ${index + 1} vẫn là chó con`);
    })
    console.log(julyAndKante);
}
//4.
checkDogs(...dogsJulia, ...dogsKate)

// Bài 3.3: 

const testData1 = [5, 2, 4, 1, 15, 8, 3];
const testData2 = [16, 6, 10, 5, 6, 1, 4];


const calcAverageHumanAge = (...dogAge) => {
    const arrDogAge = [...dogAge]
    //1. 
    arrDogAge[0].map((e, index) => {
        e <= 2 && console.log(`chó số ${index + 1} có tuổi theo người là ${e * 2} tuổi`);
        e > 2 && console.log(`chó số ${index + 1} có tuổi theo người là ${16 + (e * 4)} tuổi`)
    })
    //2. 
    console.log('------------------------------');
    console.log('những chú chó trên 18 tuổi là :');
    const dog18 =  arrDogAge[0].map((e, index) => {
        e > 2 && (e * 4) + 16 ? console.log(`chó số ${index + 1}`) : ""
    })
    console.log('------------------------------');
    //3. 
    console.log('Tuổi trung bình các chú chó theo con người là ');
    const arrDogMan =
        arrDogAge[0]
            .filter(e => e > 2)
            .map(e => e * 4 + 16)
            .reduce((acc, cur) => acc + cur, 0);

    console.log((arrDogMan / dog18.length).toFixed(1) + "tuổi");



}

calcAverageHumanAge(testData1);

// Bài 3.4


// Lab 1
// 1 -2 Tạo mảng cho cầu thủ 
const Player1 = [
  {
    name: "kevin",
    position: "cm",
    number: 11
  },
  {
    name: "ederson",
    position: "gk",
    number: 1
  },
  {
    name: "rubens",
    position: "cb",
    number: 3
  },
  {
    name: "akanji",
    position: "cb",
    number: 5
  },
  {
    name: "cancelo",
    position: "rb",
    number: 7
  },
  {
    name: "kyle",
    position: "lb",
    number: 4
  },
  {
    name: "folden",
    position: "lm",
    number: 47
  },
  {
    name: "sillva",
    position: "rm",
    number: 8
  },
  {
    name: "halland",
    position: "st",
    number: 10
  },
  {
    name: "jack",
    position: "cm",
    number: 22
  },
  {
    name: "doku",
    position: "cf",
    number: 11
  },
]

// team 2
const Player2 = [
  {
    name: "onana",
    position: "gk",
    number: 1
  },
  {
    name: "varance",
    position: "cb",
    number: 5
  },
  {
    name: "magire",
    position: "cb",
    number: 4
  },
  {
    name: "saka",
    position: "rb",
    number: 3
  },
  {
    name: "shaw",
    position: "lb",
    number: 11
  },
  {
    name: "bruno",
    position: "cm",
    number: 8
  },
  {
    name: "casemilo",
    position: "cdm",
    number: 6
  },
  {
    name: "mount",
    position: "cm",
    number: 7
  },
  {
    name: "ganacho",
    position: "rf",
    number: 20
  },
  {
    name: "rafoces",
    position: "st",
    number: 9
  },
  {
    name: "hollund",
    position: "st",
    number: 99
  },
]

//3. 
const allPlayers = [...Player1, ...Player2];
// console.log(allPlayers);

// 4.
const players1Final = [
  ...Player1,
  {
    name: 'thiago',
    position: 'cdm',
    number: '6'
  },
  {
    name: 'cutinho',
    position: 'cm',
    number: '10'
  },
  {
    name: 'perisic',
    position: 'rf',
    number: '8'
  },

]
// console.log(players1Final);

// 5.
const game = {
  odds : {
    team1 : 2.2,
    draw: 3,
    team2: 2.8
  }
}

//6. 
const goalScorers = [
  {
    name: 'thiago',
    position: 'cdm',
    number: '6'
  },
  {
    name: 'cutinho',
    position: 'cm',
    number: '10'
  },
  {
    name: 'perisic',
    position: 'rf',
    number: '8'
  },
]

const printGoals = (...goalScorers) => {
  console.log("các cầu thủ gì bàn là ");

  goalScorers.map(e => {
    console.log(`Cầu thủ : ${e.name} số ${e.number} đã ghi bàn`);
  })
}

printGoals(...goalScorers)

// 7.



const teamWin = {
  team1 : game.odds.team1,
  team2: game.odds.team2
}

const min = Math.min(...Object.values(teamWin));
console.log(min);
const win = Object.keys(teamWin).filter(e => teamWin[e] === min)

console.log(win);



// 1.2
// Đối tượng chứa thông tin về trận đấu
const game1 = {
  teams: ["Bayern Munich", "Borrussia Dortmund"],
  scored: ["Lewandowski", "Gnarby", "Hummels", "Lewandowski"],
  odds: {
      team1: 1.33,
      draw: 3.25,
      team2: 6.5
  }
};

// 1. Lặp mảng scored array và in ra cầu thủ cùng với số bàn thắng đã ghi
console.log("Danh sách cầu thủ và số bàn thắng:");
game1.scored.forEach(function(player, index) {
  console.log(`Goal ${index + 1}: ${player}`);
});

// 2. Sử dụng vòng lặp để tính tỉ lệ kết quả trận đấu và in ra console
var totalOdds = 0;
Object.values(game1.odds).forEach(odds => totalOdds += 1 / odds);
var averageOdds = totalOdds / Object.keys(game1.odds).length;

console.log(`Tỉ lệ kết quả trận đấu: ${averageOdds.toFixed(2)}`);

// 3. In ra tỉ lệ cược theo định dạng yêu cầu
console.log(`Tỉ lệ thắng của ${game1.teams[0]}: ${game1.odds.team1}`);
console.log(`Tỉ lệ hòa: ${game1.odds.draw}`);
console.log(`Tỉ lệ thắng của ${game1.teams[1]}: ${game1.odds.team2}`);

// Thêm: Tạo đối tượng 'scorers' chứa thông tin về cầu thủ và số bàn thắng
var scorers = {};
game1.scored.forEach(function(player) {
  scorers[player] = (scorers[player] || 0) + 1;
});

console.log("Thông tin về số bàn thắng của cầu thủ:");
console.log(scorers);






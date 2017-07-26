'use strict'

let roster = [
  ['Number', 'Name', 'Position', 'Points per Game'],
  [12, 'Joe Schmo', 'Center', [14, 32, 7, 0, 23] ],
  [9, 'Ms. Buckets', 'Point Guard', [19, 0, 11, 22, 0] ],
  [31, 'Harvey Kay', 'Shooting Guard', [0, 30, 16, 0, 25] ],
  [7, 'Sally Talls', 'Power Forward ', [18, 29, 26, 31, 19] ],
  [22, 'MK DiBoux ', 'Small Forward ', [11, 0, 23, 17, 0] ]
]
let obj = {}

// [[roster[0][0], roster[1][0]], [roster[0][1], roster[1][1]],...

function convert_roster_format (nestedArray) {
  // your convert code here

  let array = []
  for (var i = 1; i < nestedArray.length; i++) {
    let obj = {}
    for (var j = 0; j < nestedArray[i].length; j++) {
      obj[nestedArray[0][j]] = nestedArray[i][j]
      // obj.nestedArray[0][j] = nestedArray[i][j]
      //console.log(obj);
    }
    array.push(obj)
     //console.log(obj);
     //console.log(array);
  }
// console.log(obj);
// console.log(array);
return array
}

// console.log(convert_roster_format(roster));


let object_roster = convert_roster_format(roster)
console.log("");
console.log('--isi objek dari array index ke dua --');
console.log(object_roster[2])// => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }
console.log("");

console.log("--mengecek isi nama dari objek roster array ke nol--");
console.log(object_roster[0]['Name'] == 'Joe Schmo') // outputs true
console.log("");

console.log("");
console.log('--isi objek dari array index ke tiga --');
console.log(object_roster[3])
console.log("");

console.log("--mengecek isi nama dari objek roster array ke nol--");
console.log("Number >>",object_roster[0]['Number']) // outputs true
console.log("Name >>",object_roster[0]['Name'])
console.log("Position >>",object_roster[0]['Position'])
console.log("Points per game >>",object_roster[0]['Points per Game'])
console.log("");


//console.log(roster[2].Name);







//
// module.exports = {
//   convert_roster_format
// }



//
// let obj = {}
//
// obj.nama = 'ari'
// obj.phase = 1
// obj.tinggal = 'bandung'
// obj.masa = "masa"
// console.log(obj);

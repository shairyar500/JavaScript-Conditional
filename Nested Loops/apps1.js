//Pose you’re given an array [ [1, 2], [3, 4], [5, 6] ]. Print all the members of this two-dimensional array using for loop and while nested loops.

//For Loop

let arr =  [ [1, 2], [3, 4], [5, 6] ];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < 2; j++) {
      console.log(arr[i][j]);
    }
  }

//While Loop
       
let arr =  [ [1, 2], [3, 4], [5, 6] ];
let i = 0;
while (i < arr.length) {
  console.log([i]);
  i++;
  let j = 0;
  while (j < 3) {
    console.log(arr[j]);
    j++;
  }
}

//Note: please comment out one array so you can print another loop on node.
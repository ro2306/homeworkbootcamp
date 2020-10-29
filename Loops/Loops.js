// "loops"
// Exercise 1

const names =  ["Roba", "Yazan", "Hiba", "Laya"]
const age =  [ 39, 17, 11 , 1 ]
       for(let I in names) {
  console.log( names[I]  +  "is"  +  age  [I]  +  "years old")  
}

// Exercise 2
const numbers = [12,3,56,78,84,124,14,45,65]
let sum = 0;
	
for(let i of numbers) {
  sum += i
}
console.log(sum)

 // Exercise 3

 let A = (sum/numbers.length)

console.log(A)

// Exercise 4
const nums = []
	
for(let i = 0; i <=99 ; i++){
  nums.push(i+1)
}
	
console.log(nums)
// Exercise 5
let n = nums 
for(let n of nums) {
    if((n % 2) != 0){
        console.log(n)
    }
}

// Exercise 6
const nu =[773, 414, 213, 374, 434, 700, 506, 495, 
    852, 585, 271,
     198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632,
      715, 503, 538, 289, 596, 381, 817, 
    280, 968, 877, 431, 146, 491, 724, 83,
     841, 174, 21, 460, 25, 785, 539, 291, 404, 
     903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890,
      394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732,
       917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802,
        866, 817, 848, 227, 349,
        243, 837, 21, 954, 146, 11]


let g = nu 
for(let g in nu){
    if(nu[g] == 709){
      console.log(g)
    }
  }


// Exercise 7
const names1 = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []


for(let i in names1) {
    people.push({name: names1[i], age: ages[i]})
  }
  
  console.log(people)
// Exercise 8
// Exercise 9

  const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]
  for(let i in posts) {
    if (posts[i].id == 2){
      posts.splice(i, 1)
    }
  }
      
  console.log(posts)
  
 
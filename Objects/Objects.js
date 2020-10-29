// Exercise 1


let p1 = {
    name: "Maya",
    age: 23 ,
    city:"haifa"
  }


  
let p2 = {
    name: "Dima",
    age: 24 ,
    city:"tel aviv"
  }
  if (p1.age==p2.age && p1.city==p2.city)
  {
   
   console.log("Jill wanted to date Robert")}
   else {
       console.log("Jill wanted to date Robert, but couldn't")
}

// Exercise 2

let myList = [{name:"Diana",age :30},{name:"Hiba",age :18}]
myList[0].age ++
myList.splice(1,1);
console.log(myList);

//Exercise 3
let myList1 = [{name:"Diana",age :30},{name:"Hiba",age :18}]

myList.push(...list2)
	
console.log(myList)

//Exercise 4
const library = {
  books: [
  {title: "hgjghfd", author: " czxcf"}, 
 {title: "czscczc", author: "sdsdfdg"}, 
  {title: "xscdvf", author: "dfdfdgffd"}
]
}
 
myList.push(...library.books)
 
console.log(myList)

//Exercise 5

const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
    
  }
  console.log(reservation)
 const Bob = false 
 const Ted =  true
  console.log(reservationse)
  let name = prompt('Please enter the name for your reservation');
  
  if(reservations[name] && !reservations[name].claimed) {
    alert("Welcome in, " + name)
  } else if (reservations[name] && reservations[name].claimed){
    alert("Hmm, someone already claimed this reservation")
  } else if (!reservations[name]) {
    alert("You have no reservation")
  }	
    console.log(reservations)
    





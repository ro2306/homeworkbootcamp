
//   "Functions"
//Exercise 1
const calcAge = function(x, y){
    return (x - y)
  }
  
  const sum = calcAge(2017, 1989)
  console.log(sum) 

  //Exercise 2

  const Age = function(year2,year1){
    age1=year2-year1
   return age1
    
    
     }
  const ages = calcAge(2018, 2015)
     console.log("You are either"+ (ages) +" or "+(ages-1) )

      //Exercise 3
      const isEven = function(num){
        if (num%2==0)
        return true
        else return false}

        const number=isEven(10)
        console.log(number)

       //Exercise 4

    const printEven = function(arr){
            for (let i=0; i<arr.length; i++) {

           let  tf=isEven(arr[i])
             if (tf==false)
             console.log(arr[i])


           }
        }
           const numbers = [1, 5, 3,10,15]
           const nums = printEven(numbers)
           
            //Exercise 5
           
             check = function (array, num) {
                for(let number of array) {
                  if(number === num) {
                    return true
                  }
             } 
                return false
              }
                 
              const n = [20,30, 50,10]
                 
              console.log(check(n, 50))
            
          
    


          

    

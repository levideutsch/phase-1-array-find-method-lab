
  function superbowlWin(arrayOfObjects) {
    //  const found = arrayOfObjects.find(findWin) 
    //  function findWin(object) {
    //     if (object.result === "W") {
    //         return object
    //     }

    //  }
     const found2 = arrayOfObjects.find(object => object.result === "W") 
     console.log(found2)
    // return (!!found ? found.year : undefined)
    if (found2)  {
       return found2.year
    } else {
        return undefined
    }
}

  
// function isWin(game) {
//   return game.result === "W"
    

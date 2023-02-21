//Arrays - collections of a similar thing, like a list of classmates or list of dishes
    //separated by commas, surrounded by square brackets []
    const flowers = ["Tulip", "Rose", "Daffodil", "Daisy"]

    //QUESTION: Why aren'y semi colins needed at the end of arrays? 
        //You can assign an index to an array which is a number for each item based on list order
        //index counting begins at 0 with this format: arrayVariable[index number]
    
    const Tulip = flowers[0]
    console.log(Tulip);
    
    const yellowFruit = "Banana"
    const orangeFruit = "Orange"
    const redFruit = "Apple"
    const greenFruit = "Watermelon"
    const blueFruit = "Blueberry"
    
    const fruits = ["Banana", "Orange", "Apple", "Watermelon", "Blueberry"]
    
    console.log(fruits)
    
    const dishes = [
        "Dinner plate", "Water glass", "Salad bowl",
        "Dinner plate", "Wine glass", "Spoon",
        "Spoon", "Fork", "Salad bowl", "Whiskey glass",
        "Fork", "Spoon", "Fork"]
    
    console.log(dishes)
    
    const waterGlass = dishes[1]
    const wineGlass = dishes[4]
    const whiskeyGlass = dishes[9]
    // watch for spaces when declaring variables!
    
    console.log("I am cleaning the following glasses:")
    
    // Put each variable in one of the parenthesis below
    console.log(waterGlass)
    console.log(wineGlass)
    console.log(whiskeyGlass)
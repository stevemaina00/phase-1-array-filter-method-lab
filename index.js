// Code your solution here

function findMatching(drivers= ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'], hometown=['Pittsburgh', 'New York', 'Cleveland', 'Los Angeles', 'Tampa Bay']) {
    return drivers.filter(function (driver) { return driver.toLowerCase() === hometown.toLowerCase() })
  }
 
  function fuzzyMatch(drivers= ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'], hometown=['Pittsburgh', 'New York', 'Cleveland', 'Los Angeles', 'Tampa Bay']) {
    return drivers.filter(function (driver) { return driver.toLowerCase().substring(0, hometown.length) === hometown.toLowerCase() })
  }
 
  function matchName(drivers= ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'], match) {
    return drivers.filter(function (driver) { return driver.name === match })
  }
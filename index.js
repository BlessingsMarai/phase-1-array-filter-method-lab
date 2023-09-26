// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(driversArray,name){
        return driversArray.filter(driver => driver.toLowerCase() === name.toLowerCase());
    }
    
    function fuzzyMatch(driversArray, letters) {
        return driversArray.filter(driver => driver.startsWith(letters));
      }

      
      function matchName(driverObjects, name) {
        return driverObjects.filter(driver => driver.name === name);
      }
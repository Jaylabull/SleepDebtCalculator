 /*  if/else statement alternative 
 if (day === 'monday'){
   return 8;
 } else if (day === 'tuesday'){
   return 7;
 } else if (day === 'wednesday'){
   return 6;
 } else if (day === 'thursday'){
   return 5; 
 } else if (day === 'friday'){
   return 4;
 } else if (day === 'saturday'){
   return 3;
 } else if (day === 'sunday'){
   return 2;
 } else{
console.log ('Error!');
 }*/
 const getSleepHours = day => {
    switch (day){
      case 'monday':
        return 8
        break;
      case 'tuesday':
        return 7
        break;
      case 'wednesday':
        return 8
        break;  
      case 'thursday':
        return 5
        break; 
      case 'friday':
        return 8
        break;
     case 'saturday':
        return 7
        break;
     case 'sunday':
        return 8
        break;
    default:
       return "Error!"; 
    }
  }; 
  
  const getActualSleepHours = () =>{
      return getSleepHours('monday') + 
    getSleepHours('tuesday') + 
    getSleepHours('wednesday') + 
    getSleepHours('thursday') +
    getSleepHours('friday') + 
    getSleepHours('saturday') + 
    getSleepHours('sunday');
  
  }; 
  /* Implicit return: 
  const getActualSleepHours = () =>
    getSleepHours('monday') + 
    getSleepHours('tuesday') + 
    getSleepHours('wednesday') + 
    getSleepHours('thursday') +
    getSleepHours('friday') + 
    getSleepHours('saturday') + 
    getSleepHours('sunday');
  
  *Doesn't include curly brackets.*
   */
  
  const getIdealSleepHours = () => {
    const idealHours = 8 
      return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
  
  if (actualSleepHours === idealSleepHours){
    console.log('You got the perfect amount of sleep');
  } 
  else if (actualSleepHours > idealSleepHours){
    console.log('You got' + (idealSleepHours - actualSleepHours) + ' hour(s) more than you need this week');
  } 
  else if (actualSleepHours < idealSleepHours){
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less than you needed this week. Get more rest.');
  }
  else{
    console.log('Error!')
  }
  };
  
  calculateSleepDebt();
  
  
  
  
  
  
  
  
  
  
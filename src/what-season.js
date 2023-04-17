const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let cur_date = new Date(date)
  if(date != ''){
    if(cur_date.getFullYear() > 0 && cur_date.getMonth() >= 0 && cur_date.getMonth() < 12 && cur_date.getDate() > 0 &&  cur_date.getDate() <= new Date(cur_date.getFullYear(), cur_date.getMonth() + 1, 0).getDate()){
      if(cur_date.getMonth() == 11 || cur_date.getMonth() == 12 || cur_date.getMonth() == 1 || cur_date.getMonth() == 0){
        return ('winter')
      }
      if(cur_date.getMonth() >= 2 && cur_date.getMonth() <= 4){
        return ('spring')
      }
      if(cur_date.getMonth() >= 5 && cur_date.getMonth() <= 7){
        return ('summer')
      }
      if(cur_date.getMonth() >= 8 && cur_date.getMonth() <= 10){
        return ('autumn')
      }
    }
    else return('Unable to determine the time of year!')
  }
  else {
    return("Invalid date!")
  }
  
}

module.exports = {
  getSeason
};

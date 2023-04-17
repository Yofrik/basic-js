const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let result = ''
  let new_arr = []
  for(let i=0; i<members.length; i++){
    if(typeof(members[i]) == 'string'){
    let prew_res = members[i].replace(/ /g,'')
    new_arr.push(prew_res)
    }
  }
  let res = new_arr.sort()
  for(let x=0; x<res.length; x++){
    result = result.concat(res[x][0])
  }
  result = result.toUpperCase()
  return result
}

module.exports = {
  createDreamTeam
};

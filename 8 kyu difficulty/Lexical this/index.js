// Starting code
let Person = function(){
  let person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) {this._friends = f}
  }
  return person;
}

module.exports = { Person }


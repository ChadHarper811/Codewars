const { Person } = require("./index")

test("fillFriends method should add people to _friends array, tests _friends array is same as input array", () => {
    let people = [['bob','john'],['bob','john','dave'],[],['bob','john','dave','matt','alex']]

    for(let i =0; i<4; i++){
        let person = Person()
        person.fillFriends(people[i])
        expect(person._friends).toBe(people[i]);
    };
    
});
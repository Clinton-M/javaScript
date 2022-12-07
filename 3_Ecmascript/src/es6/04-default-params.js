function newUser(name,age,country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name,age,country);
}

newUser();
newUser('clinton',23,'CO');

function newAdmin(name = 'clinton',age = 32,country = 'MX'){
    console.log(`name: ${name}, age: ${age}, country: ${country}`);
}

newAdmin();
newAdmin('oscar',23,'CO');



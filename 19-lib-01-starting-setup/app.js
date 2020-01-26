const customers = ["Max", "Manuel", "Anna"];
const activeCustomers = ["Max", "Manuel"];

const inactiveCustomers = _.difference(customers, activeCustomers);

console.log(inactiveCustomers);

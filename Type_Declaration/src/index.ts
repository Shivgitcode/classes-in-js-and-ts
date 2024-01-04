// console.log("shivansh aggarwal");
import axios from "axios";
import _ from "lodash";

// _.sample([45,34564,4523,6434])

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

axios
  .get<User>("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => {
    // console.log(res.data);
    const { data } = res;
    // data
    // data.company.catchPhrase
    printUser(data);
  })
  .catch((e) => {
    console.log("Error!", e);
  });

function printUser(user: User) {
  console.log(user.name);
  console.log(user.email);
  console.log(user.phone);
}

// console.log("shivansh");
// console.log("shivansh");

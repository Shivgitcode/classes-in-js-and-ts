"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log("shivansh aggarwal");
const axios_1 = __importDefault(require("axios"));
axios_1.default
    .get("https://jsonplaceholder.typicode.com/users/1")
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
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
}
// console.log("shivansh");
// console.log("shivansh");

var _a;
var RoleEnum;
(function (RoleEnum) {
    RoleEnum["ADMIN"] = "MARIA";
    RoleEnum[RoleEnum["READ_ONLY"] = 3] = "READ_ONLY";
    RoleEnum[RoleEnum["AUTHOR"] = 4] = "AUTHOR";
})(RoleEnum || (RoleEnum = {}));
;
var mySelf = {
    name: "Luigi",
    age: 48,
    hobbies: ["Sports", "Cooking", "Reading"],
    role: [1, "admin"],
    roleEnum: RoleEnum.AUTHOR
};
// console.log(mySelf);
(_a = mySelf.hobbies) === null || _a === void 0 ? void 0 : _a.push("Reading");
mySelf.role = [2, "author"];
// for (const hobby in mySelf.hobbies) {
//     console.log(hobby.toUpperCase());
// }
// console.log("Role: " + mySelf.role);
console.log("RoleEnum: " + mySelf.roleEnum);

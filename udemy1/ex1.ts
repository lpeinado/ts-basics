type Ras = string | number;
type Role = [number, string];

enum RoleEnum { ADMIN="MARIA", READ_ONLY=3, AUTHOR };

type person = {
    name: string;
    age: number;
    hobbies?: string[];
    role?: Role;
    roleEnum?: RoleEnum;
};

const mySelf: person = {
    name: "Luigi",
    age: 48,
    hobbies: ["Sports", "Cooking", "Reading"],
    role: [1, "admin"],
    roleEnum: RoleEnum.AUTHOR
}

// console.log(mySelf);

mySelf.hobbies?.push("Reading");
mySelf.role = [2, "author"];

// for (const hobby in mySelf.hobbies) {
//     console.log(hobby.toUpperCase());
// }

// console.log("Role: " + mySelf.role);
console.log("RoleEnum: " + mySelf.roleEnum);
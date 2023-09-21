// function with parameter and return type
function addNumber(a: number,b: number): number{
    return a + b;
}
export default addNumber;

// function with default parameter
export const addString = (a: string, b: string = ""): string => {
    return a + b;
}

// function with union type parameter
export const format = (title: string, param: string | number): string => {
    return `${title} ${param}`;
}
// function with promise return type
export const fetchData = (): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data is here");
        }, 2000);
    });
}

export const introduceYourself = (user: string, ...names: string[]): string => {
    return `My name is ${user} and wanna say hello to ${names.join(" ")}`;
}

type FullName = {
    firstName:string,
    lastName: string
}
export function getName({firstName, lastName}: FullName): string {
    return `${firstName} ${lastName}`;
}
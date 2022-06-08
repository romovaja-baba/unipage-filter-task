import { arrayFilter } from './app.js';

export let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

const expectedCourses1 = [
    { name: 'Courses in England', prices: [0, 100] },
    { name: 'Courses in Italy', prices: [100, 200] }
];
const expectedCourses2 = [
    { name: 'Courses in Italy', prices: [100, 200] }
];
const expectedCourses3 = [
    { name: 'Courses in Germany', prices: [500, null] },
    { name: 'Courses in USA', prices: [200, null] }
];
export const isEqual = (actual, expected) => {
    let result = true;
    expected.forEach((item, index) => {
        if (item.name !== actual[index].name) {
            result = false;
        };
    });
    return result;
}

console.log(isEqual(arrayFilter(courses, requiredRange1), expectedCourses1));
console.log(isEqual(arrayFilter(courses, requiredRange2), expectedCourses2));
console.log(isEqual(arrayFilter(courses, requiredRange3), expectedCourses3));

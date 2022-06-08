export const compareCourses = (courses) => {
    // return courses.sort((a, b) => (a.prices[0]) - (b.prices[0]))
    return courses.sort((a, b) => {
        if (a.prices[0] < b.prices[0] || a.prices[0] === null) return -1;
        if (a.prices[0] > b.prices[0] || b.prices[0] === null) return 1;
        return 0;
    })
};
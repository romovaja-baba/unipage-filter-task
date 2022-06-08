export const compareCourses = (courses) => {
    return courses.sort((a, b) => a.prices[0] - b.prices[0])
};
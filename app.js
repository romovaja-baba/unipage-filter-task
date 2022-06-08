const fitsLowPrice = (minRange, itemMin) => {
    return (minRange || 0) <= (itemMin || 0);
};

const fitsHighPrice = (maxRange, itemMax) => {
    if (maxRange === null) return true;
    if (itemMax === null) return false;
    return maxRange >= itemMax;
};

export const arrayFilter = (courses, range) => {
    let result = courses.filter(item => {
        return fitsHighPrice(range[1], item.prices[1]) && fitsLowPrice(range[0], item.prices[0]);
    });
    return result;
};
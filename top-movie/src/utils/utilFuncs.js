export const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const loadFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

export const columnSizeArray = (arr, columnSize) => {
    const resizeArray = [];
    for (let i = 0; i < arr.length; i += columnSize) {
        resizeArray.push(arr.slice(i, i + columnSize));
    }
    return resizeArray;
};


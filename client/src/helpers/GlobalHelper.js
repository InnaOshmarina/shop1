export const getLinkTemplate = (maskLink, row) => {
    const newArr = maskLink.split('/');
    let newString = '';
    newArr.forEach((item) => {
        if (item[0] === ':') {
            const currentItem = item.substr(1);
            const itemFromObject = row[currentItem];
            newString += itemFromObject + '/';
        } else {
            newString +=item + '/';
        }

    });

    return newString;
};
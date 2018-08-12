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

export const getBrowserLang = () => {
    let lang = null;
    const browserLang = navigator.language;

    if (browserLang.length > 0) {
        lang = browserLang.split('-')[0];
    }

    return lang;
};
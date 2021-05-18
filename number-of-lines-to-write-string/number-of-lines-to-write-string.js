/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
const numberOfLines = (widths, S) => {
    let res = 1;
    let cur = 0;
    for (const c of S) {
        let width = widths[c.charCodeAt() - 'a'.charCodeAt()];
        if (cur + width > 100) {
            res++;
            cur = width;
        } else {
            cur += width;
        }
    }
    return [res, cur];
};
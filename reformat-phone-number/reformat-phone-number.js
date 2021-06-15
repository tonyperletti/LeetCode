/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
    
    const t = number.replace(/[\-|\s]+/g, '')
    const ts = t.split('');
    let str = ''
    let start = true;
    while (ts.length){
        if (!start)
            str = str + '-';
        if (ts.length == 4)         
            return (str + `${ts[0]}${ts[1]}-${ts[2]}${ts[3]}`)
        else if (ts.length <= 3)
            return (str + ts.join('')); 
        str += ts.slice(0, 3).join('');
        ts.splice(0, 3);
        start = false;
    }
    return (str);
};
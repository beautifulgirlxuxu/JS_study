const add = (a, b) => {
    if (typeof a === 'number' &&
        typeof b === 'number') {
        return a + b;
    }
    //   throw new Error('一定要是数字相加');
    // 容错性 
    return NaN;
};

// console.log(isNaN(add('fenfen', 'zhuxi')));

module.exports = { add }
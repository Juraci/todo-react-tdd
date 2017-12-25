const _pipe = (func1, func2) => (...args) => func2(func1(...args));

export const pipe = (...funcs) => funcs.reduce(_pipe);

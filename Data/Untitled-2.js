const func = (inputString) => {

    m = {}

    for (let i = 0; i < inputString.length; ++i) {

        c = inputString[i];

        m[c] = i;

    }

    return m;

};
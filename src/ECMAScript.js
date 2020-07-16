import React from 'react';

function ECMAScript()
{
    const target = { a: 1, b: 2 };
    const source = { b: 4, c: 5 };
    
    const objetAssign = () => { return Object.assign(target, source) };
    return objetAssign();
}

export default ECMAScript;
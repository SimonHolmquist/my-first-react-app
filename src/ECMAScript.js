function ECMAScript()
{
    const target = { a: 5, b: 2, c:7, d:1};
    const source = { c:2, b: 4, d: 5, a:3 };
    
    const objetAssign = () => { return Object.assign(target, source) };
    return objetAssign();
}

export default ECMAScript;
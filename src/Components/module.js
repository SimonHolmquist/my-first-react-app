//modules

const hello = () => {
    return 'hello !';
}

const bye = 'bye!';

function* hello_world(){
    if(true) yield 'hello, ';
    if(true) yield 'world';
}

const generator_hello_world = hello_world();

export {hello, bye, generator_hello_world};
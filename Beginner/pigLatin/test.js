const pigLatin = require('./index-START')

test('pigLatin is a function', () => {
    expect(typeof pigLatin).toEqual('function');
});

test('pig latin equivalent of pig', () => {
    expect(pigLatin('pig')).toEqual('igpay');
});

test('pig latin equivalent of glove', () => {
    expect(pigLatin('glove')).toEqual('oveglay');
});

test('reverses a string containing mixed case characters', () => {
    expect(pigLatin('explain')).toEqual('explainway');
});
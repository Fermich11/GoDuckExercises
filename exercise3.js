import { simpsonsWiki } from './src/services.js';
import assert from 'assert';

const getMinValue = async () => {
    const body = await simpsonsWiki(() => null);
    const wiki = JSON.parse(body);
    return wiki.meta.src_options.min_abstract_length;
}

describe('Third Challenge...', () => {
    it('min_abstract_length should be type number',
        async () => {
            const minValue = await getMinValue();
            assert.equal(typeof minValue, 'number')
        });
    it('min_abstract_length type should not equal null',
        async () => {
            const minValue = await getMinValue();
            assert.notEqual(typeof minValue, 'null')
        });
});

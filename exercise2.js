import { simpsonsWiki } from './src/services.js';

console.log('Second Challenge...');

const printNames = (params) => {
    const wiki = JSON.parse(params.body);
    wiki.RelatedTopics.forEach(charcter => {
        console.log(charcter.Text.split(' - ')[0])
    })
}
simpsonsWiki(printNames);
import { simpsonsWiki } from './src/services.js';

console.log('First Challenge...');

const printUrls = (params) => {
    const wiki = JSON.parse(params.body);
    wiki.RelatedTopics.forEach(charcter => {
        console.log(charcter.FirstURL)
    })
}
simpsonsWiki(printUrls);
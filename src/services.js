import request from 'request-promise'
import assert from 'assert';

export const simpsonsWiki = (callback) => request('https://api.duckduckgo.com/?q=simpsons%20characters&format=json&pretty=1',
    (error, response, body) => callback({ error, response, body }));
import fetch from 'unfetch';

export default (url) => fetch(url).then((r) => r.json());

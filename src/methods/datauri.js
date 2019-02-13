module.exports = (imageID) => {
    return new Promise((resolve, reject) => {

        if (!imageID) throw new TypeError('No imageID provided.');

        const https = require('https');

        https.get(`https://kim.kieranhowland.co.uk/api/datauri/${imageID}`, (res) => {

            // Errors
            const { statusCode } = res;
            if (statusCode != 200 && statusCode != 404) {
                // Consume res data
                res.resume();
                reject(new Error(`Request Failed.\n Status Code: ${statusCode}`).message);
            }


            let raw = '';
            res.on('data', chunk => raw += chunk);
            res.on('end', () => {
                try {
                    let parsed = JSON.parse(raw);
                    resolve(parsed);
                } catch (err) {
                    reject(err);
                }
            })

        }).on('error', err => {
            reject(err);
        })

    })
}
module.exports = (image) => {
    return new Promise((resolve, reject) => {

        if (!image) throw new TypeError('No image provided.');

        const https = require('https'),
              fs = require('fs');

        const options = {
            method: 'POST'
        }

        let request = https.request(`https://kim.kieranhowland.co.uk/api/upload`, options, (res) => {

            // // Errors
            // const { statusCode } = res;
            // if (statusCode != 200 && statusCode != 404) {
            //     // Consume res data
            //     res.resume();
            //     reject(new Error(`Request Failed.\n Status Code: ${statusCode}`).message);
            // }

            let raw = '';
            res.on('data', chunk => raw += chunk);
            res.on('end', () => {
                try {
                    // let parsed = JSON.parse(raw);
                    resolve(raw);
                } catch (err) {
                    reject(err);
                }
            })

        }).on('error', err => {
            reject(err);
        })

        let imageFile = fs.createReadStream(image);
        request.pipe(imageFile);

    })
}
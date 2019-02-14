module.exports = (imageID) => {
    return new Promise((resolve, reject) => {

        if (!imageID) throw new TypeError('No imageID provided.');

        const request = require('request'),
        options = {
            method: "GET",
            url: "https://kim.kieranhowland.co.uk/api/datauri/" + imageID,
            port: 443
        };

        request(options, (err, res, body) => {
            if (err) throw (err);
            
            try {
                let parsed = JSON.parse(body);
                resolve(parsed);
            } catch(error) {
                reject(err);
            }
        })

    })
}
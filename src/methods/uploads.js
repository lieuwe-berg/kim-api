module.exports = () => {
    return new Promise((resolve, reject) => {

        const request = require('request'),
        options = {
            method: "GET",
            url: "https://kim.kieranhowland.co.uk/api/uploads/",
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
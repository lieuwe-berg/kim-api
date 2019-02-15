module.exports = () => {
    return new Promise((resolve, reject) => {

        const request = require('request'),
        options = {
            method: "GET",
            url: "https://kim.kieranhowland.co.uk/api/uploads/",
            port: 443
        };

        request(options, (err, res, body) => {
            if (err) throw new Error (err);
            
            try {
                let parsed = JSON.parse(body);

                if (parsed.status != 200) throw new Error (`kim-api error: recieved status code ${parsed.status} - ${parsed.code}`);

                resolve(parsed);
            } catch(error) {
                throw new Error (err);
            }
        })

    })
}
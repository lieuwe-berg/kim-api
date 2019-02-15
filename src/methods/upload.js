module.exports = (image) => {
    return new Promise((resolve, reject) => {

        if (!image) throw new TypeError ('No image provided.');

        const request = require('request'),
            fs = require('fs'),
            options = {
                method: "POST",
                url: "https://kim.kieranhowland.co.uk/api/upload",
                port: 443,
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                formData : {
                    "image": fs.createReadStream(image)
                }
            };

        request(options, (err, res, body) => {
            if (err) throw new Error (err);
            
            try {
                let parsed = JSON.parse(body);

                if (parsed.status != 200) throw new Error (`kim-api error: recieved status code ${parsed.status} - ${parsed.code}`);

                parsed.url = `https://kim.kieranhowland.co.uk/uploads/${parsed.data.image_id}/`

                resolve(parsed);
            } catch(error) {
                throw new Error (error);
            }
        });

    })
}
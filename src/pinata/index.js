const axios = require('axios');
const FormData = require('form-data');

const pinFileToIPFS = (file, description, pinataApiKey, pinataSecretApiKey) => {

    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

    let data = new FormData();
    data.append('file', file);

    const metadata = JSON.stringify({
        name: file.name,
        keyvalues: {
            name: file.name,
            description: description
        }
    });
    data.append('pinataMetadata', metadata);

    return axios
        .post(url, data, {
            maxBodyLength: 'Infinity', //this is needed to prevent axios from erroring out with large files
            headers: {
                'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                pinata_api_key: pinataApiKey,
                pinata_secret_api_key: pinataSecretApiKey
            }
        })
        .then(function (response) {
            console.log('Uploaded', response);
        })
        .catch(function (error) {
            console.log('Error', error);
        });
};

module.exports = { pinFileToIPFS };
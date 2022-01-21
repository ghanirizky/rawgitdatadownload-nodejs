const axios = require('axios');
const fs = require("fs");
const {PATH_FILE, RAW_DATA} = require('./config')


createFile = async(file_name, data) => {
    const create = await fs.writeFile (`${PATH_FILE}/${file_name}`, data, function(err) {
        if (err) {
            console.log(`${file_name} failed...`);
            return false;
        }
        console.log(`${file_name} created...`);
        return true
        }
    );
    return create
}

getData = () => {
    let i = 1
    console.log(`Number of file downloaded : ${RAW_DATA.length}`);
    console.log(`File Path : ${PATH_FILE}`);
    console.log("============================================================");

    RAW_DATA.forEach(async(item) => {
        const config = {
            method: 'GET',
            url: item.url,
            headers: {}
        };
        console.log(`${i++}. Fetching ${item.file_name}...`);
        const data = await axios(config)
        await createFile(item.file_name, data.data)
    })    
    console.log("============================================================");
}

getData()
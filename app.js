const axios = require('axios');
const fs = require("fs");
const PATH_FILE = "E:/BINA NUSANTARA/SKRIPSI/DATASET"
const arr = [
    {
        file_name: "time_series_covid19_confirmed_global.csv",
        url : "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv"
    },
    {
        file_name: "time_series_covid19_deaths_global.csv",
        url : "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv"
    },
    {
        file_name: "time_series_covid19_recovered_global.csv",
        url : "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv"
    },
    {
        file_name: "time_series_covid19_vaccine_global.csv",
        url : "https://raw.githubusercontent.com/govex/COVID-19/master/data_tables/vaccine_data/global_data/time_series_covid19_vaccine_global.csv"
    }
]

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
    console.log(`Number of file downloaded : ${arr.length}`);
    console.log(`File Path : ${PATH_FILE}`);
    console.log("============================================================");

    arr.forEach(async(item) => {
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
//DIRECTORY OF DOWNLOADED FILE
const PATH_FILE = "E:/BINA NUSANTARA/SKRIPSI/DATASET"

//FILE_NAME can be anything, extension based on downloaded file
const RAW_DATA  = [
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

module.exports = {
    PATH_FILE,
    RAW_DATA
};


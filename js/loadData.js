import GSheetProcessor from '../packaged/g-sheets-api/src/gsheetsprocessor.js';

// const demoSheetURL = 'https://docs.google.com/spreadsheets/d/1BVGV8PplOI6VpCE1kw3HBJ_uSzhOulz26jTgIeiNIoM/edit?usp=sharing';
// const demoSheetId = '1BVGV8PplOI6VpCE1kw3HBJ_uSzhOulz26jTgIeiNIoM';
const demoSheetURL = 'https://docs.google.com/spreadsheets/d/1iuPY-JM_NRFYxYyjtFprcP7ELggQjC-v6PxQfBOsD8U/edit?usp=sharing';
const demoSheetId = '1iuPY-JM_NRFYxYyjtFprcP7ELggQjC-v6PxQfBOsD8U';
const options = {
    sheetId: '1iuPY-JM_NRFYxYyjtFprcP7ELggQjC-v6PxQfBOsD8U',
    returnAllResults: false,
}
GSheetProcessor(options, results => {
    customers = Array.from(results);
    $().ready(function () {
        $('.start').removeAttr('disabled');
    });

});

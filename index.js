// Make sure to set up a .env file with your AIRTABLE_API_KEY

require('dotenv').config();

const fs = require('fs');


var Airtable = require('airtable');
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);


base('Candidates').select({
    // Selecting the first 3 records in All Applicants:
    maxRecords: 1000,
    view: "All Applicants"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function (record) {

        try {
            // The record.get for resume returns an array of all the records
            var url = record.get('Resume')[0]["url"]
            fs.appendFile('out.txt', url + "\n", function (err) {
                if (err) throw err;
                // console.log('Saved!');
            });
        } catch (error) {
            console.log(error)

        }



        // console.log(record.get('Resume')[0]["url"])

    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});

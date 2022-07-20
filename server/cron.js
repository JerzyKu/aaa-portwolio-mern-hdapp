const Stats = require('./models/stats')


var CronJob = require('cron').CronJob;
var job = new CronJob(
	'* 0-59 * * * *',
	function() {

        const stats = Stats.find()

        // const stat = new Stats({open: 11, close: 321})
        // stat.save()

        const t = new Date()
        console.log(`${t.getHours()}:${t.getMinutes()}:${t.getSeconds()} : Open: ${stats}`);
        // console.log(stats);
	},
	null,
	true,
	'America/Los_Angeles'
);
// Use this if the 4th param is default value(false)
// job.start()


// Seconds: 0-59
// Minutes: 0-59
// Hours: 0-23
// Day of Month: 1-31
// Months: 0-11 (Jan-Dec)
// Day of Week: 0-6 (Sun-Sat)

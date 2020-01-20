assert = require('assert');
const WaiterAvailabilityService = require('../services/waiter-availability-service');

const pg = require('pg');
const Pool = pg.Pool;
const connectionString = process.env.DATABASE_URL || 'postgresql://warwick:pg123@localhost:5432/waiteravailability';

let useSSL = false;
let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local) {
    useSSL = true;
}

const pool = new Pool({
    connectionString,
    ssl: useSSL
});

describe('workdayDuplicateChecker function', async () => {
    beforeEach(async () => {
        await pool.query(`delete from shiftsinfo`)
    })
    it('should prevent the selection of a duplicate day from a checkbox', async () => {
        const waiterAvailabilityService = WaiterAvailabilityService(pool);
        await waiterAvailabilityService.workdayDuplicateChecker(7, 1);
        await waiterAvailabilityService.workdayDuplicateChecker(7, 1);
        const result = await waiterAvailabilityService.shiftsInfoReturner()
        assert.equal(result.length, 1);
    });
    it('should prevent the selection of duplicate days from the checkboxes', async () => {
        const waiterAvailabilityService = WaiterAvailabilityService(pool);
        await waiterAvailabilityService.workdayDuplicateChecker([7, 4, 2], 1);
        await waiterAvailabilityService.workdayDuplicateChecker([7, 4, 2], 1);
        // const result = await waiterAvailabilityService.shiftsInfoReturner()
        //assert.equal(result.length, 1);
    });
});

describe('workingDays function', async () => {
    beforeEach(async () => {
        await pool.query(`delete from shiftsinfo`)
    })
    it('should record a day to work on if only one day (checkbox) is selected and the value is captured as a number', async () => {
        const waiterAvailabilityService = WaiterAvailabilityService(pool);
        await waiterAvailabilityService.workdayCapturer(7, 1);
        const result = await waiterAvailabilityService.shiftsInfoReturner()
        assert.equal(result.length, 1)
    });
    it('should record the days to work on if multiple days (checkboxs) are selected and the value is captured as an array', async () => {
        const waiterAvailabilityService = WaiterAvailabilityService(pool);
        await waiterAvailabilityService.workdayCapturer([4, 1, 4], 1);
        const result = await waiterAvailabilityService.shiftsInfoReturner()
        assert.equal(result.length, 3)
    });

});

describe('shiftsInfoReturner function', async () => {
    beforeEach(async () => {
        await pool.query(`delete from shiftsinfo`)
    })
    it('should return all the data from the shiftsInfo table', async () => {
        const waiterAvailabilityService = WaiterAvailabilityService(pool);
        await waiterAvailabilityService.workdayCapturer([4, 1, 4], 1);
        const result = await waiterAvailabilityService.shiftsInfoReturner()
        assert.equal(result.length, 3);
    });
})

describe('waiterIdAndNamesReturner function', async () => {
    beforeEach(async () => {
        await pool.query(`delete from shiftsinfo`)
    })
    it('should return all waiter names', async () => {
        const waiterAvailabilityService = WaiterAvailabilityService(pool);
        const result = await waiterAvailabilityService.waiterIdAndNamesReturner()
        assert.equal(result.length, 4);
    });
});

describe('managerInfoReturner function', async () => {
    beforeEach(async () => {
        await pool.query(`delete from shiftsinfo`)
    })
    it('should return all waiter names', async () => {
        const waiterAvailabilityService = WaiterAvailabilityService(pool);
        await waiterAvailabilityService.workdayDuplicateChecker([4, 1, 3], 1);
        await waiterAvailabilityService.workdayDuplicateChecker([4, 1, 3], 2);
        await waiterAvailabilityService.workdayDuplicateChecker([4, 1, 3], 3);
        await waiterAvailabilityService.workdayDuplicateChecker([4, 1, 2], 4);
        await waiterAvailabilityService.managerInfoReturner()
        //assert.equal(result.length, 4);
    });
});
// after(function () {
//     pool.end();
// })
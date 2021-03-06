module.exports = function (waiterAvailabilityService) {

    async function allWaiters(req, res, next) {
        try {
            let results = await waiterAvailabilityService.waitersTable();
            res.json({
                status: 'success',
                data: results
            });
        } catch (err) {
            next(err);
        }
    };

    async function shiftsTable(req, res, next) {
        try {
            let results = await waiterAvailabilityService.shiftsTable();
            res.json({
                status: 'success',
                data: results
            });
        } catch (err) {
            next(err);
        }
    };

    async function workdayDuplicateChecker(req, res, next) {
        try {
            await waiterAvailabilityService.workdayDuplicateChecker(req.body);
            res.json({
                status: 'success'
            });
        } catch (err) {
            next(err);
        }
    };

    async function managerInfoReturner(req, res, next) {
        try {
            let results = await waiterAvailabilityService.managerInfoReturner();
            res.json({
                status: 'success',
                data: results
            });
        } catch (err) {
            next(err);
        }
    };

    return {
        workdayDuplicateChecker,
        allWaiters,
        managerInfoReturner,
        shiftsTable
    }
}
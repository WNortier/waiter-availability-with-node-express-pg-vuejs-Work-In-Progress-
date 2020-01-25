module.exports = function (waiterAvailabilityService) {

    async function allWaiters(req, res) {
        try {
            let results = await waiterAvailabilityService.waiterIdAndNamesReturner();
            res.json({
                status: 'success',
                data: results
            });
        } catch (err) {
            next(err);
        }
    };

    async function workdayDuplicateChecker(req, res) {
        try {
            await waiterAvailabilityService.workdayDuplicateChecker(req.body);
            res.json({
                status: 'success'
            });
        } catch (err) {
            next(err);
        }
    };


    return {
        allWaiters,
        workdayDuplicateChecker
    }
}
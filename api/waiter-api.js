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


    return {
        allWaiters
    }
}
module.exports = function WaiterAvailabiltyRoutes(waiterAvailabilityService) {

    // function sendRoute(req, res, err) {
    //     res.send('Basic ExpressJS Server Template');
    // }

    const home = async (req, res) => {
        try {
            res.render('home')
            // , {
            //     test: mockFactory.helloWorld()
            // });
        } catch (err) {
            next(err);
        }
    }

    const waiterOrManagerView = async (req, res, next) => {
        try {
            const selection = req.body.portal;
            if (selection == 'waiter') {
                res.render('layouts/waiters', {
                    waiters: await waiterAvailabilityService.waiterIdAndNamesReturner()
                })
            } else
                res.render('layouts/manager', {
                    colors: await waiterAvailabilityService.managerInfoReturner()              
                })

            // console.log(inputOne)
            // let inputTwo = req.body.anotherInput
            // console.log(inputTwo)
        } catch (err) {
            next(err);
        }
    }

    const getWorkdays = async (req, res, next) => {
        try {
            const waiterId = req.body.waiterId
            const workday = req.body.workday
            console.log(waiterId)
            console.log(workday)
            await waiterAvailabilityService.workdayDuplicateChecker(workday, waiterId)
            res.render('layouts/waiters', {
                waiters: await waiterAvailabilityService.waiterIdAndNamesReturner()
            })
        } catch (err) {
            next(err);
        }
    }

    return {
        //sendRoute,
        home,
        waiterOrManagerView,
        getWorkdays
    }
}
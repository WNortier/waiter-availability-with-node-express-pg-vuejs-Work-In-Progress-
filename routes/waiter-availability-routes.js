module.exports = function WaiterAvailabiltyRoutes(waiterAvailabilityService) {

    // function sendRoute(req, res, err) {
    //     res.send('Basic ExpressJS Server Template');
    // }

    const home = async (req, res, next) => {
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
                    waiters: await waiterAvailabilityService.waitersTable()
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

    const managerInfoReturner = async (req, res, next) => {
        try {
            console.log(req.body)
            await waiterAvailabilityService.workdayDuplicateChecker(req.body)
            res.render('layouts/waiters', {
                waiters: await waiterAvailabilityService.waitersTable()
            })
        } catch (err) {
            next(err);
        }
    }

    return {
        //sendRoute,
        home,
        waiterOrManagerView,
        managerInfoReturner
    }
}
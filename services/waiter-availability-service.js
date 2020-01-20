module.exports = function WaiterAvailabilityService(pool) {

    const workdayDuplicateChecker = async (days, waiter) => {
        if (typeof days == 'number') {
            const duplicateWorkdayCheck = await pool.query(`SELECT * FROM shiftsInfo 
        WHERE weekdays_id = $1 AND waiters_id = $2`, [days, waiter]);
            const result = duplicateWorkdayCheck.rowCount;
            if (result == 0) {
                return workdayCapturer(days, waiter)
            }
        } else {
            const duplicateWorkdayCheck = await pool.query('SELECT * FROM shiftsInfo WHERE waiters_id = $1', [waiter])
            if (duplicateWorkdayCheck.rowCount == 0) {
                return workdayCapturer(days, waiter)
            } else {
                const currentDaysForWaiter = duplicateWorkdayCheck.rows.map((rows) => {
                    return rows.weekdays_id
                });
                for (let i = 0; i < currentDaysForWaiter.length; i++) {
                    var comparison = currentDaysForWaiter.includes(days[i])
                    console.log(comparison)
                }
                if (comparison == true){
                   return null
                }
            }
        }
    }

    const workdayCapturer = async (days, waiter) => {
        try {
            if (typeof days == 'number') {
                await pool.query('INSERT INTO shiftsInfo (weekdays_id, waiters_id) VALUES ($1, $2)', [days, waiter])
            } else {
                for (let i = 0; i < days.length; i++) {
                    await pool.query('INSERT INTO shiftsInfo (weekdays_id, waiters_id) VALUES ($1, $2)', [days[i], waiter])
                }
            }
        } catch (err) {
            console.log(err)
        }
        return null
    }

    const shiftsInfoReturner = async () => {
        const shiftsInfoExtraction = await pool.query('SELECT * FROM shiftsInfo')
        return shiftsInfoExtraction.rows
    }

    const waiterIdAndNamesReturner = async () => {
        const waiterNamesExtraction = await pool.query('SELECT * FROM waiters')
        // const names = waiterNamesExtraction.rows.map((rows) => {
        //     return rows.name
        // })
        // console.log(names)
        return waiterNamesExtraction.rows
    }

    const managerInfoReturner = async () => {
        const weekdays = [1,2,3,4,5,6,7]
        const dayCount = []
        for (let i = 0; i < weekdays.length; i++) {
            const countExtraction = await pool.query('SELECT count(*) FROM shiftsInfo WHERE weekdays_id = $1', [weekdays[i]])
            dayCount.push(countExtraction.rows[0].count)
        }

        let waiterCountToColorObject = {
            Monday: "grey",
            Tuesday: "grey",
            Wednesday: "grey",
            Thursday: "grey",
            Friday: "grey",
            Saturday: "grey",
            Sunday: "grey"
        }

        waiterCountToColorObject.Monday = dayCount[0]
        waiterCountToColorObject.Tuesday = dayCount[1]
        waiterCountToColorObject.Wednesday = dayCount[2]
        waiterCountToColorObject.Thursday = dayCount[3]
        waiterCountToColorObject.Friday = dayCount[4]
        waiterCountToColorObject.Saturday = dayCount[5]
        waiterCountToColorObject.Sunday = dayCount[6]

        for (var key in waiterCountToColorObject) {
            if (waiterCountToColorObject[key] == 0) {
                waiterCountToColorObject[key] = "grey"
            } else if (waiterCountToColorObject[key] == 1) {
                waiterCountToColorObject[key] = "grey"
            } else if (waiterCountToColorObject[key] == 2) {
                waiterCountToColorObject[key] = "grey"
            } else if (waiterCountToColorObject[key] == 3) {
                waiterCountToColorObject[key] = "green"
            } else {
                waiterCountToColorObject[key] = "red"
            }
        }

        return Object.values(waiterCountToColorObject);
    }

    return {
        workdayDuplicateChecker,
        workdayCapturer,
        shiftsInfoReturner,
        waiterIdAndNamesReturner,
        managerInfoReturner
    }
}

    //'SELECT waiters.id, waiters.name FROM shiftsInfo INNER JOIN waiters on waiters.id = waiters_id'
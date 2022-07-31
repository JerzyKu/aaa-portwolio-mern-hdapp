import { differenceInSeconds, differenceInMinutes, differenceInHours, differenceInCalendarDays } from 'date-fns'
const { utcToZonedTime } = require('date-fns-tz')

export default function age(inputDate) {
    const now = new Date()

    const timeZone = 'Europe/Warsaw'
    const zonedDate = utcToZonedTime(inputDate, timeZone)

    const seconds = differenceInSeconds(now, zonedDate ) % 60
    const minutes = differenceInMinutes(now, zonedDate ) % 60 
    const hours = differenceInHours(now, zonedDate ) % 24 
    const days = differenceInCalendarDays(now, zonedDate )

    let out = "" 
    
    if (days === 1) out += `${days} day, `
    if (days > 1) out += `${days} days, `
    if (hours) out += `${hours} hours, `
    if (minutes) out += `${minutes} minutes, `
    if (seconds === 1 ) out += `${seconds} second.`
    if (seconds !== 1 ) out += `${seconds} seconds.`
    
    return out
}
/*
 
Counting Sundays

Problem 19

You are given the following information, but you may prefer to do some research for yourself.

    1 Jan 1900 was a Monday.
    Thirty days has September,
    April, June and November.
    All the rest have thirty-one,
    Saving February alone,
    Which has twenty-eight, rain or shine.
    And on leap years, twenty-nine.
    A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

How many Sundays **fell on the first of the month** during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

solution: 171

 */

import * as Days from '../utils/days';

export default function solve() {
    let sundayCount = 0;
    let dayOfWeek = Days.MONDAY;

    // loop throug all years
    for (let year = 1900; year <= 2000; year++) {
        const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        const DAYS_PER_MONTH = isLeapYear ? Days.PerMonth.LEAP : Days.PerMonth.NOT_LEAP;
                
        // loop through months
        for (let month = 0; month < 12; month++) {
            if (dayOfWeek === Days.SUNDAY && year > 1900) {
                sundayCount++;
            }
            dayOfWeek = (dayOfWeek + DAYS_PER_MONTH[month]) % Days.PER_WEEK;
        }
    }

    console.log(`Solution #19: ${sundayCount}`);
}

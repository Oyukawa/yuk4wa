import { defineStore } from 'pinia';
export const useCalculateDuration = defineStore('calculateDuration', () => {
    const calculateDuration = (startDate, endDate) => {
        const start = new Date(`${startDate}/01`);
        const end = new Date(`${endDate}/01`);
        const yearDiff = end.getFullYear() - start.getFullYear();
        const monthDiff = end.getMonth() - start.getMonth();
        let durationYears = yearDiff;
        let durationMonths = monthDiff;
        if (monthDiff < 0) {
            durationYears--;
            durationMonths += 12;
        }
        return { years: durationYears, months: durationMonths };
    };
    const dateRange = (startDate, endDate) => {
        const years = calculateDuration(startDate, endDate).years;
        const months = calculateDuration(startDate, endDate).months;
        return `${years}年${months}ヶ月`;
    };
    return {
        calculateDuration,
        dateRange
    };
});

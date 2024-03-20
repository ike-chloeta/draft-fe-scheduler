type DayObject = {
    index: number;
    dayOfWeek: string;
    date: Date;
};

export function getMonthDays(month: number, year: number): DayObject[] {
    const daysInMonth = new Date(year, month, 0).getDate();
    const days: DayObject[] = [];

    for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date(year, month - 1, i);
        const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "short" });
        days.push({ index: i, dayOfWeek, date });
    }

    return days;
}

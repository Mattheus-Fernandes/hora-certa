export class TransformDate {
    private static readonly alwaysDayOne: string = '01'

    private static month: string
    private static year: string

    public static apiFormat(month: string, year: string): string {
        this.month = month.padStart(2, '0')
        this.year = year

        return this.monthAndFormat()
    }

    private static monthAndFormat(): string {
        return `${this.year}-${this.month}-${this.alwaysDayOne}`
    }
}
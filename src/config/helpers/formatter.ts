export class Formatter {
    public static currency(value: number): string {
        return new Intl.NumberFormat('en-Us', {
            style: 'currency',
            currency: 'USD'
        }).format(value)
    }
}
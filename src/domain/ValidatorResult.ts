export class ValidatorResult {
    constructor(private readonly errors: string[]) {}

    get errorMessages(): string[] {
        return this.errors;
    }

    get isValid(): boolean {
        return this.errors.length === 0;
    }
}
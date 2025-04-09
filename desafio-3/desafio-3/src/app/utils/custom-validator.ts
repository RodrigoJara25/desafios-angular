import { AbstractControl } from "@angular/forms";

export function noCoderAllowed(control: AbstractControl) {
    const value = control.value?.toLowerCase();

    if (value.includes('coder')) {
        // console.log({ noCoderAllowed: true });
        return { noCoderAllowed: true }
    }

    return null;
}
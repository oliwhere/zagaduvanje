
export class ValidationService {
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config = {
      required: 'Required field!',
      invalidCreditCard: 'Is invalid credit card number',
      invalidEmailAddress: 'Invalid email address',
      invalidDate: 'Invalid date.',
      invalidLinkAddress: 'Invalid address',
      invalidNumber: 'Only whole positive numbers are allowed.',
      invalidDecimalNumber: 'Only whole and float positive numbers are allowed.',
      invalidPassword:
        'Password must contain at least 1 lowercase, uppercase, numerical and special character and must be at least 7 characters long.',
      minlength: `Minimum length: ${validatorValue.requiredLength} characters.`,
      maxlength: `Maximum length: ${validatorValue.requiredLength} characters.`,
      invalidPositiveNumber: 'Only positive numbers are allowed.'
    };
    // @ts-ignore
    return config[validatorName];
  }
  // @ts-ignore
  static optionalEmailValidator(control) {
    if (!control.value || control.value.length === 0 ||
      control.value.match(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      )
    ) {
      return null;
    } else {
      return { invalidEmailAddress: true };
    }
  }
  // @ts-ignore
  static emailValidator(control) {
    if (
      control.value.match(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      )
    ) {
      return null;
    } else {
      return { invalidEmailAddress: true };
    }
  }
  // @ts-ignore
  static linkedInValidation(control) {
    const expression =  /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/gm;

    if (control.value.length === 0 || control.value.match(expression)) {
      return null;
    } else {
      return { invalidLinkAddress: true };
    }
  }


  // @ts-ignore
  static passwordValidator(control) {
    // {6,100}           - Assert password is between 6 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if (control.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{7,30}$/)) {
      return null;
    } else {
      return { invalidPassword: true };
    }
  }
  // @ts-ignore
  static wholeNumberValidator(control) {
    if (!control.value) {
      return { invalidNumber: true };
    }

    if (Math.sign(control.value) === 1 && control.value % 1 === 0) {
      return null;
    } else {
      return { invalidNumber: true };
    }
  }
  // @ts-ignore
  static decimalNumberValidator(control) {
    if (!control.value) {
      return { invalidDecimalNumber: true };
    }

    if (Math.sign(control.value) === 1 && (control.value % 1 !== 0 || control.value % 1 === 0)) {
      return null;
    } else {
      return { invalidDecimalNumber: true };
    }
  }
  // @ts-ignore
  static positiveNumberValidator(control) {
    if (!control.value) {
      return { invalidPositiveNumber: true };
    }

    if (control.value !== '$NaN' && control.value[0] !== '-' && control.value[1] !== '0' && control.value[0] !== '0') {
      return null;
    } else {
      return { invalidPositiveNumber: true };
    }
  }
  // @ts-ignore
  static arrayValidator(control) {
    if (!control.value) {
      return { required: true };
    }

    if (Array.isArray(control.value) && control.value.length > 0){
      return null;
    }else {
      return { required: true };
    }
  }
  // @ts-ignore
  static optionalArrayValidator(control) {
    if (!control.value || Array.isArray(control.value)){
      return null;
    }else {
      return { required: true };
    }
  }
  // @ts-ignore
  static applicationNameValidator(control) {
    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
      return null;
    } else {
      return { invalidPassword: true };
    }
  }
}

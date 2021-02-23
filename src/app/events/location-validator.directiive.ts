import { Directive } from '@angular/core';
import { Validators, FormGroup , NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[validateLocation]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true}
  ]
})

export class LocationValidator implements Validators {

  validate(formGroup: FormGroup): {[key: string]: any} {

    const addressControl = formGroup.controls.address;
    const cityControl = formGroup.controls.city;
    const countryControl = formGroup.controls.country;
    const onlineUrlControl = (formGroup.root as FormGroup).controls.onlineUrl; // ir a la razi del form

    if ((addressControl && addressControl.value && cityControl && cityControl.value
      && countryControl && countryControl.value) || (onlineUrlControl && onlineUrlControl.value)) {
        return null; // es valido
    } else {
      return {validateLocation: false};
    }


  }
}

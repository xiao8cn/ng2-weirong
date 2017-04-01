import { Injectable } from '@angular/core';

import { EntityBase } from "../entity/EntityBase"
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable()
export class EntityControlService {

  constructor() { }

  toFormGroup(entitys: EntityBase<any>[] ) {
    let group: any = {};

    entitys.forEach(entity => {
      group[entity.key] = entity.required ? new FormControl(entity.value || '', Validators.required)
        : new FormControl(entity.value || '');
    });
    return new FormGroup(group);
  }

}

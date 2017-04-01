/**
 * Created by xiao on 2017/4/1.
 */
import { EntityBase } from './EntityBase';

export class TextBoxEntity extends EntityBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}

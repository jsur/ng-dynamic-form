import { QuestionBase } from './question-base';

export class RadioQuestion extends QuestionBase<string> {
  controlType = 'radio';
  options: {
    key: string, 
    type: string,
    value: string,
    label: string
  }[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
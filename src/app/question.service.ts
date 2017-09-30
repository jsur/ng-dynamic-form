import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './questiontypes/question-dropdown';
import { QuestionBase }     from './questiontypes/question-base';
import { TextboxQuestion }  from './questiontypes/question-textbox';
import { RadioQuestion }  from './questiontypes/question-radio';

@Injectable()
export class QuestionService {

 // Todo: get from a remote source of question metadata
 // Todo: make asynchronous
 getQuestions() {

   let questions: QuestionBase<any>[] = [

    // first one without a question type
    
    {
      type: 'text',
      key: 'test',
      label: 'Test',
      value: 'testingeeeeeeee',
      required: true,
      order: 0
    },

     new DropdownQuestion({
       key: 'brave',
       label: 'Bravery Rating',
       options: [
         {key: 'solid',  value: 'Solid'},
         {key: 'great',  value: 'Great'},
         {key: 'good',   value: 'Good'},
         {key: 'unproven', value: 'Unproven'}
       ],
       order: 4
     }),

     new TextboxQuestion({
       key: 'firstName',
       label: 'First name',
       value: 'Bombasto',
       required: true,
       order: 1
     }),

     new TextboxQuestion({
      key: 'lastName',
      label: 'Last name',
      value: 'Test',
      required: true,
      order: 2
    }),

     new TextboxQuestion({
       key: 'emailAddress',
       label: 'Email',
       type: 'email',
       order: 3
     }),

     new RadioQuestion({
       key: 'gender',
       label: 'Gender',
       value: 'female',
       options: [
         { type: 'radio', value: 'male', label: 'Male'},
         { type: 'radio', value: 'female', label: 'Female'}
       ],
       order: 5
     })
   ];

   console.log(questions);

   return questions.sort((a, b) => a.order - b.order);
 }
}
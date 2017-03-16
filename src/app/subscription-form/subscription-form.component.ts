import { Component } from '@angular/core';

@Component({
  selector: 'subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent {

    frequencies = [
        { id: 1, label: 'Daily' }, 
        { id: 2, label: 'Weekly' },
        { id: 3, label: 'Monthly' }
    ];

    onSubmit(form){
        console.log(form);
    }
}

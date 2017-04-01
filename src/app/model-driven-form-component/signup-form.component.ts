import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { UsernameValidators } from 'app/Validators/UsernameValidators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignUpFormComponent implements OnInit {
    
    public form: FormGroup;

    // public form: FormGroup = new FormGroup({
    //     username: new FormControl('', Validators.required),
    //     password: new FormControl('', Validators.required)
    // });

    constructor(private _fb: FormBuilder) {
        var t = "test";
        console.log(this.form);
    }

    ngOnInit(): void {
        this.form = this._fb.group({
            username: ['', Validators.compose([
                Validators.required, 
                UsernameValidators.cannotContainSpace])],
            password: ['', Validators.required]
        });
    }

    // form = new FormGroup({
    //     username: new FormControl('', Validators.required),
    //     password: new FormControl('', Validators.required)
    // });

}


import { Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   @ViewChild('f') signupForm:NgForm;
    defaultValue="pet"
    answer=''
    genders=['male','female','others']
    user={
      userName:'',
      email:'',
      secretQuestion:'',
      answer:'',
      gender:''
    }
    submitted=false
//  onSubmit(form:NgForm){
//    console.log("submit",form)
//  }
    suggestUserName(){
      const suggestedName='chetan upreti';
      /*
            in setValue we have to provide all the values for form and it override the form values.
      */
      // this.signupForm.setValue({
      //   userData:{
      //     userName:suggestedName,
      //     email:''
      //   },
      //   userSecret:{
      //     secret:'pet',
      //     answer:''
      //   },
      //   gender:this.genders[0]
      // })
      // this.signupForm.setValue({
      //   userData:{
      //     userName:suggestedName,
      //   },
      //   userSecret:{
      //     secret:'pet'
      //   }
      // })  
       /*
       in case of pathchValue no need of provide all values of form and it doesn't override the value of form 
       */   
      this.signupForm.form.patchValue({
         userData:{
          userName:suggestedName,
        }
      })
    }

   onSubmit(){
    // console.log("submit",this.signupForm);
    this.submitted=true;
    this.user.userName=this.signupForm.value.userData.userName;
    this.user.email=this.signupForm.value.userData.userName;
    this.user.secretQuestion=this.signupForm.value.userSecret.secret;
    this.user.answer=this.signupForm.value.userSecret.answer;
    this.user.gender=this.signupForm.value.gender;
   // this.signupForm.reset()  //for reset the form
    // this.signupForm.form.patchValue({
    //   userData:{
    //     userName:'',
    //     email:''
    //   },
    //   userSecret:{
    //     secret:'pet',
    //     answer:''
    //   },
    //   gender:this.genders[0]
    // })
   }
   reset(){
  //    this.submitted=false;
  //    this.signupForm.form.patchValue({
  //      userData:{
  //        userName:'',
  //        email:''
  //      },
  //    gender:this.genders[1],
  //    userSecret:{
  //      secret:"pet",
  //      answer:''
  //    }
  //  })
     
   this.signupForm.reset();
   
   }
}

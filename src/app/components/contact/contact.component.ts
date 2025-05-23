import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
    selector: "app-contact",
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.css"],
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };
  
  formSubmitted = false;
  
  onSubmit(): void {
    console.log('Form submitted', this.formData);
    this.formSubmitted = true;
    
    // Reset form after 3 seconds
    setTimeout(() => {
      this.formData = {
        name: '',
        email: '',
        message: ''
      };
      this.formSubmitted = false;
    }, 3000);
  }
}
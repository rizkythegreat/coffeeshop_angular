import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

interface Testimonial {
  id: number;
  name: string;
  occupation: string;
  image: string;
  quote: string;
  rating: number;
}

@Component({
  selector: "app-testimonials",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./testimonials.component.html",
  styleUrls: ["./testimonials.component.scss"]
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Emily Johnson',
      occupation: 'Writer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: `Brew & Bygone is my second home. The atmosphere perfectly balances nostalgia with comfort, and their hazelnut latte is simply divine. I've written half my novel sitting in their corner booth!`,
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      occupation: 'Graphic Designer',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'As someone who appreciates aesthetics, I can say this place has nailed the retro vibe without feeling forced. The coffee is exceptional, and the staff remembers my order every time.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Sarah Williams',
      occupation: 'Photographer',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'I initially came for the Instagram-worthy interior, but I keep coming back for their amazing pastries and pour-over coffee. The attention to detail in everything they do is remarkable.',
      rating: 4,
    }
  ];
  
  currentIndex = 0;
  slideWidth = 0;
  slidePosition = 0;
  
  ngOnInit(): void {
    this.calculateSlideWidth();
    window.addEventListener('resize', this.calculateSlideWidth.bind(this));
  }
  
  calculateSlideWidth(): void {
    const container = document.querySelector('.testimonial-container');
    if (container) {
      this.slideWidth = container.clientWidth;
      this.updateSlidePosition();
    }
  }
  
  updateSlidePosition(): void {
    this.slidePosition = -this.currentIndex * this.slideWidth;
  }
  
  nextTestimonial(): void {
    if (this.currentIndex < this.testimonials.length - 1) {
      this.currentIndex++;
      this.updateSlidePosition();
    }
  }
  
  prevTestimonial(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateSlidePosition();
    }
  }
  
  goToTestimonial(index: number): void {
    this.currentIndex = index;
    this.updateSlidePosition();
  }
}
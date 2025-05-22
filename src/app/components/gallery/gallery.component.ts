import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

interface GalleryItem {
  image: string;
  title: string;
  description: string;
}

@Component({
    selector: "app-gallery",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./gallery.component.html",
    styleUrls: ["./gallery.component.css"],
})
export class GalleryComponent {
    lightboxOpen = false;
  currentIndex = 0;
  
  galleryItems: GalleryItem[] = [
    {
      image: 'https://images.pexels.com/photos/1024359/pexels-photo-1024359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Morning Rituals',
      description: 'Starting the day with a perfect pour-over'
    },
    {
      image: 'https://images.pexels.com/photos/4491275/pexels-photo-4491275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Vintage Coffee Machine',
      description: 'Our restored 1960s espresso machine'
    },
    {
      image: 'https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Barista Art',
      description: 'Crafting the perfect latte'
    },
    {
      // image: 'https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      image: 'https://images.pexels.com/photos/3968061/pexels-photo-3968061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Cozy Corner',
      description: 'Our reading nook with vintage records'
    },
    {
      image: 'https://images.pexels.com/photos/2467287/pexels-photo-2467287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Bean Selection',
      description: 'Only the finest globally sourced beans'
    },
    {
      image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Community Table',
      description: 'Where strangers become friends'
    }
  ];
  
  openLightbox(index: number): void {
    this.currentIndex = index;
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }
  
  closeLightbox(): void {
    this.lightboxOpen = false;
    document.body.style.overflow = 'auto';
  }
  
  nextImage(): void {
    if (this.currentIndex < this.galleryItems.length - 1) {
      this.currentIndex++;
    }
  }
  
  prevImage(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuItem } from '../../models/menu-item.model';

@Component({
    selector: "app-menu",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./menu.component.html",
    styleUrls: ["./menu.component.css"],
})
export class MenuComponent {
  selectedCategory: string = 'Coffee';
  categories: string[] = ['Coffee', 'Pastries', 'Breakfast', 'Lunch'];

  menuItems: MenuItem[] = [
    {
      id: 1,
      name: 'Classic Espresso',
      description: 'Rich, concentrated coffee served in a small cup. The foundation of all our coffee drinks.',
      price: 3.50,
      category: 'Coffee',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      popular: true
    },
    {
      id: 2,
      name: 'Mocha Latte',
      description: 'Espresso combined with steamed milk and chocolate syrup for a delightful treat.',
      price: 4.75,
      category: 'Coffee',
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      popular: false
    },
    {
      id: 3,
      name: 'Pour Over',
      description: 'Hand-brewed coffee made with precision and care for a clean, flavorful cup.',
      price: 4.25,
      category: 'Coffee',
      image: 'https://images.pexels.com/photos/2299028/pexels-photo-2299028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      popular: false
    },
    {
      id: 4,
      name: 'Almond Croissant',
      description: 'Buttery, flaky pastry filled with almond cream and topped with sliced almonds.',
      price: 3.95,
      category: 'Pastries',
      image: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      popular: true
    },
    {
      id: 5,
      name: 'Cinnamon Roll',
      description: 'Soft, warm roll with cinnamon sugar swirl and cream cheese frosting.',
      price: 4.50,
      category: 'Pastries',
      image: 'https://images.pexels.com/photos/267308/pexels-photo-267308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      popular: false
    },
    {
      id: 6,
      name: 'Avocado Toast',
      description: 'Sourdough bread topped with mashed avocado, cherry tomatoes, and microgreens.',
      price: 8.95,
      category: 'Breakfast',
      image: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      popular: true
    },
    {
      id: 7,
      name: 'Classic BLT',
      description: 'Bacon, lettuce, and tomato with mayo on toasted sourdough bread.',
      price: 9.50,
      category: 'Lunch',
      image: 'https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      popular: false
    },
    {
      id: 8,
      name: 'Chicken Pesto Sandwich',
      description: 'Grilled chicken, pesto, mozzarella, and roasted red peppers on ciabatta.',
      price: 10.95,
      category: 'Lunch',
      image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      popular: true
    }
  ];
  
  get filteredItems(): MenuItem[] {
    return this.menuItems.filter(item => item.category === this.selectedCategory);
  }
  
  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}
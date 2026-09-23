interface Item {
  type: "book" | "electronics" | "clothing";
  id: string;
  price: number;
}

interface Book extends Item {
  type: "book";
  title: string;
  author: string;
}

interface Electronics extends Item {
  type: "electronics";
  item: string;
  model: string;
  warranty?: number;
}

interface Clothing extends Item {
  type: "clothing";
  item: string;
  brand: string;
  size?: "S" | "M" | "L";
}

type Product = Book | Electronics | Clothing;

class Collection<T> {
  private items: T[];
    constructor(items: T[]) {
      this.items = items;
    }
  getAll(): T[] {
    return this.items;
  }
  filter(callback: (item: T) => boolean): T[] {
    return this.items.filter(callback);
  }
  
}
function renderProduct(product: Product): string {
    if (product.type === "book") {
      return `
         <div class="item" id = ${product.id}>         
            <p class="title"><strong>Book:</strong><br> ${product.title} by ${product.author}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
         </div>
        `;
    } else if (product.type === "electronics") {
      return `
       <div class="item" id=${product.id}>
            
            <p class="title"><strong>Electronics:</strong><br> ${product.item} - ${product.model}${product.warranty ? ` - Warranty: ${product.warranty} year(s)`  : ""}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
        </div>
    
      `;
    } else if (product.type === "clothing") {
      return `
         <div class="item" id=${product.id}>
           
            <p class="title"><strong>Clothing:</strong><br> ${product.item} by ${product.brand}${product.size ? ` - Size ${product.size}` : ""}</p>
             <p class="price">$${product.price.toFixed(2)}</p>
        </div>
    `;
    } 
    throw new Error("Unknown product type: " + JSON.stringify(product));
  }

let products = new Collection<Product>([
  // Books
  {
    type: "book",
    id: "1",
    price: 19.99,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald"
  },
  {
    type: "book",
    id: "2",
    price: 14.99,
    title: "1984",
    author: "George Orwell"
  },
  {
    type: "book",
    id: "3",
    price: 22.5,
    title: "To Kill a Mockingbird",
    author: "Harper Lee"
  },
  {
    type: "book",
    id: "4",
    price: 17.25,
    title: "Brave New World",
    author: "Aldous Huxley"
  },
  {
    type: "book",
    id: "5",
    price: 12.99,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger"
  },

  // Electronics
  {
    type: "electronics",
    id: "6",
    price: 999.99,
    item: "Smartphone",
    model: "iPhone 15",
    warranty: 2
  },
  {
    type: "electronics",
    id: "7",
    price: 1299.0,
    item: "Laptop",
    model: "MacBook Pro 14",
    warranty: 1
  },
  {
    type: "electronics",
    id: "8",
    price: 349.99,
    item: "Headphones",
    model: "Sony WH-1000XM5",
    warranty: 0
  },
  {
    type: "electronics",
    id: "9",
    price: 399.99,
    item: "Smartwatch",
    model: "Samsung Galaxy Watch 6",
    warranty: 3
  },
  {
    type: "electronics",
    id: "10",
    price: 599.0,
    item: "Tablet",
    model: "Samsung Galaxy Tab S9",
    warranty: 1
  },

  // Clothing
  {
    type: "clothing",
    id: "11",
    price: 24.99,
    item: "T-Shirt",
    brand: "Nike",
    size: "M"
  },
  {
    type: "clothing",
    id: "12",
    price: 129.99,
    item: "Jacket",
    brand: "The North Face",
    size: "L"
  },
  {
    type: "clothing",
    id: "13",
    price: 69.99,
    item: "Jeans",
    brand: "Levi's",
    size: "S"
  },
  {
    type: "clothing",
    id: "14",
    price: 54.99,
    item: "Hoodie",
    brand: "Adidas"
  },
  {
    type: "clothing",
    id: "15",
    price: 44.99,
    item: "Sweater",
    brand: "Uniqlo",
    size: "M"
  }
]);

function showProducts( filter ?:Product["type"] ) {

    const output = document.querySelector<HTMLDivElement>("#output")!;
    const allProducts = products.getAll();
    const filteredProducts = filter ? allProducts.filter(product => product.type === filter) : allProducts;
    output.innerHTML = filteredProducts.map(product => renderProduct(product)).join("");

};
document.querySelector<HTMLButtonElement>("#all")!.addEventListener("click", () => {
  showProducts();
});

document.querySelector<HTMLButtonElement>("#books")!.addEventListener("click", () => {
  showProducts("book");
});

document.querySelector<HTMLButtonElement>("#electronics")!.addEventListener("click", () => {
  showProducts("electronics");
});

document.querySelector<HTMLButtonElement>("#clothing")!.addEventListener("click", () => {
  showProducts("clothing");
});

document.addEventListener("DOMContentLoaded", () => {
    showProducts();
});
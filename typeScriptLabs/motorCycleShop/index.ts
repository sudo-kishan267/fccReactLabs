type Category =
  | "Sport"
  | "Cruiser"
  | "Touring"
  | "Dirt"
  | "Adventure"
  | "Naked"
  | "Electric";
interface Motorcycle {
  id: string;
  name: string;
  manufacturer: string;
  category: Category;
  price: number;
  image_url: string;
  createdAt: Date;
  description: string;
  year: number;
  horsepower?: number;
}

async function fetchMotorcycles(): Promise<Motorcycle[]> {
  const response = await fetch(
    "https://cdn.freecodecamp.org/curriculum/labs/data/motorcycles.json",
  );
  if (!response.ok) {
    throw new Error("Failed to fetch motorcycles");
  }
  const data: Motorcycle[] = await response.json();
  return data;
}

function getHorsepowerLabel(m: Motorcycle): string {
  return m.horsepower !== undefined ? `${m.horsepower} HP` : "HP N/A";
}
function renderMotorcycleCard(motorcycle: Motorcycle): string {
  return `
    <div class="motorcycle-card">
      <div class="motorcycle-card-image-container">
        <img
          class="motorcycle-card-image"
          src="${motorcycle.image_url}"
          alt="${motorcycle.name}"
        />
        <span class="motorcycle-card-year-badge">${motorcycle.year}</span>
      </div>
      <h2 class="motorcycle-card-title">${motorcycle.name}</h2>
      <p class="motorcycle-card-manufacturer">${motorcycle.manufacturer}</p>
      <p class="motorcycle-card-category">${motorcycle.category}</p>
      <p class="motorcycle-card-description">${motorcycle.description}</p>
      <p class="motorcycle-card-price">$ ${motorcycle.price.toLocaleString()}</p>
      <p class="motorcycle-card-engine">${getHorsepowerLabel(motorcycle)}</p>
    </div>
    `;
}

class MotorcycleGalleryApp {
  private allMotorcycles: Motorcycle[] = [];

  async init(): Promise<void> {

    const loading = document.getElementById("loading-container");
    if (loading) loading.style.display = "flex";
    try {
      this.allMotorcycles = await fetchMotorcycles();
      await this.renderMotorcycles(this.allMotorcycles);
    } finally {
      if (loading) loading.style.display = "none";
    }


    // Assumes a text input with id "search-input"; change the id to match your HTML
    const filterInput = document.getElementById(
      "name-filter-input",
    ) as HTMLInputElement | null;
    filterInput?.addEventListener("input", () =>
      this.applyFilter(filterInput.value),
    );
  }

  private applyFilter(query: string): void {
    const term = query.trim().toLowerCase();

    const filtered = this.allMotorcycles.filter(
      (m) =>
        m.name.toLowerCase().includes(term) ||
        m.manufacturer.toLowerCase().includes(term) ||
        m.category.toLowerCase().includes(term) ||
        m.description.toLowerCase().includes(term),
    );

    void this.renderMotorcycles(filtered);
  }

  async renderMotorcycles(motorcycles?: Motorcycle[]): Promise<void> {
    let list: Motorcycle[] = motorcycles ?? this.allMotorcycles;

    // Fetch when the received list is empty AND nothing is stored yet.
    // The second condition stops a filter with no matches from re-fetching
    // and showing every bike again.
    if (list.length === 0 && this.allMotorcycles.length === 0) {
      this.allMotorcycles = await fetchMotorcycles();
      list = this.allMotorcycles;
    }

    const grid = document.getElementById("motorcycle-grid");
    if (grid) {
      grid.innerHTML = list
        .map((motorcycle) => renderMotorcycleCard(motorcycle))
        .join("");
    }

    const resultsNumber = document.getElementById("results-number");
    if (resultsNumber) {
      resultsNumber.textContent = String(list.length);
    }

    const noResults = document.getElementById("no-results");
    if (noResults) {
      noResults.style.display = list.length === 0 ? "block" : "none";
    }
  }
}

const app = new MotorcycleGalleryApp();
app.init().catch((err) => console.error(err));


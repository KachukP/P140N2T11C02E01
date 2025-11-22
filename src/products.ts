import ProductsList from "./products.json" with { type: "json" };

export function GetProductsSortedByPrice(){
  const Sorted = [...ProductsList];
  Sorted.sort((a, b) => a.price - b.price);
  return Sorted;
};

export function ProductsListComponent(){
  const Section = document.createElement("S");
  Section.style.border = "solid 1px #ccc";
  Section.style.padding = "10px";
  const List = document.createElement("ul");
  const SortedProducts = GetProductsSortedByPrice();
  SortedProducts.forEach((Product) => {
    const ListItem = document.createElement("li");
    ListItem.textContent = `${Product.title} - $${Product.price}`;
    List.appendChild(ListItem);
  });
  Section.appendChild(List);
  return Section;
};
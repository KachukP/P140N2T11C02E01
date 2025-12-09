export function HeaderComponent() {
  const Header = document.createElement("header");
  Header.innerHTML = "<h1>Productos disponibles</h1>";
  Header.style.border = "solid 3px black";
  Header.style.padding = "12px";
  return Header;
};
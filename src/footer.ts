export function FooterComponent() {
  const Footer = document.createElement("footer");
  Footer.innerHTML = "<p>Todos los derechos reservados</p>";
  Footer.style.border = "solid 3px black";
  Footer.style.padding = "12px";
  Footer.style.marginTop = "20px";
  return Footer;
};
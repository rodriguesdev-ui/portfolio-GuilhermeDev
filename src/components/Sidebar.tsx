import { StaggeredMenu } from "./StaggeredMenu";
import logoDev from "@/public/logoDev.png";

const menuItems = [
    { label: "Home", ariaLabel: "Ir para a página inicial", link: "/" },
    { label: "Projetos", ariaLabel: "Ver meus projetos", link: "/projects" },
    { label: "Sobre", ariaLabel: "Saber mais sobre mim", link: "/about" },
    { label: "Contato", ariaLabel: "Entrar em contato", link: "/contact" },
  ];
  
  const socialItems = [
    {  label: "GitHub", link: "https://github.com/rodriguesdev-ui" },
    {  label: "LinkedIn", link: "https://linkedin.com/in/seu-usuario" },
  ];
  
export function Sidebar() {
  return (
    <StaggeredMenu
    position="right"
items={menuItems}
socialItems={socialItems}
displaySocials={true}
displayItemNumbering={true}
menuButtonColor="#fff"
openMenuButtonColor="#1a1a1a"
changeMenuColorOnOpen={true}
colors={["#B19EEF", "#5227FF"]}
          logoUrl={logoDev}
          accentColor="#5227FF"
        />
  );
}
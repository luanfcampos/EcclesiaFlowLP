import './style.css' // Importa o CSS do Tailwind

// Importa as dependências
import AOS from 'aos';
import 'aos/dist/aos.css'; // <--- ESSA LINHA É CRUCIAL. Sem ela, a animação quebra.
// import { createIcons, icons } from 'lucide';
import Alpine from 'alpinejs';

// Inicializa Alpine
window.Alpine = Alpine;
Alpine.start();

// Inicializa Ícones
// createIcons({ icons });

// Inicializa AOS (Animações)
AOS.init({
    duration: 800,
    once: true,
    offset: 0, // Mudei para 0 para garantir que apareça mesmo no topo
});
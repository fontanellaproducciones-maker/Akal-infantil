const ADMIN_PASSWORD = 'akalinfantil2025';

// Elementos DOM
const adminButton = document.getElementById('adminButton');
const loginModal = document.getElementById('loginModal');
const adminPanel = document.getElementById('adminPanel');
const loginBtn = document.getElementById('loginBtn');
const closeLoginBtn = document.getElementById('closeLoginBtn');
const closeAdminBtn = document.getElementById('closeAdminBtn');
const adminPassword = document.getElementById('adminPassword');
const loginError = document.getElementById('loginError');

let websiteData = {
    hero: {
        title: 'Libros que Transforman',
        subtitle: 'No solo entretenemos, educamos en valores',
        description: 'Herramientas pedagógicas para colegios, comunidades y familias que buscan formar niños con pensamiento crítico, creatividad y corazón.',
        backgroundImage: '',
        button1: 'Descubre nuestros libros',
        button2: 'Contacta con nosotros'
    },
    sections: [
        {
            id: 1,
            type: 'valores',
            title: 'Más que Libros, Son Herramientas de Transformación',
            intro: 'En un mundo donde los niños viven permanentemente conectados, ofrecemos una forma diferente de conexión.',
            cards: [
                { icon: '🎯', title: 'Educación en Valores', text: 'Cada libro transmite valores fundamentales: empatía, respeto, diversidad.' },
                { icon: '🧩', title: 'Fichas Pedagógicas', text: 'Material pedagógico completo para aplicar en el aula.' },
                { icon: '🌍', title: 'Visión Crítica', text: 'Fomentamos el cuestionamiento y el diálogo.' },
                { icon: '❤️', title: 'Conexión Emocional', text: 'Historias que tocan el corazón de los niños.' }
            ]
        },
        {
            id: 2,
            type: 'libros',
            title: 'Libros Destacados',
            intro: 'Cada libro es una puerta a nuevos mundos',
            items: [
                { emoji: '🐱', title: 'La noche de los gatos', description: 'Misterio y ternura felina.', valores: ['Imaginación'], imageUrl: '' },
                { emoji: '❓', title: '¿Qué te pasó?', description: 'Empatía y escucha activa.', valores: ['Empatía'], imageUrl: '' },
                { emoji: '❔', title: 'Preguntas curiosas', description: 'El arte de cuestionarse.', valores: ['Curiosidad'], imageUrl: '' }
            ]
        }
    ],
    settings: {
        email: 'infantil@akal.com',
        phone: '+34 91 000 00 00',
        location: 'Madrid, España'
    }
};
function editSection(id) {
  const section = websiteData.sections.find(s => s.id === id);
  if (!section) return alert('Sección no encontrada');
  document.getElementById('editSectionId').value = id;
  document.getElementById('editSectionTitle').value = section.title || '';
  document.getElementById('editSectionContent').value = section.content || '';
  document.getElementById('editSectionModal').style.display = 'flex';
}

function closeEditModal() {
  document.getElementById('editSectionModal').style.display = 'none';
}

function saveSectionEdit() {
  const id = parseInt(document.getElementById('editSectionId').value, 10);
  const title = document.getElementById('editSectionTitle').value;
  const content = document.getElementById('editSectionContent').value;
  const sectionIndex = websiteData.sections.findIndex(s => s.id === id);
  if(sectionIndex === -1) return alert('Sección no encontrada');

  websiteData.sections[sectionIndex].title = title;
  websiteData.sections[sectionIndex].content = content;

  closeEditModal();
  updatePublicView();
  localStorage.setItem('akalData', JSON.stringify(websiteData));
}

// Código completo para login, renderizado, edición, guardado y descarga del contenido
// (incluye manejo de secciones, tarjetas, items, settings)
// Por longitud se entrega por partes si lo deseas

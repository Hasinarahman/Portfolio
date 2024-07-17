const humburgerMenu = document.getElementById('humburger-menu');
const mobileMenu = document.getElementById('mobile-menu');

humburgerMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

document.querySelectorAll('#mobile-menu a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden')
  });
});

const aboutContent = document.getElementById('about-content');

const skills = {
  Skills: ['Code Review', 'Responsive Web Design', 'Clean Code', 'Version Control', 'Object-Oriented Programming', 'Problem Solving', 'Teamwork', 'Communication', 'Time Management'],
  tools: ['Git', 'GitHub'],
  interests: ['Designing', 'Reading Books', 'watch-Movies', 'Travel'],
  certification: [
    {name: 'Responsive Web Design', link: 'https://www.freecodecamp.org/certification/fcc091f1c4c-9c01-4976-a725-b5cdec383f6e/responsive-web-design', Image: './'},
    {name: 'JavaScript Algorithms and Data Structures', link: 'https://www.freecodecamp.org/certification/fcc091f1c4c-9c01-4976-a725-b5cdec383f6e/javascript-algorithms-and-data-structures-v8', Image: ''}
  ]
};

aboutContent.innerHTML = `
  <p>I am a web Developer with skills in:</p>
  <ul>
    <li>Profeesional_skills: ${skills.Skills.join(', ')};
    <li>Tools: ${skills.tools.join(', ')};
    <li>Things I interest: ${skills.interests.join(', ')}
  </ul>  
  <p>Certification:</p>
  <ul>
    ${skills.certification.map((certificate) => 
      `
        <li>
          <a href='${certificate.link}'>
            <img src='${certificate.Image}' alt='${certificate.name}'>
          </a>
        </li>
` ).join('')}
`;





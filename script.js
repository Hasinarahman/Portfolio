const humburgerMenu = document.getElementById('humburger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-btn');

humburgerMenu.addEventListener('click', () => {
  humburgerMenu.classList.toggle('hidden');
  closeBtn.classList.toggle('hiddden');
  mobileMenu.classList.toggle('hidden');
});

document.querySelectorAll('#mobile-menu a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    humburgerMenu.classList.toggle('hidden');
    closeBtn.classList.toggle('hiddden');
  });
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
    humburgerMenu.classList.toggle('hidden');
    closeBtn.classList.toggle('hiddden');
});










const aboutContent = document.getElementById('about-content');

const skills = {
  certification: [
    {name: 'Responsive Web Design', link: 'https://www.freecodecamp.org/certification/fcc091f1c4c-9c01-4976-a725-b5cdec383f6e/responsive-web-design', Image: './'},
    {name: 'JavaScript Algorithms and Data Structures', link: 'https://www.freecodecamp.org/certification/fcc091f1c4c-9c01-4976-a725-b5cdec383f6e/javascript-algorithms-and-data-structures-v8', Image: ''}
  ]
};

aboutContent.innerHTML = `
  <p id="intorduction">I'm Hasina Rahmani, a graduate of the Faculty of Computer Science with a passion for software development and graphic design. I've gained experience in both fields, working as a Social Media Poster Graphic Designer and developing my skills in JavaScript, CSS& HTML. You can find some of my best work in my portfolio.</p>  
  <p>Certification:</p>
  <ul>
    ${skills.certification.map((certificate) => 
      `
        <li>
          <a href='${certificate.link}'>
            <img src='${certificate.Image}' alt='${certificate.name}'>
          </a>
        </li>
` 
).join('')}
`;


/* adding skill using java*/
const skillContent = document.getElementById('skill-contant');

skillContent.innerHTML = `
  <div id="prog-lang">Programming Languages</div>
  <div id="lang">Html</div>
  <div id="lang">CSS</div>
  <div id="lang">JavaScript</div>

  <div id="all-skills">Professional Skills</div>
  <div id="lang">Critical thinking</div>
  <div id="lang">Clean Code</div>
  <div id="lang">Team Work</div>
  <div id="lang">Code Review</div>

  <div id="all-skills">Soft Skills </div>
  <div id="lang">Time Management</div>
  <div id="lang">Multitasking</div>
  
  <div id="all-skills">Soft Skills </div>
  <div id="lang">Time Management</div>
  <div id="lang">Multitasking</div>
  <div id="lang">Leadership</div>
  <div id="lang">Communication</div>
  <div id="lang">Adaptability</div>
  <div id="lang">Creativity</div>
  <div id="lang">Problem-solving</div>

  <div id="all-skills">Technical Skills</div>
  <div id="lang">Adobe Photoshop</div>
  <div id="lang">Adobe Illustrator</div>
  <div id="lang">Microsoft Office</div>

  <div id="all-skills">Additional Skills </div>
  <div id="lang">Social Media Management</div>
  <div id="lang">Multilingualism</div>
  <div id="lang">Public Speaking</div>
`;

/*adding project */













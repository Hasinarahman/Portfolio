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
    { name: 'Responsive Web Design', link: 'https://www.freecodecamp.org/certification/fcc091f1c4c-9c01-4976-a725-b5cdec383f6e/responsive-web-design', Image: './image/projects/freecodecomp certificate.PNG' },
    { name: 'JavaScript Algorithms and Data Structures', link: 'https://www.freecodecamp.org/certification/fcc091f1c4c-9c01-4976-a725-b5cdec383f6e/javascript-algorithms-and-data-structures-v8', Image: './image/projects/java certificate.PNG' },
  ],
};

aboutContent.innerHTML = `
  <p id="intorduction">I'm Hasina Rahmani, a graduate of the Faculty of Computer Science with a passion for
   software development and graphic design. I've gained experience in both fields, working as a Social Media Poster
   Graphic Designer and developing my skills in JavaScript, CSS& HTML,
   Actively i'm increasing my web developing skills to be a profissional web developer. You can find some of my best
   work in my 
   portfolio.</p>  
  <p id="certificate">My Certification:</p>
  <ul class="flex">
  ${skills.certification.map((certificate) =>
    `<div class="certificates-container">
        <a href='${certificate.link}'>
          <img src='${certificate.Image}' alt='${certificate.name}' class="certificates">
        </a>
      </div>
`)
    .join('')}
</ul>
`;

/* adding skill using java */
const skillContent = document.getElementById('skill-contant');

skillContent.innerHTML = `
 
 <div class="colum" id="div-lang">
  <div id="prog-lang">Programming Languages</div>
  <div id="lang">Html</div>
  <div id="lang">CSS</div>
  <div id="lang">JavaScript</div>
  </div>

  <div class="colum" id="div-pro">
  <div id="all-skills">Professional Skills</div>
  <div id="lang">Critical thinking</div>
  <div id="lang">Clean Code</div>
  <div id="lang">Team Work</div>
  <div id="lang">Code Review</div>
  </div>

  <div class="colum" id="div-soft">
  <div id="all-skills">Soft Skills </div>
  <div id="lang">Time Management</div>
  <div id="lang">Multitasking</div>
  <div id="lang">Leadership</div>
  <div id="lang">Communication</div>
  <div id="lang">Adaptability</div>
  <div id="lang">Creativity</div>
  <div id="lang">Problem-solving</div>
  </div>

  <div class="colum" id="div-technical">
  <div id="all-skills">Technical Skills</div>
  <div id="lang">Adobe Photoshop</div>
  <div id="lang">Adobe Illustrator</div>
  <div id="lang">Microsoft Office</div>
  </div>

  <div class="colum" id="div-add">
  <div id="all-skills">Additional Skills </div>
  <div id="lang">Social Media Management</div>
  <div id="lang">Multilingualism</div>
  <div id="lang">Public Speaking</div>
  </div>
`;

/* adding project */
const projectContainer = document.getElementById('project-container');
const projectPopup = document.getElementById('project-popup');
const closePopup = document.getElementById('close-popup');
const popupContent = document.getElementById('popup-content');

const projects = [
  {
    title: 'Personal Portfolio',
    longDescription: 'A personal portfolio is a collection of an individuals work, achievements, and skills, often showcased online to demonstrate their expertise and experience.',
    Image: 'image/projects/new pi.PNG',
    language: ['HTML', 'CSS'],
    liveLink: 'https://hasinarahman.github.io/personal-portfolio/',
    sourceLink: 'https://github.com/Hasinarahman/personal-portfolio',
  },
  {
    title: 'Palindrome Checker',
    longDescription: 'A Palindrome Checker app is a tool designed to determine whether a given word or phrase is a palindrome. A palindrome is a sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization. For example, madam,',
    Image: 'image/projects/palindrome.png',
    language: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://hasinarahman.github.io/Palindrome-checker/',
    sourceLink: 'https://github.com/Hasinarahman/Palindrome-checker',
  },
  {
    title: 'Numeral Converter',
    longDescription: 'A Roman Numeral Converter is a tool that converts numbers between Roman numerals and modern Arabic numerals. It allows users to enter either a Roman numeral (like XIV) or an Arabic numeral (like 14) and provides the corresponding value in the other format.',
    Image: 'image/projects/converter.PNG',
    language: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://hasinarahman.github.io/Roman-Numeral/',
    sourceLink: 'https://github.com/Hasinarahman/Roman-Numeral',
  },
  {
    title: 'Telephone Number Validator',
    longDescription: 'A Telephone Number Validator is an application that checks the validity of phone numbers according to specific rules and formats',
    Image: 'image/projects/telephon.PNG',
    language: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://hasinarahman.github.io/telephone-number-validator/',
    sourceLink: 'https://github.com/Hasinarahman/telephone-number-validator',
  },
  {
    title: 'Cash Register',
    longDescription: 'A cash register is a device used in retail settings to process sales transactions. It calculates the total cost of purchases, displays the amount due, and facilitates payment by handling cash, cards, or digital payments',
    Image: 'image/projects/cash register.PNG',
    language: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://hasinarahman.github.io/Cash-Register/',
    sourceLink: 'https://github.com/Hasinarahman/Cash-Register',
  },
  {
    title: 'Pokemon Search-app',
    longDescription: 'A Pokémon Search App is a handy tool for Pokémon enthusiasts that allows users to quickly search and find information about various Pokémon',
    Image: 'image/projects/pokemen.PNG',
    language: ['HTML", "CSS", "Javascript'],
    liveLink: 'https://hasinarahman.github.io/Pokemon-Search-App/',
    sourceLink: 'https://github.com/Hasinarahman/Pokemon-Search-App',
  },
];

projectContainer.innerHTML = projects.map(
  (project, index) => `
  <div class="project-card">
    <h3 id="project-title">${project.title}</h3>
    <img src="${project.Image}" id="project-img" />
    <button onclick='showPopup(${index})' id="project-button">Details</button>
  </div>
  `,
).join('');

function showPopup(index) {
  const project = projects[index];
  popupContent.innerHTML = `
  <h3 id="pop-title">${project.title}</h3>
  <img src="${project.Image}" id="pop-img" />
  <p id="pop-desc">${project.longDescription}</p>
  <p id="pop-tech">Languages: ${project.language.join(', ')}</p>
  <button id="pop-demo"><a href="${project.liveLink}" target="_blank">Link</a></button>
  <button id="pop-sourse"><a href="${project.sourceLink}" target="_blank">Source</a></button>
  `;
  projectPopup.classList.remove('hidden');
}

closePopup.addEventListener('click', () => {
  projectPopup.classList.add('hidden');
});

/* adding contact */

const form = document.getElementById('myform');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('massage');
const nameError = document.getElementById('name_error');
const emailError = document.getElementById('email_error');
const messageError = document.getElementById('message-error');

form.addEventListener('submit', (e) => {
  const emailChecker = /^[\w-]+@[a-z0-9\d-]+\.[a-z]{2,}$/;
  const hasUpperCase = /[A-Z]/.test(email.value);
  if (name.value === '' || name.value === null) {
    e.preventDefault();
    nameError.innerHTML = 'Name is required!';
  } else {
    nameError.innerHTML = '';
  }
  if (!email.value.match(emailChecker)) {
    e.preventDefault();
    emailError.innerText = 'Please enter a valid email address!';
  } else if (hasUpperCase) {
    e.preventDefault();
    emailError.innerHTML = 'Email should not contain capital letters.';
  } else {
    emailError.innerText = '';
  }
  if (message.value.length <= 8) {
    e.preventDefault();
    messageError.innerHTML = 'Please write a message!';
  } else {
    messageError.innerHTML = '';
  }
  if (form.submit) {
    localStorage.clear();
    form.submit();
    form.reset();
  }
});

const formFields = ['name', 'email', 'massage'];

formFields.forEach((field) => {
  const input = document.getElementById(field);
  input.value = localStorage.getItem(field) || '';
  input.addEventListener('input', () => {
    localStorage.setItem(field, input.value);
  });
});
showPopup();
const speakersList = document.querySelector('.speakers-list');
const closeBtn = document.querySelector('.modal-close');
const modalWindow = document.querySelector('.modal');
const hamburger = document.querySelector('.hamburger');
const home = document.querySelector('.nav-home');
const about = document.querySelector('.nav-about-us');
const aboutPage = document.querySelector('.about-us');
const homePage = document.querySelector('.home');
const activeLink = document.querySelector('.active');
const logo = document.querySelector('.brand');

const speakers = [
  {
    container: 'speaker',
    speakerHolder: 'speaker-holder',
    card: 'card',
    backface: 'olara@gmail.com',
    back: 'back',
    imageDetails: ['images/olara.jpg', 'yori bonger\'s image', 'speaker-image'],
    speakerBio: 'speaker-bio',
    h3Class: 'speaker-name',
    SpeakerName: 'Olara Peter',
    pOneClass: 'profession',
    pOneContent: 'Study masters in information technology at MakerereUniversity',
    pTwoClass: 'role',
    pTwoContent: 'Incident manager at MTN Uganda LTD. Interfaces with different',
  },
  {
    container: 'speaker',
    speakerHolder: 'speaker-holder',
    card: 'card',
    backface: 'betina@gmail.com',
    back: 'back',
    imageDetails: ['images/betina.jpg', 'yori bonger\'s image', 'speaker-image'],
    speakerBio: 'speaker-bio',
    h3Class: 'speaker-name',
    SpeakerName: 'Betina Nankya',
    pOneClass: 'profession',
    pOneContent: 'Study masters in information technology at MakerereUniversity',
    pTwoClass: 'role',
    pTwoContent: 'Incident manager at MTN Uganda LTD. Interfaces with different',
  },
  {
    container: 'speaker',
    speakerHolder: 'speaker-holder',
    card: 'card',
    backface: 'ludiya@gmail.com',
    back: 'back',
    imageDetails: ['images/ludiya.jpg', 'yori bonger\'s image', 'speaker-image'],
    speakerBio: 'speaker-bio',
    h3Class: 'speaker-name',
    SpeakerName: 'Ludiya Becca',
    pOneClass: 'profession',
    pOneContent: 'Study masters in information technology at MakerereUniversity',
    pTwoClass: 'role',
    pTwoContent: 'Incident manager at MTN Uganda LTD. Interfaces with different',
  },
  {
    container: 'speaker',
    speakerHolder: 'speaker-holder',
    card: 'card',
    backface: 'ming@gmail.com',
    back: 'back',
    imageDetails: ['images/ming.jpg', 'yori bonger\'s image', 'speaker-image'],
    speakerBio: 'speaker-bio',
    h3Class: 'speaker-name',
    SpeakerName: 'Ming Wan',
    pOneClass: 'profession',
    pOneContent: 'Study masters in information technology at MakerereUniversity',
    pTwoClass: 'role',
    pTwoContent: 'Incident manager at MTN Uganda LTD. Interfaces with different',
  },
  {
    container: 'speaker',
    speakerHolder: 'speaker-holder',
    card: 'card',
    backface: 'ojo@gmail.com',
    back: 'back',
    imageDetails: ['images/ojo.jpg', 'yori bonger\'s image', 'speaker-image'],
    speakerBio: 'speaker-bio',
    h3Class: 'speaker-name',
    SpeakerName: 'Ojo Nyal',
    pOneClass: 'profession',
    pOneContent: 'Study masters in information technology at MakerereUniversity',
    pTwoClass: 'role',
    pTwoContent: 'Incident manager at MTN Uganda LTD. Interfaces with different',
  },
  {
    container: 'speaker',
    speakerHolder: 'speaker-holder',
    card: 'card',
    backface: 'ojok@gmail.com',
    back: 'back',
    imageDetails: ['images/ojok.jpg', 'yori bonger\'s image', 'speaker-image'],
    speakerBio: 'speaker-bio',
    h3Class: 'speaker-name',
    SpeakerName: 'Ojok Patrick',
    pOneClass: 'profession',
    pOneContent: 'Study masters in information technology at MakerereUniversity',
    pTwoClass: 'role',
    pTwoContent: 'Incident manager at MTN Uganda LTD. Interfaces with different',
  },
];

function createSpeaker(index, ArrayOfSpeakers) {
  // create the div holding the speaker
  const speakerDiv = document.createElement('div');
  speakerDiv.classList.add(ArrayOfSpeakers[index].container);

  // create div holding speaker image
  const speakerHolder = document.createElement('div');
  speakerHolder.classList.add(ArrayOfSpeakers[index].speakerHolder);

  // create the card
  const card = document.createElement('div');
  card.classList.add(ArrayOfSpeakers[index].card);
  speakerHolder.appendChild(card);

  // Add the speaker image to the image tag/image tag is front face also
  const imageTag = document.createElement('img');
  const [src, alt, className] = ArrayOfSpeakers[index].imageDetails;
  imageTag.src = src;
  imageTag.alt = alt;
  imageTag.classList.add(className);

  // Add the card back face
  const backFace = document.createElement('p');
  backFace.classList.add(ArrayOfSpeakers[index].back);
  backFace.textContent = ArrayOfSpeakers[index].backface;
  card.appendChild(backFace);

  //  Append  image to speaker holder & speaker holder to speaker div
  card.appendChild(imageTag);
  speakerDiv.appendChild(speakerHolder);
  const speakerBiodata = document.createElement('div');
  speakerBiodata.classList.add(ArrayOfSpeakers[index].speakerBio);

  //  Add Speaker name
  const heading3 = document.createElement('h3');
  heading3.classList.add(ArrayOfSpeakers[index].h3Class);
  heading3.textContent = ArrayOfSpeakers[index].SpeakerName;
  speakerBiodata.appendChild(heading3);

  //  Add paragraph 1
  const paragraphOne = document.createElement('p');
  paragraphOne.classList.add(ArrayOfSpeakers[index].pOneClass);
  paragraphOne.textContent = ArrayOfSpeakers[index].pOneContent;
  speakerBiodata.appendChild(paragraphOne);

  // Add paragraph 2
  const paragraphTwo = document.createElement('p');
  paragraphTwo.classList.add(ArrayOfSpeakers[index].pTwoClass);
  paragraphTwo.textContent = ArrayOfSpeakers[index].pTwoContent;
  speakerBiodata.appendChild(paragraphTwo);
  speakerDiv.appendChild(speakerBiodata);
  speakersList.appendChild(speakerDiv);
}

for (let i = 0; i < speakers.length; i += 1) {
  createSpeaker(i, speakers);
}

closeBtn.addEventListener('click', () => {
  modalWindow.classList.add('hidden');
});

hamburger.addEventListener('click', () => {
  modalWindow.classList.remove('hidden');
});

home.addEventListener('click', () => {
  modalWindow.classList.add('hidden');
  aboutPage.classList.add('hidden');
  homePage.classList.remove('hidden');
});

about.addEventListener('click', () => {
  modalWindow.classList.add('hidden');
  aboutPage.classList.remove('hidden');
  homePage.classList.add('hidden');
});

activeLink.addEventListener('click', () => {
  aboutPage.classList.remove('hidden');
  homePage.classList.add('hidden');
});

logo.addEventListener('click', () => {
  aboutPage.classList.add('hidden');
  homePage.classList.remove('hidden');
});

const speakersList = document.querySelector('.speakers-list');
const closeBtn = document.querySelector('.modal-close');
const modalWindow = document.querySelector('.modal');
const hamburger = document.querySelector('.hamburger');
const home = document.querySelector('.nav-home');
const about = document.querySelector('.nav-about-us');
const aboutPage = document.querySelector('.about-us');
const homePage = document.querySelector('.home');
const activeLink = document.querySelector('.active');
const logo = document.querySelector('.brand')

const speakers = [
	{
			container : 'speaker',
			speakerHolder : 'speaker-holder',
			imageDetails : ['images/speaker_01.png', 'yori bonger\'s image', 'speaker-image'], 
			speakerBio : 'speaker-bio',
			h3Class : 'speaker-name',
			SpeakerName : 'Yuri gogarin',
			pOneClass: 'profession',
			pOneContent : 'Study masters in information technology at MakerereUniversity',
			pTwoClass : 'role',
			pTwoContent : 'Incident manager at MTN Uganda LTD. Interfaces with different'

	},
	{
		container : 'speaker',
		speakerHolder : 'speaker-holder',
		imageDetails : ['images/speaker_01.png', 'yori bonger\'s image', 'speaker-image'], 
		speakerBio : 'speaker-bio',
		h3Class : 'speaker-name',
		SpeakerName : 'Yuri gogarin',
		pOneClass: 'profession',
		pOneContent : 'Study masters in information technology at MakerereUniversity',
		pTwoClass : 'role',
		pTwoContent : 'Incident manager at MTN Uganda LTD. Interfaces with different'

	},
	{
		container : 'speaker',
		speakerHolder : 'speaker-holder',
		imageDetails : ['images/speaker_01.png', 'yori bonger\'s image', 'speaker-image'], 
		speakerBio : 'speaker-bio',
		h3Class : 'speaker-name',
		SpeakerName : 'Yuri gogarin',
		pOneClass: 'profession',
		pOneContent : 'Study masters in information technology at MakerereUniversity',
		pTwoClass : 'role',
		pTwoContent : 'Incident manager at MTN Uganda LTD. Interfaces with different'

	},
{
		container : 'speaker',
		speakerHolder : 'speaker-holder',
		imageDetails : ['images/speaker_01.png', 'yori bonger\'s image', 'speaker-image'], 
		speakerBio : 'speaker-bio',
		h3Class : 'speaker-name',
		SpeakerName : 'Yuri gogarin',
		pOneClass: 'profession',
		pOneContent : 'Study masters in information technology at MakerereUniversity',
		pTwoClass : 'role',
		pTwoContent : 'Incident manager at MTN Uganda LTD. Interfaces with different'

	},
	{
		container : 'speaker',
		speakerHolder : 'speaker-holder',
		imageDetails : ['images/speaker_01.png', 'yori bonger\'s image', 'speaker-image'], 
		speakerBio : 'speaker-bio',
		h3Class : 'speaker-name',
		SpeakerName : 'Yuri gogarin',
		pOneClass: 'profession',
		pOneContent : 'Study masters in information technology at MakerereUniversity',
		pTwoClass : 'role',
		pTwoContent : 'Incident manager at MTN Uganda LTD. Interfaces with different'
	},
	{
		container : 'speaker',
		speakerHolder : 'speaker-holder',
		imageDetails : ['images/speaker_01.png', 'yori bonger\'s image', 'speaker-image'], 
		speakerBio : 'speaker-bio',
		h3Class : 'speaker-name',
		SpeakerName : 'Yuri gogarin',
		pOneClass: 'profession',
		pOneContent : 'Study masters in information technology at MakerereUniversity',
		pTwoClass : 'role',
		pTwoContent : 'Incident manager at MTN Uganda LTD. Interfaces with different'

	}
    
];


function createSpeaker(index, ArrayOfSpeakers){
	// create the div holding the speaker
	const speakerDiv = document.createElement('div');
	speakerDiv.classList.add(ArrayOfSpeakers[index].container);
	// create div holding speaker image
	const speakerHolder = document.createElement('div');
	speakerHolder.classList.add(ArrayOfSpeakers[index].speakerHolder);
	// Add the speaker image to the image tag
	const imageTag = document.createElement('img');
	imageTag.src = ArrayOfSpeakers[index].imageDetails[0];
	imageTag.alt = ArrayOfSpeakers[index].imageDetails[1];
	imageTag.classList.add(ArrayOfSpeakers[index].imageDetails[2]);

	//  Append  image to speaker holder & speaker holder to speaker div
	speakerHolder.appendChild(imageTag);
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
	paragraphTwo.textContent = ArrayOfSpeakers[index].pTwoContent
	speakerBiodata.appendChild(paragraphTwo);
	speakerDiv.appendChild(speakerBiodata);
	speakersList.appendChild(speakerDiv);
}


for(let i = 0; i < speakers.length; i++) {
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

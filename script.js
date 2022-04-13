const speakersList = document.querySelector('.speakers-list');

const speakers = [
    {
        container : 'speaker',
        speakerHolder : 'speaker-holder',
        imageDetails : ['images/speaker_01.png', 'yori bonger\'s image', 'speaker-image'], 
        /* ImageDetails : [src, alt, class] */
        speakerBio : 'speaker-bio',
        h3Class : 'speaker-name',
        pOneClass: 'profession',
        pOneContent : 'Study masters in information technology at MakerereUniversity',
        pTwoClass : 'role',
        pTwoContent : 'Incident manager at MTN Uganda LTD. Interfaces with different'

    },
    {
        container : 'speaker',
        speakerHolder : 'speaker-holder',
        imageDetails : ['images/speaker_01.png', 'yori bonger\'s image', 'speaker-image'], 
        /* ImageDetails : [src, alt, class] */
        speakerBio : 'speaker-bio',
        h3Class : 'speaker-name',
        pOneClass: 'profession',
        pOneContent : 'Study masters in information technology at MakerereUniversity',
        pTwoClass : 'role',
        pTwoContent : 'Incident manager at MTN Uganda LTD. Interfaces with different'

    },
    {
        container : 'speaker',
        speakerHolder : 'speaker-holder',
        imageDetails : ['images/speaker_01.png', 'yori bonger\'s image', 'speaker-image'], 
        /* ImageDetails : [src, alt, class] */
        speakerBio : 'speaker-bio',
        h3Class : 'speaker-name',
        pOneClass: 'profession',
        pOneContent : 'Study masters in information technology at MakerereUniversity',
        pTwoClass : 'role',
        pTwoContent : 'Incident manager at MTN Uganda LTD. Interfaces with different'

    }
];


function createSpeaker(index, ArrayOfSpeakers){
    console.log(ArrayOfSpeakers[index].container)
    // console.log(ArrayOfSpeakers[index]);

    const speakerDiv = document.createElement('div');
    speakerDiv.classList.add(ArrayOfSpeakers[index].container);

    const speakerHolder = document.createElement('div');
    speakerHolder.classList.add(ArrayOfSpeakers[index].speakerHolder);

    const imageTag = document.createElement('img');
    imageTag.src = ArrayOfSpeakers[index].imageDetails[0];
    imageTag.alt = ArrayOfSpeakers[index].imageDetails[1];
    imageTag.classList.add(ArrayOfSpeakers[index].imageDetails[2]);

    const speakerBiodata = document.createElement('div');
    speakerBiodata.classList.add(ArrayOfSpeakers[index].speakerBio);

    const heading3 = document.createElement('h3');
    heading3.classList.add(ArrayOfSpeakers[index].h3Class);

    const paragraphOne = document.createElement('p');
    paragraphOne.classList.add(ArrayOfSpeakers[index].pOneClass);
    paragraphOne.textContent = ArrayOfSpeakers[index].pOneContent


    const paragraphTwo = document.createElement('p');
    paragraphTwo.classList.add(ArrayOfSpeakers[index].pTwoClass);
    paragraphTwo.textContent = ArrayOfSpeakers[index].pTwoContent


    speakerBiodata.appendChild(paragraphTwo);
    speakerBiodata.appendChild(paragraphOne);
    speakerBiodata.appendChild(heading3);
    speakerDiv.appendChild(speakerBiodata);
    speakerHolder.appendChild(imageTag);
    speakerDiv.appendChild(speakerHolder);

    speakersList.appendChild(speakerDiv);


}

//createSpeaker(0, speakers)
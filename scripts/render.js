let jobstest = []


function renderjobs(arr){
    const jobsSpace = document.getElementById('vacancy')
    
    arr.map((vacancy)=>{
        const newJob = criarJobCard(vacancy)

        jobsSpace.appendChild(newJob)
    })
}

function criarJobCard(objeto){
    const jobId   = objeto.id;
    const jobName = objeto.title;
    const jobLoc  = objeto.enterprise;
    const jobCity = objeto.location;
    const jobDesc = objeto.descrition;
    const jobMod  = objeto.modalities[0];

    const cardli     = document.createElement('li');
    cardli.classList = 'card-job'

    const cardtitle     = document.createElement('p');
    cardtitle.classList = 'title-4';
    cardtitle.innerText = jobName;

    const locJob     = document.createElement('div');
    locJob.classList = 'job-loc';

    const enterprise     = document.createElement('p');
    enterprise.classList = 'text-3';
    enterprise.innerText = jobLoc;

    const city     = document.createElement('p');
    city.classList = 'text-3';
    city.innerText = jobCity;

    const descrition     = document.createElement('p');
    descrition.classList = 'text-2'
    descrition.innerText = jobDesc;

    const footer =  document.createElement('div');
    footer.classList = 'job-buttons';

    const modality = document.createElement('p');
    modality.classList = 'text-3';
    modality.innerText = jobMod;

    const aplyOrRem = document.createElement('button');
    aplyOrRem.classList = 'aply';
    aplyOrRem.id = `ap-${jobId}`;

    if(jobsAlExist(objeto)>=0){
        aplyOrRem.innerText = 'Remover Candidaruta'
    }else{
        aplyOrRem.innerText = 'Candidatar'
    }

    aplyOrRem.addEventListener('click',()=>{
        addOrRemove(objeto, aplyOrRem)
        renderAplycation(getAplyStorage())
        showAlert()
    })

    locJob.append(enterprise, city);

    footer.append(modality, aplyOrRem);

    cardli.append(cardtitle, locJob, descrition, footer)

    return cardli

}

renderjobs(jobsData)


function renderAplycation(arr){
    const jobsaplic = document.querySelector('#select')
    
    jobsaplic.innerHTML = "";
   
    arr.forEach((objeto)=>{
        jobsaplic.insertAdjacentHTML(
            "beforeend",
            `<li class="card-aply" id="vg-${objeto.id}">
                <div class="aply-reader" >
                    <p class="title-5b">${objeto.title}</p>
                    <button class="remove-aply" onclick={removeFronAply(${objeto.id})} onclick={showAlert()} id="${objeto.id}"><i class="fa-solid fa-trash-can"></i></button>
                </div>
                <div class="aply-foot">
                    <p class="text-3">${objeto.enterprise}</p>
                    <p class="text-3">${objeto.location}</p>
                </div>
            </li>`
        )
        
    });
}

function removeFronAply(id, jobs=getAplyStorage()){
    const findAplycation = jobs.findIndex((objeto)=>objeto.id===id)
    const buttonjob = document.getElementById(`ap-${id}`)
    const newAplication = [...jobs]

    newAplication.splice(findAplycation, 1)
    buttonjob.innerText = "Candidatar"

    localStorage.setItem("@webwomen:aplications", JSON.stringify(newAplication))

    return renderAplycation(getAplyStorage())

}



renderAplycation(getAplyStorage())

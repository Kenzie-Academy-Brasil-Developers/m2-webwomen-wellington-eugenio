/*
<li class="card-job">
                <p class="title-4">Nome da vaga aplicada</p>
                <div class="job-loc">
                  <p class="text-3">Nome da empresa</p>
                  <p class="text-3">cidade</p>
                </div>
                <p class="text-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
                <div class="job-buttons">
                  <span class="">
                    <p class="text-3 job-type">Home Office, Presencial</p>
                  </span>
                <button class="aply" id="aply-job">Candidatar</button>
                </div>
              </li>


                <li class="card-aply" id="vg-id">
                  <div class="aply-reader" >
                    <p class="title-5b">nome da vaga a ser aplicada</p>
                    <button class="remove-aply" id="rm-1"><i class="fa-solid fa-trash-can"></i></button>
                  </div>
                  <div class="aply-foot">
                    <p class="text-3">nome da empresa</p>
                    <p class="text-3">cidade</p>
                  </div>
                </li>


   cardli.innerHTML =
                `<p class="title-4">${jobName}</p>
                <div class="job-loc">
                  <p class="text-3">${jobLoc}</p>
                  <p class="text-3">${jobCity}</p>
                </div>
                <p class="text-2">${jobDesc}</p>
                <div class="job-buttons">
                    <p class="text-3 job-type">${jobMod}</p>
                    <button class="aply" id="ap-${jobId}">Candidatar</button>
                </div>`




              */

                /*
function creatApliCard(offer){
    const id         = offer.id;
    const title      = offer.title;
    const enterprise = offer.enterprise;
    const city       = offer.location;

    const li     = document.createElement('li');
    li.classList =  'card-aply';

    const header     = document.createElement('div');
    header.classList = 'aply-reader';

    const jobTiTle     = document.createElement('p');
    jobTiTle.classList = 'title-5b';
    jobTiTle.innerText = title;

    const button     = document.createElement('button');
    button.classList = 'remove-aply';
    button.id        = `rm-${id}`;
    button.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    
    button.addEventListener('click',(event)=>{
        const tagli = event.path[3]
        tagli.remove()
        jobstest.splice(id, 1)
        
    })

    header.append(jobTiTle, button);

    const footer = document.createElement('div');
    footer.classList = 'aply-foot';
    
    const enter = document.createElement('p');
    enter.classList = 'text-3';
    enter.innerText = enterprise;
    
    const location = document.createElement('p');
    location.classList = 'text-3';
    location.innerText = city;

    footer.append(enter, location)
    
    li.append(header, footer)

    return li;
}
*/
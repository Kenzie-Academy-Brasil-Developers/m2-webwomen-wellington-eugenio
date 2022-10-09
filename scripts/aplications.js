function getAplyStorage(){
   return JSON.parse(localStorage.getItem("@webwomen:aplications")) || []
}


function jobsAlExist(job){
    return getAplyStorage().findIndex(objeto => objeto.title === job.title)
}

function addOrRemove(job, button){
    const jobCurrent = jobsAlExist(job)
    let jobsAply =  getAplyStorage()

    if(jobCurrent < 0){
        jobsAply = [...jobsAply, job]
        button.innerText = 'Remover Candidatura'
    }else{
        jobsAply.splice(jobCurrent, 1)
        button.innerText = 'Candidatar'
    }

    localStorage.setItem("@webwomen:aplications", JSON.stringify(jobsAply))
}
const displayCountJob = document.getElementById("total-jobs-number");

/*  Counting for Total job, interview & rejection */
const totalJobs = document.querySelectorAll(".job").length;
displayCountJob.textContent = Number(totalJobs) + ' Jobs';



/* Get All DOM Elements by their Attributes */
const calculateJobs = document.getElementById('all-job-container');
const mainContainer = document.querySelector('main');
console.log(mainContainer);

// const allCardList = document.querySelector('job-container');
const allCardList = document.getElementById('all-job-bank');
const filerSection = document.getElementById('filtered-section');

/* Counting total interview and rejection button */
const interviewButtons = document.querySelectorAll(".interview-btn");
const rejectButtons = document.querySelectorAll(".reject-btn");

/*  Display counting Total job,interview & rejection */
let totalJobDisplay = document.getElementById("total-jobs");
let totalInterviewDisplay = document.getElementById("total-interview");
let totalRejectedDisplay = document.getElementById("total-rejected");
console.log(totalJobDisplay,totalInterviewDisplay,totalRejectedDisplay);


/* Counting total job by child nodes */
const totalJobCount = document.getElementById('all-job-bank');
console.log(totalJobCount.children.length)




// Calculate all jobs display
let interviewList = [];
let rejectList = [];
let currentStatus = 'All';

function calculationJobs(){
  totalJobDisplay.innerText = totalJobCount.children.length;
  // interviewButtons.innerText = interviewList.length;
  totalInterviewDisplay.innerText = interviewList.length;
  // rejectButtons.innerText = rejectList.length;
  totalRejectedDisplay.innerText = rejectList.length;
}

/* Calling function for all calculation */
calculationJobs()


/* Get all Tabs for switching toggle */
const allListBtn = document.getElementById('all-job');
const interviewListBtn = document.getElementById('interview-call-tab');
const rejectListBtn = document.getElementById('reject-call-tab');

// Job status filter by toggle method by Even Delegation
function filterJobs(id) {
 console.log(id)
 
 allListBtn.classList.remove('bg-blue-600','text-white');
 interviewListBtn.classList.remove('bg-white','text-black');
 rejectListBtn.classList.remove('bg-white','text-black');

 allListBtn.classList.add('bg-gray-300','text-black');
 interviewListBtn.classList.add('bg-gray-300','text-black');
 rejectListBtn.classList.add('bg-gray-300','text-black');

 const selected = document.getElementById(id);
 currentStatus = id;
//  console.log(selected)

 if(id === 'all-job'){
  selected.classList.remove('bg-gray-300','text-black')
  selected.classList.add('bg-blue-600','text-white');
} 
 else if(id ==='interview-call-tab'){
  selected.classList.remove('bg-gray-300','text-black')
  selected.classList.add('bg-green-400','text-neutral')
 }
 else if(id==='reject-call-tab'){
  selected.classList.remove('bg-gray-300','text-black')
  selected.classList.add('bg-red-400','text-neutral')
 }

 /* Updating job counting */
 updateTotalJobsNumber();

/* It Help filter by status and send to respective tab */
if(id ==='interview-call-tab'){
  allCardList.classList.add('hidden');
  filerSection.classList.remove('hidden');
  renderInterviewJobsCall();
}
else if(id === 'all-job'){
  allCardList.classList.remove('hidden');
  filerSection.classList.add('hidden');
}
else if(id ==='reject-call-tab'){
  allCardList.classList.add('hidden');
  filerSection.classList.remove('hidden');
  renderRejectJobsCall();
}
 
}

/* This function update total job number */
function updateTotalJobsNumber() {

  if(currentStatus === 'interview-call-tab'){
    displayCountJob.textContent = interviewList.length + ' Interview Jobs';
  }
  else if(currentStatus === 'reject-call-tab'){
    displayCountJob.textContent = rejectList.length + ' Rejected Jobs';
  }
  else {
    const totalAllJobs = document.querySelectorAll('#all-job-bank .job').length;
    displayCountJob.textContent = totalAllJobs + ' Jobs Available';
  }
}


/* Manage Tab by Event Bubbling */
mainContainer.addEventListener('click',function(event){
// console.log(event.target.parentNode.parentNode.parentNode);

  if(event.target.classList.contains('interview-btn')){
  // const parentNode = event.target.parentNode.parentNode.parentNode;
  const parentNode = event.target.closest('.job');
  const jobTitle = parentNode.querySelector(".job-title").innerText;
  const jobPosition = parentNode.querySelector(".job-position").innerText;
  const jobLocation = parentNode.querySelector(".job-location").innerText;
  const statusInfo= parentNode.querySelector(".status-not-apply").innerText;
  const jobDescription = parentNode.querySelector(".job-description").innerText;
  const interviewInfo = parentNode.querySelector(".interview-btn").innerText;
  const rejectInfo = parentNode.querySelector(".reject-btn").innerText;
  // const deleteIMG = parentNode.querySelector(".delete-img").innerText;
 
  parentNode.querySelector(".status-not-apply").innerText = 'INTERVIEW';
  // console.log(jobTitle,jobPosition,jobLocation,statusInfo,jobDescription,interviewInfo,rejectInfo);
  const cardInfo = {
    jobTitle,
    jobPosition,
    jobLocation,
    statusInfo:'INTERVIEW',
    statusClass: 'bg-green-100 text-green-700',
    jobDescription,
    interviewInfo,
    rejectInfo,
    
  };
  // console.log(cardInfo);
  const jobList = interviewList.find(item=> item.jobTitle == cardInfo.jobTitle);
   
 if(!jobList) {
    interviewList.push(cardInfo);
  }

  console.log(interviewList);
  
 

/* Release and swap job interview to reject */
// interviewList = interviewList.filter(item=> item.jobTitle != cardInfo.jobTitle);
rejectList = rejectList.filter(item => item.jobTitle != cardInfo.jobTitle);

calculationJobs();
updateTotalJobsNumber();

if(currentStatus == 'reject-call-tab'){
  renderRejectJobsCall();
}

  
}

else if(event.target.classList.contains('reject-btn')){
  // const parentNode = event.target.parentNode.parentNode.parentNode;
  const parentNode = event.target.closest('.job');
  const jobTitle = parentNode.querySelector(".job-title").innerText;
  const jobPosition = parentNode.querySelector(".job-position").innerText;
  const jobLocation = parentNode.querySelector(".job-location").innerText;
  const statusInfo= parentNode.querySelector(".status-not-apply").innerText;
  const jobDescription = parentNode.querySelector(".job-description").innerText;
  const interviewInfo = parentNode.querySelector(".interview-btn").innerText;
  const rejectInfo = parentNode.querySelector(".reject-btn").innerText;
  // const deleteIMG = parentNode.querySelector(".delete-img").innerText;
 
  parentNode.querySelector(".status-not-apply").innerText = 'REJECTED';
  // console.log(jobTitle,jobPosition,jobLocation,statusInfo,jobDescription,interviewInfo,rejectInfo);
  const cardInfo = {
    jobTitle,
    jobPosition,
    jobLocation,
    statusInfo:'REJECTED',
    statusClass: 'bg-red-100 text-red-700',
    jobDescription,
    interviewInfo,
    rejectInfo,
   
  };
  // console.log(cardInfo);
  const jobList = rejectList.find(item=> item.jobTitle == cardInfo.jobTitle)
   
 if(!jobList) {
  rejectList.push(cardInfo);
  }
  console.log(rejectList);
  
 
    /* Release and swap job reject to interview  */
  interviewList = interviewList.filter(item => item.jobTitle != cardInfo.jobTitle);

  calculationJobs();
  updateTotalJobsNumber();
  
  if(currentStatus === 'interview-call-tab'){
    renderInterviewJobsCall();
 }

}

/* Delete job by selection delete icon image */
else if(event.target.classList.contains('delete-img')){

  const jobCard = event.target.closest('.job');
  // console.log(jobCard);

  // Get job title before removing
  const jobTitle = jobCard.querySelector('.job-title').innerText;
  // console.log(jobTitle);

  // Remove from interview list
  interviewList = interviewList.filter(item => item.jobTitle !== jobTitle);
  // console.log(interviewList);
  // Remove from reject list
  rejectList = rejectList.filter(item => item.jobTitle !== jobTitle);
  // console.log(rejectList);

  // Remove from DOM
  jobCard.remove();

  // Update counters
  calculationJobs();
  updateTotalJobsNumber();

  // Re-render filtered section if needed
  if(currentStatus === 'interview-call-tab'){
      renderInterviewJobsCall();
  }
  else if(currentStatus === 'reject-call-tab'){
      renderRejectJobsCall();
  }
}

})

/* Rendering on Interview section  */
function renderInterviewJobsCall(){
  filerSection.innerHTML= '';

/* If Interview tab has no job */
  if (interviewList.length === 0) {

    let div2 = document.createElement('div');
    div2.className = 'hero bg-base-200 min-h-screen py-6 mx-auto';

    div2.innerHTML = `
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-3xl font-bold">No jobs available</h1>
          <p class="py-4">
            Check back soon for new job opportunities
          </p>
        </div>
      </div>
    `;

    filerSection.appendChild(div2);
    return; 
  } 

  /* About to Interview call job */   
  for(let interview of interviewList){
    console.log(interview);
 
let div = document.createElement('div');

div.className = `
  card job bg-base-100 shadow-md rounded-2xl 
  p-6 space-y-4 hover:shadow-lg transition
`;

div.innerHTML = `
  <!-- Top Section -->
  <div class="flex justify-between items-start">

    <!-- Left Content -->
    <div class="space-y-2">

      <h2 class="text-xl font-semibold job-title">
        ${interview.jobTitle}
      </h2>

      <p class="text-gray-700">
        ${interview.jobPosition}
      </p>

      <p class="text-sm text-gray-700">
        ${interview.jobLocation}
      </p>

      <!-- Status Badge -->
      <span class="
        inline-block px-3 py-1 text-sm 
        bg-green-400 text-green-900 
        rounded-md font-medium
      ">
        ${interview.statusInfo}
      </span>

    </div>

    <!-- Delete Icon -->
    <img 
      src="./delete-icon.png"
      class="w-8 h-8 delete-img cursor-pointer opacity-70 hover:opacity-100 transition"
      alt="delete"
    />

  </div>

  <!-- Description -->
  <p class="text-gray-700 leading-relaxed">
    ${interview.jobDescription}
  </p>

  <!-- Action Buttons -->
  <div class="flex gap-3">
    <button 
      class="btn btn-outline btn-success interview-btn">
      ${interview.interviewInfo}
    </button>

    <button 
      class="btn btn-outline btn-error reject-btn">
      ${interview.rejectInfo}
    </button>
  </div>
`;
filerSection.appendChild(div)
  }


}

/* Rendering on Rejection section  */
function renderRejectJobsCall(){
  filerSection.innerHTML= '';

/* If Reject tab has no job */
  if (rejectList.length === 0) {

    let div2 = document.createElement('div');
    div2.className = 'hero bg-base-200 min-h-screen py-6 mx-auto';

    div2.innerHTML = `
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-3xl font-bold">No jobs available</h1>
          <p class="py-4">
            Check back soon for new job opportunities
          </p>
        </div>
      </div>
    `;

    filerSection.appendChild(div2);
    return; 
  }

   /* About to Reject jobs */            
   for(let reject of rejectList){
    console.log(reject);
 
    let div = document.createElement('div');

div.className = `
  card job bg-base-100 shadow-md rounded-2xl 
  p-6 space-y-4 hover:shadow-lg transition
`;

div.innerHTML = `
  <!-- Top Section -->
  <div class="flex justify-between items-start">

    <!-- Left Content -->
    <div class="space-y-2">

      <h2 class="text-xl font-semibold job-title">
        ${reject.jobTitle}
      </h2>

      <p class="text-gray-700">
        ${reject.jobPosition}
      </p>

      <p class="text-sm text-gray-700">
        ${reject.jobLocation}
      </p>

      <!-- Status Badge -->
      <span class="
        inline-block px-3 py-1 text-sm 
        bg-red-300 text-red-900 
        rounded-md font-medium
      ">
        ${reject.statusInfo}
      </span>

    </div>

    <!-- Delete Icon -->
    <img 
      src="./delete-icon.png"
      class="w-8 h-8 delete-img cursor-pointer opacity-70 hover:opacity-100 transition"
      alt="delete"
    />

  </div>

  <!-- Description -->
  <p class="text-gray-700 leading-relaxed">
    ${reject.jobDescription}
  </p>

  <!-- Action Buttons -->
  <div class="flex gap-3">
    <button 
      class="btn btn-outline btn-success interview-btn">
      ${reject.interviewInfo}
    </button>

    <button 
      class="btn btn-outline btn-error reject-btn">
      ${reject.rejectInfo}
    </button>
  </div>
`;
 
filerSection.appendChild(div)
   }
}


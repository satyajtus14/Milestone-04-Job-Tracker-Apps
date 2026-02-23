
const totalJobs = document.querySelectorAll(".job").length;
const totalJobDisplay = document.getElementById("total-jobs");
const totalInterviewDisplay = document.getElementById("total-interview");
const totalRejectedDisplay = document.getElementById("total-rejected");

totalJobDisplay.textContent = totalJobs;

let interviewCount = 0;
let rejectedCount = 0;

const interviewButtons = document.querySelectorAll(".interview-btn");
const rejectButtons = document.querySelectorAll(".reject-btn");

for (const button of interviewButtons) {
  button.addEventListener("click", function () {
    const jobCard = button.closest(".job");

    if (jobCard.dataset.status) return; // prevent double selection

    jobCard.dataset.status = "interview";

    interviewCount++;
    totalInterviewDisplay.textContent = interviewCount;

//     // Hide action buttons
    jobCard.querySelector(".interview-btn").classList.add("hidden");
    jobCard.querySelector(".reject-btn").classList.add("hidden");

    // Show selected badge
    jobCard.querySelector(".interview-selected").classList.remove("hidden");
  });
}

for (const button of rejectButtons) {
  button.addEventListener("click", function () {
    const jobCard = button.closest(".job");

    if (jobCard.dataset.status) return;

    jobCard.dataset.status = "rejected";

    rejectedCount++;
    totalRejectedDisplay.textContent = rejectedCount;

    jobCard.querySelector(".interview-btn").classList.add("hidden");
    jobCard.querySelector(".reject-btn").classList.add("hidden");

    jobCard.querySelector(".reject-selected").classList.remove("hidden");
  });
}

 /* Manage Status information by selecting interview and reject button  */
for (const button of interviewButtons) {
  button.addEventListener("click", function () {

    const jobCard = button.closest(".job");

    const statusLabel = jobCard.querySelector(".status-label");

    // Update status text
   
    statusLabel.textContent = "INTERVIEW";
    statusLabel.classList.remove("bg-gray-300");
    statusLabel.classList.add("bg-green-400");

//     // Hide action buttons
    jobCard.querySelector(".interview-btn").classList.add("hidden");
    jobCard.querySelector(".reject-btn").classList.add("hidden");
  });
}

for (const button of rejectButtons) {
  button.addEventListener("click", function () {

    const jobCard = button.closest(".job");

    const statusLabel = jobCard.querySelector(".status-label");

// Update status text
    
          statusLabel.textContent = "REJECTED";
          statusLabel.classList.remove("bg-gray-300");
          statusLabel.classList.add("bg-red-400");
  
 
    
    if(statusLabel.textContent = "REJECTED"){
        statusLabel.classList.remove("bg-gray-300");
        statusLabel.classList.add("bg-red-400");
        }
        else
        {
            statusLabel.classList.add("bg-gray-300")
        }

    jobCard.querySelector(".interview-btn").classList.add("hidden");
    jobCard.querySelector(".reject-btn").classList.add("hidden");
  });
}

const tabContainer = document.getElementById("unavailable-job-container");

tabContainer.addEventListener("click", function (event) {
  

  // if (event.target.id === "all-job") {
  //   const totalJobList = document.getElementById('all-job-container')
  //   console.log(totalJobList);
  // }

  if (event.target.id === "interview-call-tab") {
    console.log(interviewButtons);
  }

  if (event.target.id === "reject-call-tab") {
    console.log(totalRejectedDisplay);
  }
});

// Create No available form 
// document.getElementById("interview-call-tab").addEventListener("click", function () {

//     // const container = document.getElementById("job-details");
//     const container = document.getElementById("unavailable-job-container");
  
    // Remove old message if exists
/*     const oldMessage = document.getElementById("No Jobs");
    if (oldMessage) {
      oldMessage.remove();
    } */
  
    // Check if no interview jobs
    if (interviewCount === 0) {
  
      const newDiv = document.createElement("div");
      newDiv.id = "No Jobs";
      newDiv.classList.add(
        "bg-base-200",
        "py-10",
        "text-center",
        "rounded-xl"
      );
  
      const image = document.createElement("img");
      image.src = "./../nojob-icon.png";
      image.alt = "No job Icon";
      image.classList.add("w-24", "mx-auto", "mb-4");
  
      const heading = document.createElement("h1");
      heading.textContent = "No Interview Jobs Available";
      heading.classList.add("text-3xl", "font-bold");
  
      newDiv.append(image, heading);
  
      container.appendChild(newDiv);
    }

  
  // });
// check the filtered jobs
    
    // const interviewJobs = jobs.filter(job => job.dataset.status === "interview");
    // const interviewJobs = [];

    // for (const job of jobs) {
    //   if (job.dataset.status === "interview") {
    //     interviewJobs.push(job);
    //   }
    // }
    // for (const job of allJobs) {

      // if (job.dataset.status === "interview") {
        
      //   // console.log(job.innerHTML());

      //   job.classList.remove("hidden");   // Show only interview jobs
      // } else {
      //   job.classList.add("hidden");      // Hide others
      // }

    // }
const totalJobs = document.querySelectorAll(".job").length;
const totalJobDisplay = document.getElementById("total-jobs");
const totalInterviewDisplay = document.getElementById("total-interview");
const totalRejectedDisplay = document.getElementById("total-rejected");
const displayCountjob = document.getElementById("total-jobs-number");

totalJobDisplay.textContent = totalJobs;
displayCountjob.textContent = totalJobs + ' jobs';

let interviewCount = 0;
let rejectedCount = 0;

const interviewButtons = document.querySelectorAll(".interview-btn");
const rejectButtons = document.querySelectorAll(".reject-btn");

 /* Counting Interview Call,manage status and Selection  */
for (const button of interviewButtons) {
  button.addEventListener("click", function () {

/* Manage Status information by selecting interview and reject button  */
const jobCard = button.closest(".job");
const statusLabel = jobCard.querySelector(".status-label");
button.dataset.status = "interview";


// Update status text for INTERVIEW
statusLabel.textContent = "INTERVIEW";
statusLabel.classList.remove("bg-gray-300");
statusLabel.classList.add("bg-green-400");



// Hide action buttons
// jobCard.querySelector(".interview-btn").classList.remove("hidden");
jobCard.querySelector(".reject-btn").classList.remove("hidden");


  if (!button.disabled) {
      interviewCount++;
      totalInterviewDisplay.textContent = interviewCount;
      button.disabled = true;
    }
    
    displayCountjob.textContent = interviewCount + ' of jobs';
  });
}

 /* Counting Reject Call and rejection  */
for (const button of rejectButtons) {
  button.addEventListener("click", function () {

/* Manage Status information by selecting interview and reject button  */
const jobCard = button.closest(".job");
const statusLabel = jobCard.querySelector(".status-label");


  // Update status text
      statusLabel.textContent = "REJECTED";
      statusLabel.classList.remove("bg-gray-300");
      statusLabel.classList.add("bg-red-400");
      statusLabel.classList.add("opacity-50", "cursor-not-allowed");

// Hide action buttons
jobCard.querySelector(".interview-btn").classList.remove("hidden");
// jobCard.querySelector(".reject-btn").classList.remove("hidden");

    if (!button.disabled) {
      rejectedCount++;
      totalRejectedDisplay.textContent = rejectedCount;
      button.disabled = true;
    }
    displayCountjob.textContent = rejectedCount + ' of jobs';
  });
}

/* Manage Tab by Even delegate */

// All Job Tab
document.getElementById("all-job")
  .addEventListener("click", function () {
    
    const allJobs = document.querySelectorAll(".job");
    for (const job of allJobs) {
    console.log("All Listed Jobs:",job);
    }

});

// Interview Tab
document.getElementById("interview-call-tab").addEventListener("click", function () {
  const allJobs = Array.from(document.querySelectorAll(".job"));
  const interviewJobs = [];

  // Collect all interview jobs
  for (const job of allJobs) {
    if (job.dataset.status === "interview") {
      interviewJobs.push(job);
    }
  }

  // Show/hide jobs based on filter
  for (const job of allJobs) {
    if (interviewJobs.includes(job)) {
      job.classList.remove("hidden");
    } else {
      job.classList.add("hidden");
    }
  }

  console.log("Interview jobs:", interviewJobs);

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
      image.src = "./nojob-icon.png";
      image.alt = "No job Icon";
      image.classList.add("w-24", "mx-auto", "mb-4");
    
      const heading = document.createElement("h1");
      heading.textContent = "No Interview Jobs Available";
      heading.classList.add("text-3xl", "font-bold");
    
      newDiv.append(image, heading);
    
      container.appendChild(newDiv);
    }
    
});


// Rejected Tab
document.getElementById("reject-call-tab")
  .addEventListener("click", function () {

    const allJobs = document.querySelectorAll(".job");

    for (const job of allJobs) {

      if (job.dataset.status === "rejected") {

        job.classList.remove("hidden");   // Show only interview jobs
      } else {
        job.classList.add("hidden");      // Hide others
      }

    }
    if (rejectedCount === 0) {
  
      const newDiv = document.createElement("div");
      newDiv.id = "No Jobs";
      newDiv.classList.add(
        "bg-base-200",
        "py-10",
        "text-center",
        "rounded-xl"
      );
    
      const image = document.createElement("img");
      image.src = "./nojob-icon.png";
      image.alt = "No job Icon";
      image.classList.add("w-24", "mx-auto", "mb-4");
    
      const heading = document.createElement("h1");
      heading.textContent = "No Interview Jobs Available";
      heading.classList.add("text-3xl", "font-bold");
    
      newDiv.append(image, heading);
    
      container.appendChild(newDiv);
    }
    
});


 /* Delete job by selection delete icon image */
 const itemCard = document.getElementsByClassName('delete-img');

 for (const item of itemCard) {
   item.addEventListener('click', function (event) {
 
     const jobCard = event.target.closest('.job');
     jobCard.remove();
 
   });
 }
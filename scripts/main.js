const totalJobs = document.querySelectorAll(".job").length;
const totalJobDisplay = document.getElementById("total-jobs");
const totalInterviewDisplay = document.getElementById("total-interview");
const totalRejectedDisplay = document.getElementById("total-rejected");
const displayCountjob = document.getElementById("total-jobs-number");

totalJobDisplay.textContent = totalJobs;
displayCountjob.textContent = totalJobs + ' of jobs';

let interviewCount = 0;
let rejectedCount = 0;

const interviewButtons = document.querySelectorAll(".interview-btn");
const rejectButtons = document.querySelectorAll(".reject-btn");

for (const button of interviewButtons) {
  button.addEventListener("click", function () {
    if (!button.disabled) {
      interviewCount++;
      totalInterviewDisplay.textContent = interviewCount;
      button.disabled = true;
    }
    displayCountjob.textContent = interviewCount + ' of jobs';
  });
}

for (const button of rejectButtons) {
  button.addEventListener("click", function () {
    if (!button.disabled) {
      rejectedCount++;
      totalRejectedDisplay.textContent = rejectedCount;
      button.disabled = true;
    }
    displayCountjob.textContent = rejectedCount + ' of jobs';
  });
}

// Manage id > Hide all id > Then show only selected id

for (const button of interviewButtons) {
  button.addEventListener("click", function () {

    const jobCard = button.closest(".job");

    const statusLabel = jobCard.querySelector(".status-label");

    // Update status text
    /* 
    statusLabel.textContent = "INTERVIEW";
    statusLabel.classList.remove("bg-gray-300");
    statusLabel.classList.add("bg-green-400");
     */

    if(statusLabel.textContent = "INTERVIEW"){
    statusLabel.classList.remove("bg-gray-300");
    statusLabel.classList.add("bg-green-400");
    }
    else
    {
        statusLabel.classList.add("bg-gray-300")
    }
    

    // Hide action buttons
    jobCard.querySelector(".interview-btn").classList.add("hidden");
    jobCard.querySelector(".reject-btn").classList.add("hidden");
  });
}

for (const button of rejectButtons) {
  button.addEventListener("click", function () {

    const jobCard = button.closest(".job");

    const statusLabel = jobCard.querySelector(".status-label");

      // Update status text
      /* 
          statusLabel.textContent = "REJECTED";
          statusLabel.classList.remove("bg-gray-300");
          statusLabel.classList.add("bg-red-400");
       */
 
    
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

// Create No avialble form 
document.getElementById("interview-call-tab").addEventListener("click", function () {

    // const container = document.getElementById("job-details");
    const container = document.getElementById("interview-call-tab");
  
    // Remove old message if exists
    const oldMessage = document.getElementById("No Jobs");
    if (oldMessage) {
      oldMessage.remove();
    }
  
    // Check if no interview jobs
    if (interviewCount === 0) {
  
      const newDiv = document.createElement("div");
    //   newDiv.id = "No Jobs";
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
  
  });
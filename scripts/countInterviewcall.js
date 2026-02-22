
// const totalJobs = document.querySelectorAll(".job").length;
// const totalJobDisplay = document.getElementById("total-jobs");
// const totalInterviewDisplay = document.getElementById("total-interview");
// const totalRejectedDisplay = document.getElementById("total-rejected");

// totalJobDisplay.textContent = totalJobs;

// let interviewCount = 0;
// let rejectedCount = 0;

// const interviewButtons = document.querySelectorAll(".interview-btn");
// const rejectButtons = document.querySelectorAll(".reject-btn");

// for (const button of interviewButtons) {
//   button.addEventListener("click", function () {
//     const jobCard = button.closest(".job");

//     if (jobCard.dataset.status) return; // prevent double selection

//     jobCard.dataset.status = "interview";

//     interviewCount++;
//     totalInterviewDisplay.textContent = interviewCount;

//     // Hide action buttons
//     jobCard.querySelector(".interview-btn").classList.add("hidden");
//     jobCard.querySelector(".reject-btn").classList.add("hidden");

//     // Show selected badge
//     jobCard.querySelector(".interview-selected").classList.remove("hidden");
//   });
// }

// for (const button of rejectButtons) {
//   button.addEventListener("click", function () {
//     const jobCard = button.closest(".job");

//     if (jobCard.dataset.status) return;

//     jobCard.dataset.status = "rejected";

//     rejectedCount++;
//     totalRejectedDisplay.textContent = rejectedCount;

//     jobCard.querySelector(".interview-btn").classList.add("hidden");
//     jobCard.querySelector(".reject-btn").classList.add("hidden");

//     jobCard.querySelector(".reject-selected").classList.remove("hidden");
//   });
// }

const containerEl = document.querySelector(".container");

window.addEventListener("mousemove", (event) => {
  containerEl.innerHTML = `
        <div class="mouse-event">
        ${event.clientX}
        <h4><font color="black">STUDENTS ENROLL EVERY YEAR</font></h4>
      </div>
      <div class="mouse-event">
        ${event.clientY}
        <h4><font color="black">STUDENT'S PLACED EVERY YEAR</font></h4>
      </div>
  `;
});
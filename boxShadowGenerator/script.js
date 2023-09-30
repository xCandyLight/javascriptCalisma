const preview = document.getElementById("preview"),
  styles = document.getElementById("styles"),
  ranges = document.querySelectorAll(".settings input"),
  copyButton = document.getElementById("copy-styles");

// Add event listener to each range input
ranges.forEach((slider) =>{
    slider.addEventListener("input", generateStyles);
});

// Function to generate and update styles
function generateStyles(){
    const xShadow = document.getElementById("x-shadow").value;
    const yShadow = document.getElementById("y-shadow").value;
    const blurRadius = document.getElementById("blur-r").value;
    const spreadRadius = document.getElementById("spread-r").value;
    const shadowColor = document.getElementById("shadow-color").value;
    const shadowOpacity = document.getElementById("shadow-opacity").value;
    const shadowInset = document.getElementById("inset-shadow").checked;
    const borderRadius = document.getElementById("border-r").value;

    // Create the box shadow CSS property value
    const boxShadow = `${shadowInset ? "inset " : ""}${xShadow}px ${yShadow}px ${blurRadius}`
}
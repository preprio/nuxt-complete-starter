import { onMounted, onUnmounted } from 'vue'

// by convention, composable function names start with "use"
export function useFlowbite() {
  // state encapsulated and managed by the composable
  onMounted(() => {
    let frontEnd = document.createElement("script");
    frontEnd.setAttribute("src", "https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"); // 👈 make sure to use the correct path
    frontEnd.setAttribute("id", "flowbite-js");
  
    document.body.appendChild(frontEnd);
  });
  
  onUnmounted(() => {
    document.getElementById("flowbite-js").remove();
  });
}
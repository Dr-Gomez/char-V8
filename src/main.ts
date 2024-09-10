import "./style.css";

function app(): void {
  // Tree resize

  const left: HTMLDivElement = document.getElementById("sidebar") as HTMLDivElement;
  const handle: HTMLDivElement = document.getElementById("handle") as HTMLDivElement;
  const right: HTMLDivElement = document.getElementById("editor") as HTMLDivElement;

  function startResizeDetector(): void {
    dragging = true;
    document.body.style.cursor = "col-resize";

    function detectResize(e: MouseEvent): void {
      const width = e.clientX - left.getBoundingClientRect().left;
      const percentage = (width / window.innerWidth) * 100;
      const antipercentage = 100 - percentage;
      left.style.width = percentage + "%";
      console.log(left.style.width);
      right.style.width = antipercentage + "%";
    }

    document.addEventListener("mousemove", detectResize);

    function stopResizeDetector(): void {
      dragging = false;
      document.removeEventListener("mousemove", detectResize);
      document.removeEventListener("mouseup", stopResizeDetector);
      document.body.style.cursor = "default";
    }

    document.addEventListener("mouseup", stopResizeDetector);
  }

  let dragging = false;

  handle?.addEventListener("mousedown", startResizeDetector);

  window.addEventListener("resize", () => {
    console.log("resized webpage");
  });
}

app();

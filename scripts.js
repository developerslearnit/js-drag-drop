let thumb = slider.querySelector(".thumb");

thumb.onmousedown = function (event) {
  event.preventDefault(); // prevent selection start (browser action)

  let moveX = event.clientX - thumb.getBoundingClientRect().left;
  // shiftY not needed, the thumb moves only horizontally

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);

  function onMouseMove(event) {
    let newLeft = event.clientX - moveX - slider.getBoundingClientRect().left;

    // the pointer is out of slider => lock the thumb within the bounaries
    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = slider.offsetWidth - thumb.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    thumb.style.left = newLeft + "px";
  }

  function onMouseUp() {
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("mousemove", onMouseMove);
  }
};

thumb.ondragstart = function () {
  return false;
};

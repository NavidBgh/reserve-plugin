const closeModal = () => {
  document.getElementById("ganje-frame")?.remove();
};

const openGanjeDelivery = (url, returnSelectedGanje) => {
  document.body.innerHTML += `<div class="ganje-frame" id="ganje-frame" onclick="closeModal()">
            <div class="ganje-modal">
                <iframe class="ganje-iframe" id="ganje-iframe" src="" frameborder="0"></iframe>
            </div>
        </div>`;

  const iframe = document.getElementById("ganje-iframe");
  var iWindow = null;

  iframe.src = url;
  iframe.onload = () => {
    iWindow = iframe?.contentWindow;
  };

  window.addEventListener("message", ({ data }) => {
    if (data?.type === "reserved") {
      returnSelectedGanje(data?.data);
    }
    if (data?.type === "close") {
      closeModal();
    }
  });
};


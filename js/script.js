document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('simulatorForm');
  if (form) {
    form.addEventListener('change', updateSummary);
  }
});

function updateSummary() {
  const selectedType = document.querySelector('input[name="siteType"]:checked').value;
  const selectedAddons = Array.from(document.querySelectorAll('input[name="addons"]:checked'))
                              .map(cb => cb.value);

  let summaryHTML = `Tipo: <strong>${selectedType}</strong>`;
  
  if (selectedAddons.length > 0) {
    summaryHTML += `<br>Opcionais: <strong>${selectedAddons.join(', ')}</strong>`;
  }

  document.getElementById('summaryText').innerHTML = summaryHTML;
}

function sendToWhatsapp() {
  const phone = "5511961732582"; // ALTERE PARA O SEU WHATSAPP REAL COM DDD
  const selectedType = document.querySelector('input[name="siteType"]:checked').value;
  const selectedAddons = Array.from(document.querySelectorAll('input[name="addons"]:checked'))
                              .map(cb => cb.value);

  let message = `Olá! Vim pelo site da *Ponto Inicial Web* e gostaria de consultar um orçamento:\n\n`;
  message += `*Modelo:* ${selectedType}\n`;
  
  if (selectedAddons.length > 0) {
    message += `*Opcionais:* ${selectedAddons.join(', ')}\n`;
  } else {
    message += `*Opcionais:* Nenhum\n`;
  }
  
  message += `\nPodemos conversar sobre as opções e valores?`;

  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

function handleFormSubmit(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const phone = "5511961732582"; // ALTERE PARA O SEU WHATSAPP REAL COM DDD
  const fullMessage = `Olá! Meu nome é *${name}* (${email}).\n\nMensagem: ${message}`;
  
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(fullMessage)}`, '_blank');
}
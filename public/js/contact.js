document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('brutalist-contact-form');
  const feedbackMsg = document.getElementById('brutalist-form-feedback');
  const clearBtn = document.getElementById('clear-form-btn');

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('.contact-submit-btn');
    const btnSpan = submitBtn?.querySelector('span');
    if (btnSpan && feedbackMsg) {
      const originalText = btnSpan.innerText;
      btnSpan.innerText = 'MENGIRIM...';
      submitBtn.disabled = true;
      const formData = new FormData(contactForm);
      const formObject = Object.fromEntries(formData);
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(formObject)
      })
      .then(async (response) => {
        let json = await response.json();
        if (response.status === 200) {
          btnSpan.innerText = originalText;
          submitBtn.disabled = false;
          feedbackMsg.className = 'brutalist-feedback-message success';
          feedbackMsg.innerText = 'SUKSES! PESAN ANDA TELAH BERHASIL TERKIRIM. SAYA AKAN SEGERA MENGHUBUNGI ANDA.';
          feedbackMsg.style.display = 'block';
          contactForm.reset();
        } else {
          btnSpan.innerText = originalText;
          submitBtn.disabled = false;
          feedbackMsg.className = 'brutalist-feedback-message error';
          feedbackMsg.innerText = json.message || 'OOPS! TERJADI KESALAHAN SAAT MENGIRIM PESAN. SILAKAN COBA LAGI.';
          feedbackMsg.style.display = 'block';
        }
      })
      .catch(() => {
        btnSpan.innerText = originalText;
        submitBtn.disabled = false;
        feedbackMsg.className = 'brutalist-feedback-message error';
        feedbackMsg.innerText = 'OOPS! JARINGAN BERMASALAH. SILAKAN PERIKSA KONEKSI ANDA DAN COBA LAGI.';
        feedbackMsg.style.display = 'block';
      })
      .then(() => {
        setTimeout(() => { feedbackMsg.style.display = 'none'; }, 8000);
      });
    }
  });

  clearBtn?.addEventListener('click', () => {
    if (contactForm) {
      contactForm.reset();
      if (feedbackMsg) {
        feedbackMsg.className = 'brutalist-feedback-message success';
        feedbackMsg.innerText = 'FORMULIR TELAH DIBERSIHKAN.';
        feedbackMsg.style.display = 'block';
        setTimeout(() => { feedbackMsg.style.display = 'none'; }, 2000);
      }
    }
  });
});

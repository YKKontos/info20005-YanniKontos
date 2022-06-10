
//refine drop down functions for filters and sortby

document.querySelector('.select-wrapper1').addEventListener('click', function() {
    this.querySelector('.select').classList.toggle('open');
  })
  
  document.querySelector('.select-wrapper2').addEventListener('click', function() {
    this.querySelector('.select').classList.toggle('open');
  })
  
  
  for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.select').querySelector('.select-trigger span').textContent = this.textContent;
        }
    })
  }
  
  for (const dropdown of document.querySelectorAll(".select-wrapper")) {
    dropdown.addEventListener('click', function() {
        this.querySelector('.select').classList.toggle('open');
    })
  }
  
  window.addEventListener('click', function(e) {
    for (const select of document.querySelectorAll('.select')) {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    }
  });
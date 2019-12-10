var form = document.querySelector('form');
var imgURL = form.querySelector('#imgURL');
var memeHeader = form.querySelector('#headerText');
var memeFooter = form.querySelector('#footerText');
var memeDisplay = document.querySelector('.meme-display');

// form submission
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // create image
  var img = document.createElement('img');
  img.src = imgURL.value;
  img.height = 400;

  img.onload = () => {
    // create meme div container 
    var meme = document.createElement('div');
    meme.classList.add('meme');

    // display header text (optional form input)
    if (memeHeader.value) {
      var header = document.createElement('div');
      header.classList.add('header-text');
      header.innerText = memeHeader.value;
      meme.appendChild(header);
    };

    // display footer text (optional form input)
    if (memeFooter.value) {
      var footer = document.createElement('div');
      footer.classList.add('footer-text');
      footer.innerText = memeFooter.value;
      meme.appendChild(footer);
    };

    // place meme in div container
    meme.appendChild(img);
    memeDisplay.appendChild(meme);
    form.reset();
  };
});

// delete meme when clicked
memeDisplay.addEventListener('click', function(event) {
    event.target.parentElement.remove();
});

(() => {

  //variables
  const hotspots = document.querySelectorAll(".Hotspot");
  const infoBoxes = [
    {
      title: 'Radio Dial',
      text: 'Our brand new model of RESN8R now comes equipped with full functionality as a radio! As long as its charged, your very own RESN8R can act as your gateway to the rest of the world!',
      image: 'images/radio-waves.svg'
    },
    {
      title: 'Physical, High Quality, and Tactile Buttons',
      text: 'With high quality, sleek, and tactile buttons, this new model of RESN8R resists wearing over time and provides exceptional ease of use, allowing anyone to start listening with only a few clicks.',
      image: 'images/power-button.svg'
    },
    {
      title: 'Our New, Patented Design',
      text: 'This latest addition to the RESN8R lineup features our new rectangular design, complete with a sleek, carbon fiber cover against a metal frame, making it our most durable and iconic yet.',
      image: 'images/sparkles.svg'
    },
  ]
    
  
    const divisor = document.querySelector("#divisor");
    const slider = document.querySelector("#slider");

  //functions

  function loadInfo() {
    infoBoxes.forEach((infoBox, index) => {
      //console.log(index);
      //console.log(index+1);
      let selected = document.querySelector(`#hotspot-${index+1}`);

      //need to create title
      const titleElement = document.createElement("h2");
      titleElement.textContent = infoBox.title;
      //need to create text
      const textElement = document.createElement("p");
      textElement.textContent = infoBox.text;
      //need to create image
      const imageElement = document.createElement('img');
      imageElement.src= infoBox.image;


      //apppend the title
      selected.appendChild(imageElement);
      selected.appendChild(titleElement);
      selected.appendChild(textElement);
      //append the image
    });
  }
    function render() {
        context.clearRect(0,0, canvas.width, canvas.height);
        console.log(images[buds.frame]);
        context.drawImage(images[buds.frame], 0, 0);
    }

        
    function moveDivisor() {
        divisor.style.width = `${slider.value}%`
    }

    function resetSlider() {
        slider.value = "50%";
    }
    
  loadInfo();

  const canvas = document.querySelector("#explode-view");

    const context = canvas.getContext("2d");

    canvas.width = 1920;
    canvas.height = 1080;

    const frameCount = 450; 

    const images = []; 

    const buds = {
        frame: 0
    };

    for(let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = `images/Rendertake${(i + 1).toString().padStart(4, '0')}.webp`;
        images.push(img);
    };

    console.table(images);

    gsap.to(buds, {
        frame: frameCount - 1,
        ease: "none",
        snap: "frame",
        scrollTrigger: {
            trigger: "explode-view",
            pin: true,
            markers: true,
            start: "top top",
            scrub: 1
        },
        onUpdate: render
    });


    

    slider.addEventListener("input", moveDivisor);
    window.addEventListener("load", resetSlider);


})();
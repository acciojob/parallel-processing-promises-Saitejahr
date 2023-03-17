//your JS code here. If required.
const images = [
    { url: 'https://picsum.photos/id/12/200/300' },
    { url: 'https://picsum.photos/id/11/200/300' },
    { url: 'https://picsum.photos/id/10/200/300' }
   
    
  ];
  
  function downloadImages() {
    const promises = images.map(image => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`));
        img.src = image.url;
      });
    });
  
    Promise.all(promises)
      .then(images => {
        const outputDiv = document.getElementById('output');
        images.forEach(image => {
          outputDiv.appendChild(image);
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  const downloadButton = document.getElementById('download-images-button');
  downloadButton.addEventListener('click', downloadImages);

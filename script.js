const gallery = document.querySelector('.gallery');
const galleryImage = document.querySelectorAll('.gallery-image');
let imageCounter = 0;
let imageIndexUpdater = galleryImage.length;

// IMAGES
let images = {
    likedImages: [],
    dislikedImages: [],
};

// BUTTONS
const dislikeButton = document.getElementById('dislikeButton');
const likeButton = document.getElementById('likeButton');

// Z-INDEX PICTURES

for (let i = 0; i < galleryImage.length; i++) {
    imageIndexUpdater--;
    galleryImage[i].style.zIndex = imageIndexUpdater;
};

// LIKING THE PICTURE
likeButton.addEventListener('click', () => {
    galleryImage[imageCounter].classList.add('gallery-image-liked');
    galleryImage[imageCounter].classList.remove('gallery-image-active');
    images.likedImages.push(galleryImage[imageCounter].src);
    if (imageCounter !== galleryImage.length - 1) {
        imageCounter++;
        galleryImage[imageCounter].classList.add('gallery-image-active');
    };

    console.log(images);
});

// DISLIKING THE PICTURE
dislikeButton.addEventListener('click', () => {
    galleryImage[imageCounter].classList.add('gallery-image-disliked');
    galleryImage[imageCounter].classList.remove('gallery-image-active');
    images.dislikedImages.push(galleryImage[imageCounter].src);
    if (imageCounter !== galleryImage.length - 1) {
        imageCounter++;
        galleryImage[imageCounter].classList.add('gallery-image-active');
    };
    
    console.log(images);
})
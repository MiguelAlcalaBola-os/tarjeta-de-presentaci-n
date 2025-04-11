//la imagen cambia al dar click :)
//Lo se, es muy innovador
const extraInfo = document.getElementById('extraInfo');
const profileImage = document.getElementById('profileImage');
function toggleInfo() {
  if (extraInfo.style.display === 'none' || extraInfo.style.display === '') {
    extraInfo.style.display = 'block';
  } else {
    extraInfo.style.display = 'none';
  }
}
profileImage.addEventListener('click', () => {
  profileImage.src = profileImage.src.includes('img=12')
    ? 'https://i.ibb.co/WNYcvDVc/Sin-t-tulo-1.png'
    : 'https://i.ibb.co/twjj9HJ3/12.jpg';
});

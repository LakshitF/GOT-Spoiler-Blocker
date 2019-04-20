WORDS_LIST = [
  '#got',
  'game of thrones',
  'kit harington',
  'arya stark',
  'baelish',
  'baratheon',
  'braavos',
  'bran stark',
  'cersei',
  'daenerys',
  'dothraki',
  'dreadfort',
  'emilia clarke',
  'dragon',
  'seven kingdoms',
  'iron throne',
  'jon snow',
  'khaleesi',
  "king's landing",
  'kit harrington',
  'lannister',
  'maisie williams',
  'sandor clegane',
  'sansa stark',
  'sophie turner',
  'targaryen',
  'tyrion',
  'westeros',
  'white walker',
  'whitewalker',
  'winterfell'
];

DEATH_NAMES = [
  'did not live through the Long Night',
  'drank way too much Moon Tea',
  'found itself too far north when winter came',
  'is dark and full of terrors',
  'lost in trial by combat',
  'was incinerated by hot dragon breath',
  'was murdered by its very own uncle',
  'was pounded by the Mountain'
];

//Changing the contains method to make it case insensitive

let len=WORDS_LIST.length;
let elements=document.querySelectorAll("p,h1,h2,h3,h4,h5,h6,img,li");
let elemlen=elements.length;

for(let i=0;i<elemlen;i++)
{
  let flag=0;
  for(let j=0;j<len;j++)
  {
    let pattern=WORDS_LIST[j];
    if(elements[i].textContent.toLowerCase().includes(pattern) || elements[i].innerHTML.toLowerCase().includes(pattern))
    {
      flag=1;
      if(elements[i].src!=undefined)
      {
        hideImg(elements[i]);
      }
      else
      {
        hideText(elements[i]);
      }
    }

    if(flag==1) //no need to check for other pattern, as it is already been hidden
      break;
  }
}

function hideImg(node){
  node.style.webkitFilter = "blur(9px)";
}

function hideText(node) {
  //First handle nearby images, as probabily they also contain spoiler material.
  let ancestor=node.parentNode;
  if(ancestor!=null && ancestor.parentNode!='BODY') //do not want to completely remove the body !
  {
    ancestor=ancestor.parentNode;
    if(ancestor!=null && ancestor.parentNode!='BODY')
    {
        images = ancestor.getElementsByTagName('img');
        for(let i = 0; i < images.length; i++)
    			hideImg(images[i]);
    }
  }


  let random =Math.floor(Math.random() * (+DEATH_NAMES.length - +0)) + +0;  //gets random quote from GOT
  let death=DEATH_NAMES[random];
	node.innerHTML = 'A spoiler here '+death;
	node.style.color = 'white';
  node.style.background='black';
}

/*
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'script.js';
document.head.appendChild(script);
*/

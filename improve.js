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
  'winterfell',
  'lena headey',
  'peter dinklage',
  'sophie turner',
  'night king'
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
jQuery.expr[':'].icontains = function(a, i, m) {
  return jQuery(a).text().toUpperCase()
      .indexOf(m[3].toUpperCase()) >= 0;
};

let len=WORDS_LIST.length;

for(let i=0;i<len;i++)
{
  let elements = $(`:contains(${WORDS_LIST[i]}):not(:has(:contains(${WORDS_LIST[i]})))`);
  let elemlen=elements.length;
  for(let j=0;j<elemlen;j++)
  {
    if (!elements[i].parentNode || elements[i].parentNode.nodeName == "BODY") {
        continue;
      }
      if(elements[i].src!=undefined)
      {
        hideImg(elements[i]);
      }
      else{
        hideText(elements[i]);
      }
  }
}

function hideImg(node){
  node.style.webkitFilter = "blur(9px)";
}

function hideText(node) {
  //First handle nearby images, as probabily they also contain spoiler material.

  let ancestor=node.parentNode;
  if(ancestor!=null && ancestor!='BODY' && ancestor.parentNode!='BODY') //do not want to completely remove the body !
  {

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

WORDS_LIST = [
  'got',
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
  'night king',
  'spoiler',
  'game-of-thrones',
  'game_of_thrones'
];

DEATH_NAMES = [
  'did not live through the Long Night',
  'drank way too much Moon Tea',
  'found itself too far north when winter came',
  'is dark and full of terrors',
  'lost in trial by combat',
  'was incinerated by hot dragon breath',
  'was murdered by its very own uncle',
  'was pounded by the Mountain',
  'could not wait 2 years',
  'joined the night king\'s army',
  'burned to ashes','killed in the red wedding'
];

//Changing the contains method to make it case insensitive

let len=WORDS_LIST.length;
let elements=document.querySelectorAll("h1,h2,h3,h4,h5,h6,li,ul,text,span,img");
let elemlen=elements.length;

for(let i=0;i<elemlen;i++)
{
  let flag=0;
  if(elements[i].parentNode && elements[i].parentNode=='BODY')
    continue;
  for(let j=0;j<len;j++)
  {
    let pattern=WORDS_LIST[j];
    if(elements[i].innerHTML.toLowerCase().includes(pattern))
    {
      if(elements[i].nodeName=='IMG'){
        hideImg(elements[i]);
      }
      else
      {
        flag=1;
        hideText(elements[i]);
      }
    }

    if(flag==1) //no need to check for other pattern, as it is already been hidden
      break;
  }
}

function hideImg(node){
  node.style.webkitFilter = "blur(8px)";
  console.log('blurred')
;}

function hideText(node) {

  if(node.nodeName=='IMG')
  {
    return;
  }
  // Do not edit nodes just with text field, but only divs and h1
 if(node.nodeName=='text'){
 	return;
 }

  let ancestor=node.parentNode;
  if(ancestor!=null && ancestor.parentNode!==null)
    ancestor=ancestor.parentNode;
  if(ancestor!==null && ancestor!='BODY' && ancestor.parentNode!='BODY') //do not want to completely remove the body !
  {
    if(ancestor===null)
    {
      ancestor=ancestor;
    }
    else{
      images = ancestor.getElementsByTagName('img');
      let l=images.length;
      for(let i = 0; i < l; i++)
        hideImg(images[i]);
    }

  }


  let random =Math.floor(Math.random() * (+DEATH_NAMES.length - +0)) + +0;  //gets random quote from GOT
  let death=DEATH_NAMES[random];
	node.innerHTML = 'A spoiler here '+death;
	node.style.color = 'black';
  node.style.background='white';
}

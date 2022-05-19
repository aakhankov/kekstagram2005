import {getRandomPositiveInteger} from './random';

const description = [
  'Best Photo',
  'Not the best photo',
  'Awesome'
];
const messages = [
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const names = [ 
  'Влад',
  'Хуан',
  'Педро',
  'Гомез'
];

function post(){
  return {
      id: getRandomPositiveInteger(1,25),
      url: 'photos/'+ getRandomPositiveInteger (1,25) +'.jpg',
      description: description[getRandomPositiveInteger(0,description.length-1)],
      likes: getRandomPositiveInteger (15,200),
      comments: getComment()
  }
}

function getComment(){
  const photoComments = [];
  for(let i=0; i<=getRandomPositiveInteger(0,9);i++){
      const commentsElement ={
          id: getRandomPositiveInteger(0,999),
          avatar: getRandomPositiveInteger (1,6),
          message: messages[getRandomPositiveInteger(0,messages.length-1)],
          name: names[getRandomPositiveInteger(0,names.length-1)],
      }
      photoComments.push(commentsElement);
  }
  return photoComments;
}

const similarFotos = [];
const getArrayObject = (value) => {
  for (let index = 1; index <= value; index ++) {
    const newRandomObject = post();
    similarFotos.push(newRandomObject);
  }
  return similarFotos;
}
getArrayObject(5);
console.log(similarFotos);
export {getArrayObject};
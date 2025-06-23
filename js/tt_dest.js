const today = new Date().getDay();
const now = new Date();
switch (today) {
  case 0:
    console.log('오늘은 (일)요일입니다.');
    break;
  case 1:
    console.log('오늘은 월요일입니다.');
    break;
  case 2:
    console.log('오늘은 화요일입니다.');
    break;
  case 3:
    console.log('오늘은 수요일입니다.');
    break;
  case 4:
    console.log('오늘은 목요일입니다.');
    break;
  case 5:
    console.log('오늘은 금요일입니다.');
    break;
  case 6:
    console.log('오늘은 토요일입니다.');
    break;
  default:
    console.log('오류:알 수 없는 요일입니다.');
}
return;
const user = { name: 'Hong', passwd: 'xyz', addr: 'Seoul' };
function getValueExceptInitial(k) {
  // k = 'name'
  const { [k]: val } = user; // user.name or user['name'] ⇒ user[k]
  const [f, ...ret] = val; // [...val]
  return ret.join('');
}
console.log(getValueExceptInitial('name')); // 'ong'
console.log(getValueExceptInitial('passwd')); // 'yz'
console.log(getValueExceptInitial('addr')); // 'eoul'

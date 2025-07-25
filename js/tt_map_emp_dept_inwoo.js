const assert = require('assert');
const hrTeam = { id: 1, dname: '인사팀' };
const devTeam = { id: 2, dname: '개발팀' };
const depts = [hrTeam, devTeam];
const hong = { id: 1, name: 'Hong', dept: 1 }; // hong.dept.name ⇒ deptMap.get(hong.dept)?.name
const kim = { id: 2, name: 'Kim', dept: 2 };
const emps = [
  hong,
  kim,
  { id: 3, name: 'Park', dept: 2 },
  { id: 4, name: 'Choi', dept: 2 },
];

const deptMap = new Map(depts.map(dept => [dept.id, dept]));
const empMap = new Map(emps.map(emp => [emp.id, emp]));
const empDept = new Map(
  emps.map(emp => {
    const { dept } = emp;
    delete emp.dept;
    // console.log('🚀 dept:', dept, deptMap.get(dept));
    // delete Infinity;
    // Object.defineProperty(emp, 'dept', { enumerable: false });
    return [emp, deptMap.get(dept)];
  })
);
// console.log('🚀 empDept:', empDept);

// console.log(empDept.get(kim).dname); // '개발팀'
// 개발팀 직원 목록 출력 ⇒ Kim, Park, Choi

function getEmp(empId) {
  // {id:1, name: 'Hong', dept: {id:1, dname: 'Sale'}}
  // const { id, name, dept } = empMap.get(empId);
  // return { id, name, dept: deptMap.get(dept) };
  const emp = empMap.get(empId);
  return { ...emp, dept: empDept.get(emp) };
}
const ge1 = getEmp(1);
console.log('🚀 ge1:', ge1);

assert.deepStrictEqual(getEmp(1), {
  id: 1,
  name: 'Hong',
  dept: { id: 1, dname: '인사팀' },
});

assert.deepStrictEqual(
  [...empDept.keys()],
  emps.map(({ id, name }) => ({ id, name }))
);
assert.strictEqual(empDept.get(kim)?.dname, devTeam.dname);

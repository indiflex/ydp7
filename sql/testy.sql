show tables;
select length('AB한글'), char_length('AB한글');
select find_in_set('s3', 's1,s2,s3,s4');
select instr('str', 't'), locate('s1', 's0s1s2');
select substring('a,b,c', 3, 1);
select substring('Bearer accessTokenasdafdsafdsff', 7);
select substring_index('a,bb,cc', ',', 2);
select substring_index('a,b,cccc', ',', 1);
select substring_index('a,b,c', ',', -1);
select substring_index(substring_index('a,b,c', ',', 2), ',', -1);
select datediff('2024-12-01', '2025-03-11'), timediff('12:20:33', '11:30:20');
SELECT REGEXP_LIKE('abc', '[ABc]', 'c');
SELECT REGEXP_REPLACE('abc def ghi', '[a-z]+', 'X', 2, 3);
SELECT REGEXP_REPLACE('abc def ghi', '[a-z]+', 'X', 2, 2);
select regexp_replace('abcdefg', '[bdf]', 'X'), 
       regexp_replace('abcdefg', '[f-z]', 'X');
       
select * from Dept;
alter table Dept add column empcnt smallint unsigned not null default 0;
select count(*) from Emp where dept = 1;
update Dept d set empcnt = (select count(*) from Emp where dept = d.id);
       
select d.*, e.ename as captain_name
  from Dept d left outer join Emp e on d.captain = e.id;

select dname, captain_name cn from v_dept_captain where id = 3;
select * from v_dept_captain where id = 3;

show triggers from testdby;

select e.*, f_deptname_by_empid(e.id) from Emp e where id in (10, 11, 12);
select f_deptname_by_empid(20);

select * from Dept where id < 3
UNION ALL
select * from Dept where id < 5;

select s.*, (@rownum := @rownum + 1)
  from Dept s, (select @rownum := 0) as rn
 order by s.id desc;

call sp_emps_by_deptid(3); -- insert
call sp_dept_info(); -- update

select id, dname, captain from Dept order by dname asc;

select salary, dept, count(*) from Emp where salary = 100 group by dept;
select * from Emp where dept = 5 and salary = 100;



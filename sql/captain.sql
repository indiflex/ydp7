select e1.*, e2.id, e2.ename
  from Emp e1 left join Emp e2 on e1.dept = e2.dept and e1.ename > e2.ename
 where e2.ename is null
 order by e1.dept;
 
select sub.dept, min(sub.id) eid
  from (select e1.*
          from Emp e1 left join Emp e2 on e1.dept = e2.dept and e1.ename > e2.ename
         where e2.ename is null) sub
 group by sub.dept order by sub.dept;
 
select id, captain from Dept;
 
update Dept d inner join  
       (select sub.dept, min(sub.id) eid
          from (select e1.*
                  from Emp e1 left join Emp e2 on e1.dept = e2.dept and e1.ename > e2.ename
                 where e2.ename is null) sub
         group by sub.dept order by sub.dept) X
    on d.id = X.dept
    set d.captain = X.eid;
    
select * from Emp;
alter table Emp add column outdt varchar(10) null; -- 2025-08-06

select '2025-08-06', curdate();

update Emp set outdt='2025-04-25' where id in (3,5);
update Emp set outdt=curdate() where id in (14, 26);
select * from Emp where outdt is not null;
select * from Emp where outdt = curdate();
select * from Emp where outdt = '2025-08-06';

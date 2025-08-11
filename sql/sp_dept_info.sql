drop procedure if exists sp_dept_info;

DELIMITER $$
create procedure sp_dept_info()
BEGIN
    Declare _done boolean default False;
    
    declare v_id smallint unsigned;
    declare v_dname varchar(31);
    declare v_captain int unsigned;
    declare v_minsal int unsigned;
    declare v_capname varchar(31);
    declare v_capsal int unsigned;
    
    Declare _cur CURSOR FOR
        select id, dname, captain from Dept order by dname asc;
        
    Declare Continue Handler
        For Not Found SET _done := True;
        
    drop table if exists tmp;
    
    create temporary table tmp (
        dname varchar(31),
        minsal int,
        mincnt smallint,
        capname varchar(31),
        capsal int
    );
        
    OPEN _cur;
    cur_loop: LOOP
        Fetch _cur into v_id, v_dname, v_captain;
        IF _done THEN
            LEAVE cur_loop;
        END IF;
        
        select min(salary) into v_minsal from Emp where dept = v_id;
        if v_captain is null then
            select '부서장없음', 0 into v_capname, v_capsal;
        else
            select ename, salary into v_capname, v_capsal from Emp where id = v_captain;
        end if;
        
        insert into tmp
        select v_dname, v_minsal, (select count(*) from Emp where dept = v_id and salary = v_minsal),
               v_capname, v_capsal;
        
    END LOOP cur_loop;
    CLOSE _cur;

    select * from tmp;
END$$

DELIMITER ;
;
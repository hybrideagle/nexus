\c calender;

-- List all courses, and the timings when they occur
create temp view times as
select c_id,at_time from

((select c_id,at_time from (course natural join class_once ))
union
(select c_id,at_time from (course natural join class_recurring))) as stuff;s

--Create a prereq view, with the course names added

create temp view v_prereq as
select prereq_name,name from (select name as prereq_name,p.course_id from course c1 inner join prereq p on(c1.c_id=p.prereq_id))as prereqs natural join course;


-- 9)All courses a student is qualified to take.
	select name,c_id from course where c_id in(
	select course_id from prereq where prereq_id in
	(select c_id from takes_course where usn ilike '01FB15ECS306')
	union
	(select c_id from course where c_id not in
	(select course_id from prereq))); 

-- 10)All recurring classes of a course that the instructor already teaches, that
-- don't conflict with his schedule(so he can fill up his schedule).

	select c_id,on_day,at_time from class_recurring 
	where at_time not in (select at_time from class_recurring where i_id ilike 'in_04' and on_day like (select on_day from class_recurring where i_id ilike 'in_04'))
	union
	select c_id,on_day,at_time from class_recurring 
	where on_day not like (select on_day from class_recurring where i_id ilike 'in_04');
-- 11)All recurring classes of a course that the instructor does not teach but is
-- offered by his department, that don't conflict with his schedule.

CREATE TRIGGER input_automate AFTER INSERT ON class_once
FOR EACH ROW EXECUTE PROCEDURE for_class_once();

CREATE OR REPLACE FUNCTION for_class_once() RETURNS TRIGGER AS $example_table$
    BEGIN
        UPDATE class_once set on_date=current_date,at_time=current_time where on_date ilike'1';
        RETURN NEW;
    END;
$example_table$ LANGUAGE plpgsql;

--12) All courses that can be taken given his schedule of taking other courses 

select c_id,at_time,on_day from class_recurring
where at_time not in (select at_time from class_recurring where c_id ilike 'cou_2' and on_day in
(select on_day from class_recurring where c_id ilike 'cou_2'))
union
select c_id,at_time,on_day from class_recurring
where on_day not in 
(select on_day from class_recurring where c_id ilike 'cou_2');

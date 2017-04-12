\c calender;
-- 1)All students, the department and section they belong to, and their advisor's
-- name.

SELECT
  student.name,department.dep_name,section.sec_id,instructor.name
FROM student,department,section,instructor where
	student.dep_id=department.dep_id and 
	student.sec_id=section.sec_id and
	student.adv_id=instructor.in_id

-- 2)All the sections with student counts.

SELECT department.dep_name,a.sec_id,a.c from department,(
	SELECT
	  section.sec_id,count(*) as c
	FROM
	  department INNER JOIN section using (dep_id) INNER JOIN student using 	(sec_id)
	GROUP BY sec_id
	)as a;


-- 3)All one-time classes taken by students from multiple sections
SELECT course.name,a.c1 from course,
(SELECT
  c.c_id as c1
FROM
  class_once INNER JOIN takes_class_once tc using (c_id)
   INNER JOIN class_once c on c.c_id = tc.c_id and c.on_date = tc.on_date and c.at_time=tc.at_time and c.l_id=tc.l_id)as a where a.c1=course.c_id;

-- 4)All courses in reverse order of the number of people that take them.

SELECT
  c_id,count(*) as num from
(select * from 
student inner join takes_course using (usn) inner join course using (c_id))as ab
GROUP BY
	(ab.c_id)
ORDER BY
  num DESC;

-- 5)All one-off courses, grouped by Department.

SELECT
  ab.dep_id, ab.c_id, ab.name
FROM
  (select * from class_once INNER JOIN course using (c_id) INNER JOIN department on (department.dep_id))as ab;
GROUP BY
  (dep_id);

-- 6)All recurring classes in order of time of occurence

SELECT
  c_id,name,class_recurring.at_time
FROM
  class_recurring INNER JOIN course using (c_id) INNER JOIN department using (dep_id)
ORDER BY
  at_time

-- 7)All classes taken by a student, in order of time of occurence.

SELECT
  c_id,name,takes_class_recurring.at_time
FROM
  class_recurring INNER JOIN takes_class_recurring using (c_id) INNER JOIN student using (usn)
WHERE
  usn like '01FB15ECS309'
ORDER BY
  class_recurring.at_time;

-- 8)All classes taught by an intructor, in order of occurence.

SELECT
  c_id,course.name
FROM	
  student inner join takes_course using (usn)inner join course using(c_id) INNER JOIN class_once using (c_id) INNER JOIN instructor on (instructor.in_id=class_once.i_id)
WHERE
  usn like '01FB15ECS309'
ORDER BY
  on_date,at_time;


-- 9)All courses a student is qualified to take.

-- 10)All recurring classes of a course that the instructor already teaches, that
-- don't conflict with his schedule(so he can fill up his schedule).

-- 11)All recurring classes of a course that the instructor does not teach but is
-- offered by his department, that don't conflict with his schedule.

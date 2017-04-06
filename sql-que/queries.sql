\c calender;
-- 1)All students, the department and section they belong to, and their advisor's
-- name.

SELECT
  student.name,department.dep_name,section.sec_id,instructor.name
FROM
  department INNER JOIN student using(dep_id) INNER JOIN section using (sec_id) INNER JOIN instructor on(student.adv_id=instructor.in_id) limit 10;

-- 2)All the sections with student counts.

SELECT
  section.sec_id, count(*)
FROM
  department INNER JOIN section using (dep_id) INNER JOIN student using (sec_id)
GROUP BY sec_id;


-- 3)All one-time classes taken by students from multiple sections

SELECT
  c.c_id as c1, c.c_id as c2
FROM
  class_once INNER JOIN takes_class_once tc using (c_id)
   INNER JOIN class_once c on c.c_id = tc.c_id and c.on_date = tc.on_date and c.at_time=tc.at_time and c.l_id=tc.l_id;

-- 4)All courses in reverse order of the number of people that take them.

SELECT
  c_id, count(*) as num
FROM
  course INNER JOIN takes_course using (c_id) INNER JOIN student using (usn)
GROUP BY
  usn;
ORDER BY
  num DESC;

-- 5)All one-off courses, grouped by Department.

SELECT
  dep_id, c_id, title
FROM
  class_once INNER JOIN course using c_id INNER JOIN department on (dep_id)
GROUP BY
  dep_id



-- 6)All recurring classes in order of time of occurence

SELECT
  c_id,name
FROM
  class_once INNER JOIN course using (c_id) INNER JOIN department using (dep_id)
ORDER BY
  day,at_time

-- 7)All classes taken by a student, in order of time of occurence.

SELECT
  c_id,name
FROM
  class_once INNER JOIN course using (c_id) INNER JOIN student using (c_id)
WHERE
  usn like '01FB15ECS309'
ORDER BY
  day,at_time;


-- 8)All classes taught by an intructor, in order of occurence.

SELECT
  c_id,name
FROM
  class_once INNER JOIN course using (c_id) INNER JOIN instructor using (c_id)
WHERE
  usn like '01FB15ECS315'
ORDER BY
  day,at_time;


-- 9)All courses a student is qualified to take.



-- 10)All recurring classes of a course that the instructor already teaches, that
-- don't conflict with his schedule(so he can fill up his schedule).

-- 11)All recurring classes of a course that the instructor does not teach but is
-- offered by his department, that don't conflict with his schedule.

drop database if exists calender;
create database calender;
\c calender;

create table department(
	dep_id varchar primary key,
	dep_name varchar
);

create table instructor(
	in_id varchar primary key,
	gender char(1),
	name varchar,
	DOJ varchar,
	dep_id varchar,
	foreign key(dep_id) references department
);

create table location(
	loc_id varchar primary key,
	name varchar,
	block varchar,
	type varchar,
	dep_id varchar,
	foreign key(dep_id) references department
);

create table section(
	dep_id varchar,
	sec_id varchar,
	semester varchar,
	in_id varchar,
	primary key(dep_id,sec_id),
	foreign key(dep_id) references department,
	foreign key(in_id) references instructor
);

create table course(
	c_id varchar primary key,
	name varchar,
	dep_id varchar,
	credits varchar,
	foreign key(dep_id) references department
);

create table prereq(
	prereq_id varchar,
	course_id varchar,
	primary key(prereq_id,course_id),
	foreign key(prereq_id) references course,
	foreign key(course_id) references course
);

create table student(
	usn varchar primary key,
	name varchar,
	adv_id varchar,
	DOA varchar,
	DOB varchar,
	gender char(1),
	dep_id varchar,
	sec_id varchar,
	foreign key(dep_id,sec_id) references section,
	foreign key(adv_id) references instructor
);

create table takes_course(
	usn varchar,
	c_id varchar,
	primary key(usn,c_id),
	foreign key(usn) references student,
	foreign key(c_id) references course
);

create table class_once(
	c_id varchar,
	on_date varchar,
	at_time time,
	l_id varchar,
	i_id varchar,
	primary key(on_date,at_time,l_id),
	foreign key(c_id) references course,
	foreign key(i_id) references instructor
);

create table takes_class_once(
	usn varchar,
	c_id varchar,
	on_date varchar,
	at_time time,
	l_id varchar,
	primary key(usn,c_id,on_date,at_time,l_id),
	foreign key(usn) references student,
	foreign key(on_date,at_time,l_id) references class_once
);

create table class_recurring(
	c_id varchar,
	on_day varchar,
	at_time time,
	l_id varchar,
	i_id varchar,
	primary key(on_day,at_time,l_id),
	foreign key(c_id) references course,
	foreign key(i_id) references instructor
);

create table takes_class_recurring(
	usn varchar,
	c_id varchar,
	on_day varchar,
	at_time time,
	l_id varchar,
	primary key(usn,c_id,on_day,at_time,l_id),
	foreign key(usn) references student,
	foreign key(on_day,at_time,l_id) references class_recurring
);

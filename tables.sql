create table waiters(
    id serial not null primary key,
    name text not null
);

create table weekdays(
    id serial not null primary key,
    day text not null
);

create table shiftsinfo(
    id serial not null primary key,
    weekdays_id int not null,
    waiters_id int not null,
    foreign key (weekdays_id) references weekdays(id),
    foreign key (waiters_id) references waiters(id)
);

insert into waiters (id, name) values (1, 'Warwick');
insert into waiters (id, name) values (2, 'Pedro');
insert into waiters (id, name) values (3, 'Timothy');
insert into waiters (id, name) values (4, 'Anita');

insert into weekdays (id, day) values (1, 'Monday');
insert into weekdays (id, day) values (2, 'Tuesday');
insert into weekdays (id, day) values (3, 'Wednesday');
insert into weekdays (id, day) values (4, 'Thursday');
insert into weekdays (id, day) values (5, 'Friday');
insert into weekdays (id, day) values (6, 'Saturday');
insert into weekdays (id, day) values (7, 'Sunday');
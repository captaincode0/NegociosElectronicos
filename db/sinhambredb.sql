drop table if exists users;
create table users (
	id integer primary key autoincrement,
	name varchar(45) not null,
	tel varchar(30) not null,
	email varchar(60) not null,
	passwd char(18) not null,
	usertype int not null default 0
);

drop table if exists restaurants;
create table restaurants (
	id integer primary key autoincrement,
	userid int not null,
	name varchar(120) not null,
	address varchar(80) not null,
	googlemap text null,
	tel varchar(30) not null,
	image text null,
	banner text null
);

drop table if exists alerts;
create table alerts (
	id integer primary key autoincrement,
	userid int not null,
	title varchar(120) not null,
	body text not null,
	isactive boolean not null default false
);

drop table if exists menu;
create table menu (
	id integer primary key autoincrement,
	restaurantid int not null,
	name varchar(60) not null
);

drop table if exists sections;
create table sections (
	id integer primary key autoincrement,
	menuid int not null,
	name varchar(100) not null
);

drop table if exists menuitems;
create table menuitems (
	id integer primary key autoincrement,
	sectionid int not null,
	name varchar(100) not null,
	image text not null,
	price float(5,2) not null
);

drop table if exists orders;
create table orders (
	id integer primary key autoincrement,
	userid int not null,
	total float(6,2) not null,
	payed boolean not null default false
);

drop table if exists orderdetails;
create table orderdetails (
	orderid int not null,
	menuitemid int not null,
	quantity int not null,
	subtotal float(5,2) not null
);

drop table if exists promotions;
create table promotions (
	id integer primary key autoincrement,
	userid int not null,
	image text not null
);

drop view if exists vwcalcorder;
create view vwcalcorder as 
	select orders.id as orderid, orderdetails.menuitemid, (orderdetails.quantity * menuitems.price) as subtotalcalc
		from orders
			inner join orderdetails
				on orderdetails.orderid = orders.id
			inner join menuitems
				on menuitems.id = orderdetails.menuitemid;

drop view if exists vwcalctotalorder;
create view vwcalctotalorder as 
	select vwcalcorder.orderid, sum(vwcalcorder.subtotalcalc) as total
		from vwcalcorder
			group by vwcalcorder.orderid
			order by vwcalcorder.orderid asc;

drop view if exists vworderdetails;
create view vworderdetails as 
	select orders.id as orderid, orders.userid, menuitems.name, orderdetails.quantity, orderdetails.subtotal
			from orders
				inner join menuitems
					on menuitems.id = orderdetails.menuitemid
				inner join orderdetails
					on orderdetails.orderid = orders.id;

/*
	DUMP
 */
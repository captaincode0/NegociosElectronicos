/**
 * Tipos de usuario
 * 	0) Usuario administrador.
 * 	1) Proveedor de comida.
 * 	2) Usuario común.
 */

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
insert into users values(null, "Proveedor de comida", "3227894561", "proveedor@gmail.com", "123456", 1);
insert into users values(null, "Usuario comúm", "322894324", "usuariocomun@gmail.com", "123456", 2);

insert into restaurants values(null, 1, "Tortas el guero", "Lazaro Cardenas #102, San Vicente, Nayarit", '<iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3731.063160375781!2d-105.25257938581406!3d20.748233952673214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d20.7488732!2d-105.2501784!4m5!1s0x842147b08d3791f9%3A0x2c1ee767a8825329!2sSAN+VICENTE%2C+NAY%2C+Calle+Independencia%2C+11+LT.+2%2C+San+Vicente%2C+63737+San+Vicente%2C+Nay.!3m2!1d20.7475739!2d-105.25090259999999!5e0!3m2!1sen!2smx!4v1484073281089" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>', "3221324963", "assets/img/small/logo/tortas-el-guero.jpg", "assets/img/banners/tortas-el-guero.jpg");

insert into menu values(null, 1, "Menú de comidas caseras"); /*menu 1, restaurant 1*/
insert into sections values(null, 1, "Tortas"); /* section one */
insert into sections values(null, 1, "Bebidas"); /* section two */

/* insert tortas */
insert into menuitems values(null, 1, "Torta de pollo", "assets/img/small/menu/tortaselguero/tortadepollo.jpg", 35.0);
insert into menuitems values(null, 1, "Torta de pierna", "assets/img/small/menu/tortaselguero/tortapierna.jpg", 45.0);
insert into menuitems values(null, 1, "Torta de jamón", "assets/img/small/menu/tortaselguero/tortajamon.jpg", 25.0);

/* insert drinks */
insert into menuitems values(null, 2, "Chocomilk", "assets/img/small/menu/tortaselguero/chocomilk.jpg", 25.0);
insert into menuitems values(null, 2, "Coca Cola", "assets/img/small/menu/tortaselguero/cocacola.jpg", 15.0);
insert into menuitems values(null, 2, "Jugo de naranja", "assets/img/small/menu/tortaselguero/jugonaranja.jpg", 20.0);
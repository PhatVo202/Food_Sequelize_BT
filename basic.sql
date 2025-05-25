create database db_demo;
use db_demo;
create table `user`(
	`user_id` int primary key auto_increment,
	`full_name` varchar(255) not null,
	`email` varchar(255) not null,
	`password` varchar(255) not null
);

create table `restaurant`(
	`res_id` int primary key auto_increment,
	`res_name` varchar(255) not null,
	`Image` varchar(255) not null,
	`desc` varchar(255) not null
);

create table `food_type`(
	`type_id` int primary key auto_increment,
	`type_name` varchar(255)
);

create table `food`(
	`food_id` int primary key auto_increment,
	`food_name` varchar(255) not null,
	`image` varchar(255) not null,
	`price` float not null,
	`desc` varchar(255) not null,
	`type_id` int not null,
	foreign key (type_id) references food_type(type_id)
);

create table `sub_food`(
	`sub_id` int primary key auto_increment,
	`sub_name` varchar(255) not null, 
	`sub_price` float not null,
	`food_id` int not null,
	foreign key (food_id) references food(food_id)
);

create table `order`(
	`order_id` int auto_increment primary key,
	`user_id` int not null,
	`food_id` int not null,
	`amount` int not null,
	`code` varchar(255) not null,
	`arr_sub_id` varchar(255),
	
	foreign key (user_id) references `user`(user_id),
	foreign key (food_id) references `food`(food_id)
);

drop table `order`

create table rate_res(
	rate_res_id int auto_increment primary key,
	user_id int not null,
	res_id int not null,
	amount int not null,
	date_rate datetime,
	
	foreign key (user_id) references `user`(user_id),
	foreign key (res_id) references `restaurant`(res_id)
);

drop table rate_res

create table like_res(
	like_res_id int auto_increment primary key,
	user_id int not null,
	res_id int not null,
	date_like datetime,
	
	foreign key (user_id) references `user`(user_id),
	foreign key (res_id) references `restaurant`(res_id)
);

TRUNCATE TABLE user;

-- Thêm dữ liệu cho bảng user
insert into `user`(full_name,email,password) values("Vo Le Truong Phat","9a10voletruongphat@gmail.com","1234"),
("Nguyen Van A","a@gmail.com","1234"),
("Nguyen Van B","b@gmail.com","1234"),
("Nguyen Van C","c@gmail.com","1234"),
("Nguyen Van D","d@gmail.com","1234"),
("Nguyen Van E","e@gmail.com","1234"),
("Nguyen Van F","f@gmail.com","1234"),
("Nguyen Van G","g@gmail.com","1234"),
("Nguyen Van H","h@gmail.com","1234");

-- Thêm dữ liệu cho bảng restaurant
insert into restaurant (`res_name`, `Image`, `desc`) values
('Nhà hàng A', 'nha_hang_a.jpg', 'Món ăn Việt Nam truyền thống'),
('Nhà hàng B', 'nha_hang_b.jpg', 'Pizza và pasta Ý'),
('Nhà hàng C', 'nha_hang_c.jpg', 'Hải sản tươi sống'),
('Nhà hàng D', 'nha_hang_d.jpg', 'Đồ ăn chay healthy'),
('Nhà hàng E', 'nha_hang_e.jpg', 'Buffet lẩu băng chuyền');

-- Thêm dữ liệu cho bảng like_res
insert into like_res (`user_id`, `res_id`, `date_like`) values
(1, 1, '2025-05-01 12:00:00'),
(2, 1, '2025-05-02 18:30:00'),
(3, 2, '2025-05-03 09:00:00'),
(1, 2, '2025-05-03 15:45:00'),
(4, 1, '2025-05-03 20:15:00'),
(1, 3, '2025-05-04 10:30:00'),
(2, 3, '2025-05-04 14:00:00'),
(1, 1, '2025-05-04 18:00:00'),
(5, 1, '2025-05-04 20:00:00'),
(3, 1, '2025-05-04 21:00:00');

-- Thêm các loại đồ ăn vào bảng food_type
insert into food_type (type_name) values
('Món chính'),
('Món khai vị'),
('Đồ uống'),
('Tráng miệng'),
('Món chay');

-- Thêm dữ liệu vào bảng food
insert into food (food_name, image, price, `desc`, type_id) values
('Bún bò Huế', 'bun_bo_hue.jpg', 45000, 'Bún, thịt bò, chả cua, nước dùng đậm đà', 1),
('Phở bò', 'pho_bo.jpg', 40000, 'Bánh phở, thịt bò tái/nạm, nước dùng thơm ngon', 1),
('Gỏi cuốn', 'goi_cuon.jpg', 25000, 'Tôm, thịt heo, rau sống, bún, chấm tương', 2),
('Chả giò', 'cha_gio.jpg', 30000, 'Nem rán giòn rụm với nhân thịt, tôm, miến', 2),
('Coca-Cola', 'coca_cola.jpg', 15000, 'Nước ngọt có gas', 3),
('Nước cam', 'orange_juice.jpg', 20000, 'Nước ép cam tươi mát', 3),
('Kem vani', 'ice_cream_vanilla.jpg', 25000, 'Kem vani mát lạnh', 4),
('Chè đậu xanh', 'che_dau_xanh.jpg', 20000, 'Chè ngọt thanh với đậu xanh', 4),
('Cơm chay thập cẩm', 'com_chay.jpg', 35000, 'Cơm gạo lứt với rau củ xào', 5),
('Đậu hũ chiên sả', 'dau_hu_chien_sa.jpg', 28000, 'Đậu hũ non chiên giòn với sả', 5),
('Pizza Margherita', 'pizza_margherita.jpg', 120000, 'Pizza với sốt cà chua, mozzarella, базилик', 1),
('Spaghetti Carbonara', 'spaghetti_carbonara.jpg', 95000, 'Mì Ý với trứng, thịt xông khói, phô mai', 1);

-- Thêm dữ liệu cho bảng order
insert into `order` (`user_id`, `food_id`, `amount`, `code`, `arr_sub_id`) values
(1, 1, 2, 'DH001', '1,2'),
(2, 2, 1, 'DH002', '3'),
(1, 3, 1, 'DH003', '4'),
(3, 1, 3, 'DH004', '1'),
(1, 2, 1, 'DH005', '2'),
(4, 4, 2, 'DH006', '5,6'),
(1, 1, 1, 'DH007', '1'),
(2, 3, 2, 'DH008', '4'),
(1, 5, 1, 'DH009', '7');

# tìm ra 5 người dùng đã "like" nhiều nhất trong bảng "like_res"
select like_res.user_id,`user`.full_name, COUNT(*) as total_likes
from like_res
inner join `user` on like_res.user_id = `user`.user_id  
group by user_id
order by total_likes desc
limit 5;


# Tìm ra 2 nhà hàng có lượt "like" nhiều nhất trong bảng "like_res"
select res_id, COUNT(*) as like_count
from like_res
group by res_id
order by like_count desc
limit 2;

# Tìm người đã đặt hàng nhiều nhất trong bảng "orders"
select user_id, COUNT(*) as order_count from `order`
group by user_id
order by order_count desc
limit 1;

# Tìm người dùng không hoạt động trong hệ thống (không đặt hàng, không like, không đánh giá nhà hàng)
select user.user_id, user.full_name
from `user`
left join `order` on user.user_id = order.user_id
left join like_res on user.user_id = like_res.user_id
left join rate_res on user.user_id = rate_res.user_id
where order.user_id is null and like_res.user_id is null and rate_res.user_id is null;





 

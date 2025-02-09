create database easy_travels;
use easy_travels;

create table cliente(
id_cliente int primary key auto_increment,
nome varchar(100) not null,
cpf varchar(14) not null unique,
data_nascimento date not null,
email varchar(100) not null unique,
senha varchar(255)
);

create table destino(
id_destino int primary key auto_increment,
nome_destino varchar (100) not null,
cidade varchar (100) not null,
estado varchar (100) not null,
pais varchar (100) not null,
descricao text not null,
preco  decimal (10,2) not null
);

create table passagem(
 id_passagem int primary key auto_increment,
 cliente_id int not null,
 destino_id int not null,
 data_compra date not null,
 data_viagem date not null,
 preco_total decimal (10,2) not null,
 quantidade_cliente int not null,
 classe varchar(50),
 status enum('Pendente', 'Confirmada', 'Cancelada') DEFAULT 'Pendente',
 
 foreign key (cliente_id) references cliente(id_cliente) on delete cascade,
 foreign key (destino_id) references destino (id_destino) on delete cascade

);



create table pagamento(
id_pagamento int primary key auto_increment,
cliente_id int not null,
passagem_id int not null,
data_pagamento date not null,
valor_pago decimal (10,2) not null,
metodo enum('cartao de credito', 'pix') not null,
status enum( 'aprovado', 'pendente', 'cancelado') default 'pendente',

foreign key (cliente_id) references cliente(id_cliente) on delete cascade,
foreign key (passagem_id) references passagem(id_passagem) on delete cascade
);


INSERT INTO cliente (nome, cpf, data_nascimento, email, senha) VALUES
('Carlos Souza', '123.456.789-00', '1990-05-14', 'carlos@email.com', 'senha123'),
('Ana Oliveira', '987.654.321-00', '1985-08-22', 'ana@email.com', 'senha456'),
('Mariana Lima', '456.789.123-00', '1992-11-10', 'mariana@email.com', 'senha789');



INSERT INTO destino (nome_destino, cidade, estado, pais, descricao, preco) VALUES
('Praia de Copacabana', 'Rio de Janeiro', 'RJ', 'Brasil', 'Uma das praias mais famosas do mundo.', 1500.00),
('Cataratas do Iguaçu', 'Foz do Iguaçu', 'PR', 'Brasil', 'Maravilha natural com cachoeiras incríveis.', 1800.00),
('Torre Eiffel', 'Paris', 'Île-de-France', 'França', 'Um dos monumentos mais icônicos do mundo.', 5000.00);


INSERT INTO passagem (cliente_id, destino_id, data_compra, data_viagem, preco_total, quantidade_cliente, classe, status) VALUES
(1, 1, '2025-02-10', '2025-03-15', 1500.00, 1, 'Econômica', 'Confirmada'),
(2, 2, '2025-02-12', '2025-04-10', 3600.00, 2, 'Executiva', 'Pendente'),
(3, 3, '2025-02-15', '2025-06-20', 5000.00, 1, 'Primeira Classe', 'Confirmada');


INSERT INTO pagamento (cliente_id, passagem_id, data_pagamento, valor_pago, metodo, status) VALUES
(1, 1, '2025-02-11', 1500.00, 'cartao de credito', 'aprovado'),
(2, 2, '2025-02-13', 1800.00, 'pix', 'pendente'),
(3, 3, '2025-02-16', 5000.00, 'cartao de credito', 'aprovado');






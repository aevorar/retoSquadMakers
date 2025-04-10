USE jokes_db;

-- Carga de datos
DELETE FROM Usuarios;

INSERT INTO
  Usuarios (id, nombre, clave)
values
  (1, "Manolito", sha2("claveSUperecreta1", 512)),
  (2, "Pepe", sha2("claveSUperecreta2", 512)),
  (3, "Isabel", sha2("claveSUperecreta3", 512)),
  (4, "Pedro", sha2("claveSUperecreta4", 512));

DELETE FROM Tematicas;

INSERT INTO
  Tematicas (id, nombre)
values
  (1, "Humor negro"),
  (2, "Humor amarillo"),
  (3, "Chistes verdes");

DELETE FROM Chistes;

INSERT INTO
  Chistes (id, titulo, cuerpo, idUsuario)
values
  (1, "Titulo Chiste 1-1", "Chiste 1-1", 1),
  (2, "Titulo Chiste 2-1", "Chiste 2-1", 1),
  (3, "Titulo Chiste 3-1", "Chiste 3-1", 1),
  (4, "Titulo Chiste 4-1", "Chiste 1-1", 1),
  (5, "Titulo Chiste 5-1", "Chiste 2-1", 1),
  (6, "Titulo Chiste 6-1", "Chiste 3-1", 1),
  (7, "Titulo Chiste 7-1", "Chiste 1-1", 1),
  (8, "Titulo Chiste 8-1", "Chiste 2-1", 1),
  (9, "Titulo Chiste 9-1", "Chiste 3-1", 1),
  (10, "Titulo Chiste 1-2", "Chiste 1-2", 2),
  (11, "Titulo Chiste 2-2", "Chiste 2-2", 2),
  (12, "Titulo Chiste 3-2", "Chiste 3-2", 2),
  (13, "Titulo Chiste 4-2", "Chiste 1-2", 2),
  (14, "Titulo Chiste 5-2", "Chiste 2-2", 2),
  (15, "Titulo Chiste 6-2", "Chiste 3-2", 2),
  (16, "Titulo Chiste 7-2", "Chiste 1-2", 2),
  (17, "Titulo Chiste 8-2", "Chiste 2-2", 2),
  (18, "Titulo Chiste 9-2", "Chiste 3-2", 2),
  (19, "Titulo Chiste 1-3", "Chiste 1-3", 3),
  (20, "Titulo Chiste 2-3", "Chiste 2-3", 3),
  (21, "Titulo Chiste 3-3", "Chiste 3-3", 3),
  (22, "Titulo Chiste 4-3", "Chiste 1-3", 3),
  (23, "Titulo Chiste 5-3", "Chiste 2-3", 3),
  (24, "Titulo Chiste 6-3", "Chiste 3-3", 3),
  (25, "Titulo Chiste 7-3", "Chiste 1-3", 3),
  (26, "Titulo Chiste 8-3", "Chiste 2-3", 3),
  (27, "Titulo Chiste 9-3", "Chiste 3-3", 3),
  (28, "Titulo Chiste 1-4", "Chiste 1-4", 4),
  (29, "Titulo Chiste 2-4", "Chiste 2-4", 4),
  (30, "Titulo Chiste 3-4", "Chiste 3-4", 4),
  (31, "Titulo Chiste 4-4", "Chiste 1-4", 4),
  (32, "Titulo Chiste 5-4", "Chiste 2-4", 4),
  (33, "Titulo Chiste 6-4", "Chiste 3-4", 4),
  (34, "Titulo Chiste 7-4", "Chiste 1-4", 4),
  (35, "Titulo Chiste 8-4", "Chiste 2-4", 4),
  (36, "Titulo Chiste 9-4", "Chiste 3-4", 4);

DELETE FROM ChisteTematicas;

INSERT INTO
  ChisteTematicas (idChiste, idTematica)
values
  (1, 1),
  (2, 1),
  (3, 1),
  (4, 2),
  (5, 2),
  (6, 2),
  (7, 3),
  (8, 3),
  (9, 3),
  (10, 1),
  (11, 1),
  (12, 1),
  (13, 2),
  (14, 2),
  (15, 2),
  (16, 3),
  (17, 3),
  (18, 3),
  (19, 1),
  (20, 1),
  (21, 1),
  (22, 2),
  (23, 2),
  (24, 2),
  (25, 3),
  (26, 3),
  (27, 3),
  (28, 1),
  (29, 1),
  (30, 1),
  (31, 2),
  (32, 2),
  (33, 2),
  (34, 3),
  (35, 3),
  (36, 3);

-- Extraccion de datos
-- Chistes de Manolito
select
  *
from
  Chistes
where
  idUsuario = 1;

-- o
select
  *
from
  Chistes c
  inner join Usuarios u on c.idUsuario = u.id
where
  u.nombre = 'Manolito';

-- Chistes de humor negro
select
  c.*
from
  Chistes c
  inner join ChisteTematicas ct on c.id = ct.idChiste
where
  ct.idTematica = 1;

-- o
select
  c.*
from
  Chistes c
  inner join ChisteTematicas ct on c.id = ct.idChiste
  inner join Tematicas t on t.id = ct.idTematica
where
  t.nombre = 'Humor negro';

-- Chistes de humor negro de Manolito
select
  c.*
from
  Chistes c
  inner join ChisteTematicas ct on c.id = ct.idChiste
where
  c.idUsuario = 1
  and ct.idTematica = 1;

-- o
select
  c.*
from
  Chistes c
  inner join ChisteTematicas ct on c.id = ct.idChiste
  inner join Tematicas t on t.id = ct.idTematica
  inner join Usuarios u on u.id = c.idUsuario
where
  t.nombre = 'Humor negro'
  and u.nombre = 'Manolito';
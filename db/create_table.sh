create table "user" (
    "id" SERIAL primary key,
    "firstName" VARCHAR(255),
    "lastName" VARCHAR(255),
    "email" VARCHAR(255),
    "isActive" BOOLEAN
);
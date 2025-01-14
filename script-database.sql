--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2 (Debian 15.2-1.pgdg110+1)
-- Dumped by pg_dump version 15.3

-- Started on 2025-01-14 11:29:12

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3374 (class 1262 OID 323009)
-- Name: cesde; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE cesde WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE cesde OWNER TO postgres;

\connect cesde

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 5 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: pg_database_owner
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO pg_database_owner;

--
-- TOC entry 3375 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 323065)
-- Name: cursos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cursos (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    nombre character varying NOT NULL,
    descripcion character varying NOT NULL,
    "duracionSemanas" integer NOT NULL,
    "precioCurso" double precision NOT NULL,
    "fechaInicio" date NOT NULL,
    "docenteId" uuid NOT NULL
);


ALTER TABLE public.cursos OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 323055)
-- Name: docentes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.docentes (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    nombre character varying NOT NULL,
    documento integer NOT NULL,
    correo character varying NOT NULL
);


ALTER TABLE public.docentes OWNER TO postgres;

--
-- TOC entry 3368 (class 0 OID 323065)
-- Dependencies: 216
-- Data for Name: cursos; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.cursos VALUES ('5d3b36dd-1fbb-461b-8c13-3de2e0902959', 'Python', 'string', 2, 100, '2025-01-14', 'f56832f9-14dd-4e96-8925-20533560fe12');
INSERT INTO public.cursos VALUES ('d9bd9a4c-d37a-48ce-b2f4-76b01e4571ee', 'C#', 'string', 0, 0, '2025-01-14', 'f56832f9-14dd-4e96-8925-20533560fe12');
INSERT INTO public.cursos VALUES ('2c31849e-67f6-4c97-9bb7-03fad79a3295', 'CSS', 'string', 0, 0, '2025-01-14', '3defd60a-2957-44e3-b199-3866e4de4c20');
INSERT INTO public.cursos VALUES ('77f57ebf-e8d3-4640-854e-1e30431421c3', 'Html', 'string', 0, 0, '2025-01-14', '3defd60a-2957-44e3-b199-3866e4de4c20');


--
-- TOC entry 3367 (class 0 OID 323055)
-- Dependencies: 215
-- Data for Name: docentes; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.docentes VALUES ('f56832f9-14dd-4e96-8925-20533560fe12', 'Carlos', 231456, 'carlos@yopmail.com');
INSERT INTO public.docentes VALUES ('3defd60a-2957-44e3-b199-3866e4de4c20', 'Steven', 1234, 'steven@yopmail.com');


--
-- TOC entry 3223 (class 2606 OID 323072)
-- Name: cursos PK_391c5a635ef6b4bd0a46cb75653; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cursos
    ADD CONSTRAINT "PK_391c5a635ef6b4bd0a46cb75653" PRIMARY KEY (id);


--
-- TOC entry 3219 (class 2606 OID 323062)
-- Name: docentes PK_5e3b015bd4d79caf4eadbf340a7; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.docentes
    ADD CONSTRAINT "PK_5e3b015bd4d79caf4eadbf340a7" PRIMARY KEY (id);


--
-- TOC entry 3221 (class 2606 OID 323064)
-- Name: docentes UQ_b5802e481361f03ff9d143d3561; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.docentes
    ADD CONSTRAINT "UQ_b5802e481361f03ff9d143d3561" UNIQUE (correo);


--
-- TOC entry 3224 (class 2606 OID 323078)
-- Name: cursos FK_7182c80e31c0109322e04e911cf; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cursos
    ADD CONSTRAINT "FK_7182c80e31c0109322e04e911cf" FOREIGN KEY ("docenteId") REFERENCES public.docentes(id) ON DELETE RESTRICT;


-- Completed on 2025-01-14 11:29:12

--
-- PostgreSQL database dump complete
--


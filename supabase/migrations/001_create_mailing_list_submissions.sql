create extension if not exists pgcrypto;

create table if not exists public.mailing_list_submissions (
  id uuid primary key default gen_random_uuid(),
  school text not null,
  email text not null unique,
  message text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.mailing_list_submissions enable row level security;

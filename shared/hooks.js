"use client";
import useInitTheme from "@/hooks/useInitTheme";
import usePagination from "@/hooks/usePagination";
import { useMutation, useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export {
  useState,
  useEffect,
  useMutation,
  useQuery,
  useRef,
  useMemo,
  useDispatch,
  useSelector,
  usePathname,
  //custom hooks
  usePagination,
  useInitTheme,
};

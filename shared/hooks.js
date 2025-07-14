"use client";
import usePagination from "@/hooks/usePagination";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAnimation } from "motion/react";
import useValidation from "@/hooks/useValidation";
import useSignOut from "@/hooks/useSignOut";
import { useRouter } from "next/navigation";
import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";

export {
  useState,
  useEffect,
  useMutation,
  useQuery,
  useQueryClient,
  useRef,
  useMemo,
  useDispatch,
  useSelector,
  usePathname,
  useAnimation,
  useRouter,
  //custom hooks
  usePagination,
  useValidation,
  useSignOut,
  useIsSmallScreen
};

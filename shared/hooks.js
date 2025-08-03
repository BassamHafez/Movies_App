"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState,useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAnimation } from "motion/react";
import useValidation from "@/hooks/useValidation";
import useSignOut from "@/hooks/useSignOut";
import { useRouter } from "next/navigation";
import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";
import useTrailer from "@/hooks/useWatchTrailer";
import usePlayTrailer from "@/hooks/usePlayTrailer";

export {
  useState,
  useEffect,
  useMutation,
  useQuery,
  useQueryClient,
  useRef,
  useMemo,
  useCallback,
  useDispatch,
  useSelector,
  usePathname,
  useAnimation,
  useRouter,
  //custom hooks
  useValidation,
  useSignOut,
  useIsSmallScreen,
  useTrailer,
  usePlayTrailer
};

"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState,useCallback } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useAnimation } from "framer-motion";
import useValidation from "@/hooks/useValidation";
import useSignOut from "@/hooks/useSignOut";
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
  useSearchParams,
  //custom hooks
  useValidation,
  useSignOut,
  useIsSmallScreen,
  useTrailer,
  usePlayTrailer,
};

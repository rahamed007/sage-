import { create } from 'zustand'

type Mode = 'online' | 'offline' | 'hybrid'
export type CourseId = 0|1|2|3

interface AppState {
  selectedCourse: CourseId
  setSelectedCourse: (c: CourseId)=>void
  targetBand: number
  currentBand: number
  mode: Mode
  setTargetBand: (v:number)=>void
  setCurrentBand: (v:number)=>void
  setMode: (m:Mode)=>void
  verifyId: string
  setVerifyId: (s:string)=>void
  toast: string|null
  setToast: (s:string|null)=>void
  enrollStep: number
  setEnrollStep: (n:number)=>void
  paymentMethod: 'bkash'|'nagad'|'card'
  setPaymentMethod: (m:'bkash'|'nagad'|'card')=>void
  mockBookings: {date:string, slot:string, id:string}[]
  addMockBooking: (b:{date:string, slot:string})=>void
}

export const useAppStore = create<AppState>((set)=>({
  selectedCourse: 0,
  setSelectedCourse: (c)=> set({selectedCourse:c}),
  targetBand: 7.5,
  currentBand: 5.5,
  mode: 'offline',
  setTargetBand: (v)=> set({targetBand:v}),
  setCurrentBand: (v)=> set({currentBand:v}),
  setMode: (m)=> set({mode:m}),
  verifyId: '',
  setVerifyId: (s)=> set({verifyId:s}),
  toast: null,
  setToast: (s)=> set({toast:s}),
  enrollStep: 1,
  setEnrollStep: (n)=> set({enrollStep:n}),
  paymentMethod: 'bkash',
  setPaymentMethod: (m)=> set({paymentMethod:m}),
  mockBookings: [],
  addMockBooking: (b)=> set(s=>({mockBookings:[...s.mockBookings, {...b, id: 'SAGE-MOCK-'+Math.floor(1000+Math.random()*9000)}]}))
}))

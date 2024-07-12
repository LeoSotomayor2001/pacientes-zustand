import { create } from "zustand"
import { DraftPatient, Patient } from "./types"
import {v4 as uuidv4} from 'uuid'
export type PatientState = {
    patients: Patient[]
    addPatient: (patient: DraftPatient) => void
}

const createPatient=(patient:DraftPatient):Patient=>{
    return {...patient,id: uuidv4()}
}
export const usePatientsStore = create<PatientState>((set) => ({
    patients: [],
    addPatient:(data)=>{
        const newPatient=createPatient(data)
        set((state)=>({
            patients: [...state.patients, newPatient]
        }))
    }
}))
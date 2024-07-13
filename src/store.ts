import { create } from "zustand"
import { createJSONStorage, devtools, persist } from "zustand/middleware"
import { DraftPatient, Patient } from "./types"
import { v4 as uuidv4 } from 'uuid'
export type PatientState = {
    patients: Patient[]
    activeID: Patient["id"]
    addPatient: (patient: DraftPatient) => void
    deletePatient: (id: Patient["id"]) => void
    getPatientById: (id: Patient["id"]) => void
    updatePatient: (patient: DraftPatient) => void
}

const createPatient = (patient: DraftPatient): Patient => {
    return { ...patient, id: uuidv4() }
}
export const usePatientsStore = create<PatientState>()(
    devtools(
    persist((set) => ({
        patients: [],
        activeID: 'null',
        addPatient: (data) => {
            const newPatient = createPatient(data)
            set((state) => ({
                patients: [...state.patients, newPatient]
            }))
        },
        deletePatient: (id) => {
            set((state) => ({
                patients: state.patients.filter(patient => patient.id !== id)
            }))
        },
        getPatientById: (id) => {
            set(() => ({
                activeID: id
            }))
        },
        updatePatient: (data) => {
            set((state) => ({
                patients: state.patients.map( patient => patient.id === state.activeID ? {id: state.activeID, ...data } : patient),
                activeId: ''
            }))
        }
    }),
    {
        name: 'patients-storage',
        storage:createJSONStorage(() => sessionStorage)
    })
))
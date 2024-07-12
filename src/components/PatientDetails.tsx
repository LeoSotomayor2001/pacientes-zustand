import { Patient } from "../types"

type PatientDetailsProps = {
    patient: Patient
}
export const PatientDetails = ({patient}: PatientDetailsProps) => {
  return (
    <div>
        <h2 className="font-black text-3xl text-center">{patient.name}</h2>
    </div>
  )
}

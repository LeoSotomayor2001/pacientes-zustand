import { toast } from "react-toastify";
import { usePatientsStore } from "../store";
import { Patient } from "../types";
import { PatientDetailItem } from "./PatientDetailItem";
import "react-toastify/dist/ReactToastify.css";
import { Error } from "./Error";

type PatientDetailsProps = {
  patient: Patient;
};
export const PatientDetails = ({ patient }: PatientDetailsProps) => {
  const { deletePatient } = usePatientsStore();
  const { getPatientById } = usePatientsStore();
  const handleClickDelete = () => {
    deletePatient(patient.id);
    toast.error("Paciente eliminado");
  };
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem label="ID" data={patient.id} />
      <PatientDetailItem label="Nombre" data={patient.name} />
      <PatientDetailItem label="Propietario" data={patient.caretaker} />
      <PatientDetailItem label="Email" data={patient.email} />
      <PatientDetailItem label="Fecha" data={patient.date.toString()} />
      <PatientDetailItem label="Sintomas" data={patient.symptoms} />
      <div className="flex flex-col gap-3 lg:flex-row justify-between mt-10">
        <button
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          type="button"
          onClick={() => getPatientById(patient.id)}
        >
          Editar
        </button>
        <button
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          type="button"
          onClick={handleClickDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

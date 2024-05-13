import { Injectable } from "@nestjs/common";
import { Doctor } from "src/doctors/doctor.entity";
import { Patient } from "src/patients/patient.entity";
import { Clinic } from "src/clinics/clinic.entity";

@Injectable()
export class DatasourceService {
    private doctors: Doctor[] = [];
    private patients: Patient[] = [];
    private clinics: Clinic[] = [];

    getDoctors(): Doctor[] {
        return this.doctors;
    }

    getPatients(): Patient[] {
        return this.patients;
    }

    getClinics(): Clinic[] {
        return this.clinics;
    }
}
